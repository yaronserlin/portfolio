/**
 * PREVIEW: Data fetching service abstraction communicating directly with the GitHub API.
 */

const GITHUB_USERNAME = 'yaronserlin';
const GITHUB_API_URL = 'https://api.github.com';

/**
 * Accesses user's public repositories endpoint, parses raw REST payloads into normalized
 * local project object schemes, and initiates parallel language/media asset checks.
 * 
 * @returns {Promise<Array>} Asynchronous promise resolving to a sorted array of mapped project objects.
 */
export const fetchGitHubProjects = async () => {
    try {
        const response = await fetch(
            `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos = await response.json();

        // Standardize base project configurations excluding forks and transforming titles
        let projects = repos
            .filter(repo => !repo.fork)
            .map((repo) => {
                const projectObj = {
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
                };

                return projectObj;
            })
            .sort((a, b) => b.stars - a.stars);

        // Fetch extensive linguistic metrics and direct media links sequentially
        await Promise.all(projects.map(async (project) => {
            try {
                const languages = await fetchLanguageBreakdown(project.repoName);
                if (languages && languages.length > 0) {
                    project.languages = languages;
                }
            } catch {
                // Silently swallow specific secondary metric failures
            }

            try {
                const mediaUrls = await checkMediaAvailability(project.repoName);
                project.image = mediaUrls.image;
                project.video = mediaUrls.video;
                project.gif = mediaUrls.gif;
            } catch {
                // Ignore missing visual media implementations
            }
        }));

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
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
        console.error(`Error fetching languages for ${repoName}:`, error);
        return [];
    }
};

/**
 * Validates existence of predefined rich media preview strings mapping exclusively inside target repo `main` branches.
 * 
 * @param {string} repoName - Valid GitHub repository reference.
 * @returns {Promise<{ image: string|null, video: string|null, gif: string|null }>} Accessible media URL endpoints mapping.
 */
const checkMediaAvailability = async (repoName) => {
    const baseUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/refs/heads/main/media`;

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
const extractTechnologies = (language, topics = []) => {
    const technologies = [];

    if (language) {
        technologies.push(language);
    }

    const topicMapping = {
        'react': 'React',
        'javascript': 'JavaScript',
        'typescript': 'TypeScript',
        'nodejs': 'Node.js',
        'python': 'Python',
        'java': 'Java',
        'web': 'Web Development',
        'api': 'REST API',
        'database': 'Database',
        'mongodb': 'MongoDB',
        'postgresql': 'PostgreSQL',
        'express': 'Express',
        'vue': 'Vue.js',
        'angular': 'Angular',
        'html': 'HTML',
        'css': 'CSS',
        'bootstrap': 'Bootstrap',
        'docker': 'Docker',
    };

    if (Array.isArray(topics)) {
        topics.forEach(topic => {
            const mappedTech = topicMapping[topic.toLowerCase()];
            if (mappedTech && !technologies.includes(mappedTech)) {
                technologies.push(mappedTech);
            }
        });
    }

    return technologies.length > 0 ? technologies : ['GitHub'];
};

/**
 * Inspects parsed repository data looking for viable linked live application instances.
 * 
 * @param {Object} repo - Validated github application domain properties object.
 * @returns {string|null} Full domain locator string if verifiable, or explicitly null.
 */
const extractLiveUrl = (repo) => {
    if (repo.homepage && repo.homepage.trim()) {
        return repo.homepage;
    }

    if (repo.has_pages) {
        return `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;
    }

    return null;
};
