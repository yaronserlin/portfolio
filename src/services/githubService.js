/**
 * PREVIEW: Data fetching service abstraction communicating directly with the GitHub API.
 */

const GITHUB_USERNAME = 'yaronserlin';
const GITHUB_API_URL = 'https://api.github.com';
const CACHE_KEY = 'github-projects-cache-v2';
const README_CACHE_PREFIX = 'github-readme-cache-v1:';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

// Repos that are not projects (profile README, GitHub Pages profile site, this site) and should never
// appear as project cards.
const EXCLUDED_REPOS = new Set(['yaronserlin', 'yaronserlin.github.io', 'portfolio']);

// Headline projects, shown first in this order. Everything else follows, sorted by stars.
const FEATURED_REPOS = ['MaintenanceSystemApp', 'cook-sync', 'ShareAndCopy', 'automata-editor'];

const featuredRank = (repoName) => {
    const index = FEATURED_REPOS.indexOf(repoName);
    return index === -1 ? FEATURED_REPOS.length : index;
};

const logError = (...args) => {
    if (import.meta.env.DEV) {
        console.error(...args);
    }
};

/**
 * Reads a previously cached project list from sessionStorage, if present and not expired.
 * Guards against unavailable/full storage (e.g. private browsing) by failing closed.
 *
 * @returns {Array|null} The cached project array, or null if there is no usable cache entry.
 */
const readCache = () => {
    try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (!raw) return null;

        const { timestamp, projects } = JSON.parse(raw);
        if (!timestamp || Date.now() - timestamp > CACHE_TTL_MS) return null;

        return projects;
    } catch {
        return null;
    }
};

/**
 * Persists the fetched project list to sessionStorage alongside a timestamp for TTL checks.
 *
 * @param {Array} projects - The resolved project array to cache.
 */
const writeCache = (projects) => {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), projects }));
    } catch {
        // Ignore quota/availability errors; caching is a best-effort optimization
    }
};

/**
 * Accesses the user's public repositories endpoint and maps each non-fork repo into the
 * app's internal project shape, ready for later language/media enrichment.
 *
 * @param {Array<Object>} repos - Raw repository payloads from the GitHub REST API.
 * @returns {Array<Object>} Mapped project objects: featured repos first, then by star count, descending.
 */
const mapReposToProjects = (repos) => {
    return repos
        .filter(repo => !repo.fork && !EXCLUDED_REPOS.has(repo.name))
        .map((repo) => ({
            id: repo.id,
            title: repo.name
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' '),
            description: repo.description || 'A GitHub project',
            technologies: extractTechnologies(repo.language, repo.topics),
            url: repo.html_url,
            liveUrl: extractLiveUrl(repo),
            image: null,
            video: null,
            gif: null,
            stars: repo.stargazers_count,
            language: repo.language,
            languages: [repo.language],
            repoName: repo.name,
            defaultBranch: repo.default_branch,
        }))
        .sort((a, b) => (featuredRank(a.repoName) - featuredRank(b.repoName)) || (b.stars - a.stars));
};

/**
 * Enriches a single mapped project in-place with its precise language breakdown and any
 * available demo media, swallowing per-project failures so one bad repo doesn't sink the batch.
 *
 * @param {Object} project - A project object as produced by mapReposToProjects.
 */
const enrichProject = async (project) => {
    try {
        const languages = await fetchLanguageBreakdown(project.repoName);
        if (languages && languages.length > 0) {
            project.languages = languages;
        }
    } catch {
        // Silently swallow specific secondary metric failures
    }

    try {
        const mediaUrls = await checkMediaAvailability(project.repoName, project.defaultBranch);
        project.image = mediaUrls.image;
        project.video = mediaUrls.video;
        project.gif = mediaUrls.gif;
    } catch {
        // Ignore missing visual media implementations
    }

    // No media/demo.* file: use the first screenshot from the repo's README instead.
    if (!project.image) {
        try {
            const readme = await fetchProjectReadme(project.repoName, project.defaultBranch);
            project.image = readme?.images[0]?.src || null;
        } catch {
            // No README image either; the card shows its placeholder
        }
    }
};

/**
 * Accesses user's public repositories endpoint, parses raw REST payloads into normalized
 * local project object schemes, and initiates parallel language/media asset checks.
 * Results are cached in sessionStorage for a short TTL to avoid burning through GitHub's
 * unauthenticated rate limit on every page load/reload.
 *
 * @returns {Promise<Array>} Asynchronous promise resolving to a sorted array of mapped project objects.
 */
export const fetchGitHubProjects = async () => {
    const cached = readCache();
    if (cached) return cached;

    try {
        const response = await fetch(
            `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();
        const projects = mapReposToProjects(repos);

        await Promise.all(projects.map(enrichProject));

        writeCache(projects);
        return projects;
    } catch (error) {
        logError('Error fetching GitHub projects:', error);
        return [];
    }
};

/**
 * Calls upon a specific repository's exact language split payload indicating precise byte mappings.
 *
 * @param {string} repoName - Target github repository identifier.
 * @returns {Promise<Array<string>>} List array containing named language properties.
 */
const fetchLanguageBreakdown = async (repoName) => {
    try {
        const response = await fetch(
            `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/languages`
        );

        if (!response.ok) {
            return [];
        }

        const languagesData = await response.json();
        const total = Object.values(languagesData).reduce((sum, val) => sum + val, 0);

        if (total === 0) {
            return [];
        }

        // Isolate map descriptors by converting byte sizes into hierarchical ranking tuples
        const sortedLanguages = Object.entries(languagesData)
            .map(([lang, bytes]) => ({ name: lang, bytes }))
            .sort((a, b) => b.bytes - a.bytes);

        return sortedLanguages.map(lang => lang.name);
    } catch (error) {
        logError(`Error fetching languages for ${repoName}:`, error);
        return [];
    }
};

/**
 * Validates existence of predefined rich media preview strings mapping exclusively inside target repo `main` branches.
 *
 * @param {string} repoName - Valid GitHub repository reference.
 * @returns {Promise<{ image: string|null, video: string|null, gif: string|null }>} Accessible media URL endpoints mapping.
 */
const checkMediaAvailability = async (repoName, defaultBranch = 'main') => {
    const baseUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/refs/heads/${defaultBranch}/media`;

    const mediaObj = {
        image: null,
        video: null,
        gif: null
    };

    /**
     * Executes minimal HEAD request bypassing excessive content payloads.
     */
    const checkUrl = async (url) => {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            return res.ok ? url : null;
        } catch {
            return null;
        }
    };

    // Parallel fetch validation
    const [pngRes, jpgRes, mp4Res, movRes, webmRes, gifRes] = await Promise.all([
        checkUrl(`${baseUrl}/demo.png`),
        checkUrl(`${baseUrl}/demo.jpg`),
        checkUrl(`${baseUrl}/demo.mp4`),
        checkUrl(`${baseUrl}/demo.mov`),
        checkUrl(`${baseUrl}/demo.webm`),
        checkUrl(`${baseUrl}/demo.gif`)
    ]);

    mediaObj.image = pngRes || jpgRes;
    mediaObj.video = mp4Res || movRes || webmRes;
    mediaObj.gif = gifRes;

    return mediaObj;
};

/**
 * Evaluates available GitHub metadata (primary lang, topical identifiers) returning standard internal formatting configurations.
 *
 * @param {string} language - Repository's natively identified majority domain language.
 * @param {Array<string>} topics - Additional repo level metadata arrays supplied by users manually on GitHub UI.
 * @returns {Array<string>} Filtered set mapping internal equivalents strings.
 */
export const extractTechnologies = (language, topics = []) => {
    const technologies = [];

    if (language) {
        technologies.push(language);
    }

    // Display names for repo topics, in the order they should appear (main stack first).
    // Topics not listed here (domain words like "cmms" or "recipe-app") are not shown as tags.
    const topicMapping = {
        'react': 'React',
        'nodejs': 'Node.js',
        'express': 'Express',
        'java': 'Java',
        'spring-boot': 'Spring Boot',
        'android': 'Android',
        'android-app': 'Android',
        'typescript': 'TypeScript',
        'javascript': 'JavaScript',
        'python': 'Python',
        'mongodb': 'MongoDB',
        'mysql': 'MySQL',
        'postgresql': 'PostgreSQL',
        'redis': 'Redis',
        'socket-io': 'Socket.IO',
        'material-ui': 'Material UI',
        'vite': 'Vite',
        'bootstrap': 'Bootstrap',
        'progressive-web-app': 'PWA',
        'pwa': 'PWA',
        'jwt-authentication': 'JWT',
        'rest-api': 'REST API',
        'api': 'REST API',
        'docker': 'Docker',
        'github-actions': 'GitHub Actions',
        'flyway': 'Flyway',
        'retrofit': 'Retrofit',
        'mvvm': 'MVVM',
        'svg': 'SVG',
        'katex': 'KaTeX',
        'latex': 'LaTeX',
        'tikz': 'TikZ',
        'vue': 'Vue.js',
        'angular': 'Angular',
        'web': 'Web Development',
        'database': 'Database',
        'html': 'HTML',
        'css': 'CSS',
    };

    if (Array.isArray(topics)) {
        const topicSet = new Set(topics.map(topic => String(topic).toLowerCase()));
        Object.entries(topicMapping).forEach(([topic, mappedTech]) => {
            if (topicSet.has(topic) && !technologies.includes(mappedTech)) {
                technologies.push(mappedTech);
            }
        });
    }

    return technologies.length > 0 ? technologies : ['GitHub'];
};

// "github" is the fallback tag extractTechnologies assigns when a repo has no recognized
// language/topic; it's a placeholder, not an actual skill. The rest are raw GitHub language
// names that duplicate the curated list (HTML5/CSS3) or are build files, not skills.
const SKILL_DISCOVERY_IGNORE_LIST = new Set(['github', 'html', 'css', 'scss', 'shell', 'dockerfile']);

/**
 * Aggregates the technologies/languages already attached to fetched GitHub projects into a
 * flat list of newly discovered skill names, skipping anything the caller says it already has.
 * Reuses data fetched by fetchGitHubProjects instead of issuing further API requests.
 *
 * @param {Array<Object>} projects - Mapped/enriched project objects, as returned by fetchGitHubProjects.
 * @param {Array<string>} [existingSkillNames=[]] - Skill names already shown elsewhere, to avoid duplicating.
 * @returns {Array<string>} Newly discovered skill names, in first-seen order.
 */
export const deriveSkillsFromProjects = (projects, existingSkillNames = []) => {
    const seen = new Set(existingSkillNames.map(name => name.toLowerCase()));
    const discovered = [];

    projects.forEach((project) => {
        const candidates = [...(project.technologies || []), ...(project.languages || [])];

        candidates.forEach((name) => {
            if (!name) return;

            const key = name.toLowerCase();
            if (seen.has(key) || SKILL_DISCOVERY_IGNORE_LIST.has(key)) return;

            seen.add(key);
            discovered.push(name);
        });
    });

    return discovered;
};

// Category names must match the categories declared in portfolioDetails.js exactly, so
// discovered skills can be merged into the same Frontend/Backend/Tools & Languages groups
// the static skill list already renders under.
const FRONTEND_SKILL_KEYWORDS = new Set([
    'javascript', 'typescript', 'html', 'html5', 'css', 'css3', 'scss', 'sass', 'less',
    'react', 'vue', 'vue.js', 'angular', 'bootstrap', 'tailwind', 'tailwind css', 'jquery',
    'web development'
]);

const BACKEND_SKILL_KEYWORDS = new Set([
    'node.js', 'express', 'python', 'java', 'javafx', 'php', 'ruby', 'go', 'c#',
    'mongodb', 'postgresql', 'sql', 'rest api', 'rest apis', 'django', 'flask', 'spring',
    'graphql', 'database'
]);

/**
 * Buckets a skill name into whichever of the app's three static skill categories it best
 * fits, so GitHub-derived skills read as part of the same Frontend/Backend/Tools groups
 * instead of a separate list. Anything not recognized as clearly frontend or backend
 * (languages, CLI tools, infra config, etc.) falls into "Tools & Languages".
 *
 * @param {string} name - A skill/technology/language name.
 * @returns {"Frontend"|"Backend"|"Tools & Languages"} The matching static category name.
 */
export const categorizeSkill = (name) => {
    const key = name.toLowerCase();

    if (FRONTEND_SKILL_KEYWORDS.has(key)) return 'Frontend';
    if (BACKEND_SKILL_KEYWORDS.has(key)) return 'Backend';
    return 'Tools & Languages';
};

/**
 * Inspects parsed repository data looking for viable linked live application instances.
 *
 * @param {Object} repo - Validated github application domain properties object.
 * @returns {string|null} Full domain locator string if verifiable, or explicitly null.
 */
export const extractLiveUrl = (repo) => {
    if (repo.homepage && repo.homepage.trim()) {
        return repo.homepage;
    }

    if (repo.has_pages) {
        return `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;
    }

    return null;
};

const BADGE_OR_ICON_PATTERN = /(shields\.io|badge\.svg|\/badge\b|\/badges?\/|logo|qr|icon)/i;

/**
 * Turns a README-relative path into an absolute URL: raw file URLs for images,
 * github.com blob URLs for links.
 */
const toAbsoluteRepoUrl = (value, repoName, branch, isImage) => {
    if (!value || /^(https?:|mailto:|data:|#)/i.test(value)) return value;
    const path = value.replace(/^\.?\//, '');
    return isImage
        ? `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${branch}/${path}`
        : `https://github.com/${GITHUB_USERNAME}/${repoName}/blob/${branch}/${path}`;
};

/**
 * Cleans GitHub-rendered README HTML for display on this site: resolves relative image and
 * link paths against the repo, opens links in a new tab, and strips anything executable.
 * Also returns the README's screenshots (badges, logos and QR codes skipped) for galleries.
 *
 * @param {string} html - README HTML from the GitHub API.
 * @param {string} repoName - Repository name.
 * @param {string} [branch='main'] - Default branch.
 * @returns {{ html: string, images: Array<{src: string, alt: string}> }}
 */
export const processReadmeHtml = (html, repoName, branch = 'main') => {
    const doc = new DOMParser().parseFromString(html || '', 'text/html');

    doc.querySelectorAll('script, iframe, object, embed, style, form').forEach(el => el.remove());
    doc.querySelectorAll('*').forEach((el) => {
        [...el.attributes].forEach((attr) => {
            if (/^on/i.test(attr.name)) el.removeAttribute(attr.name);
        });
    });

    const images = [];
    doc.querySelectorAll('img').forEach((img) => {
        const src = toAbsoluteRepoUrl(img.getAttribute('src'), repoName, branch, true);
        img.setAttribute('src', src);
        img.setAttribute('loading', 'lazy');
        const canonical = img.getAttribute('data-canonical-src') || src;
        if (!BADGE_OR_ICON_PATTERN.test(canonical) && !images.some(i => i.src === src)) {
            images.push({ src, alt: img.getAttribute('alt') || '' });
        }
    });

    doc.querySelectorAll('a[href]').forEach((a) => {
        const href = a.getAttribute('href');
        if (href.startsWith('#')) return;
        a.setAttribute('href', toAbsoluteRepoUrl(href, repoName, branch, false));
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
    });

    return { html: doc.body.innerHTML, images };
};

/**
 * Fetches a repo's README as GitHub-rendered HTML and prepares it for display.
 * Cached in sessionStorage so opening a project page again costs no API call.
 *
 * @param {string} repoName - Repository name.
 * @param {string} [branch='main'] - Default branch, used to resolve relative paths.
 * @returns {Promise<{ html: string, images: Array<{src: string, alt: string}> }|null>}
 */
export const fetchProjectReadme = async (repoName, branch = 'main') => {
    const cacheKey = `${README_CACHE_PREFIX}${repoName}`;
    try {
        const cached = JSON.parse(sessionStorage.getItem(cacheKey));
        if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) return cached.data;
    } catch {
        // Unreadable cache entry; fetch again
    }

    try {
        const response = await fetch(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`, {
            headers: { Accept: 'application/vnd.github.html+json' }
        });
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

        const data = processReadmeHtml(await response.text(), repoName, branch);
        try {
            sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
        } catch {
            // Storage full or unavailable; caching is best-effort
        }
        return data;
    } catch (error) {
        logError(`Error fetching README for ${repoName}:`, error);
        return null;
    }
};
