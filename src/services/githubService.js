/**
 * Preview: API service connecting to GitHub to retrieve and format public repository data for the portfolio showcase.
 */

const GITHUB_USERNAME = 'yaronserlin';
const GITHUB_API_URL = 'https://api.github.com';

/**
 * Retrieves public repositories from GitHub and maps them to the project format.
 * @returns {Promise<Array>} A list of formatted project objects sorted by stars.
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

        await Promise.all(projects.map(async (project) => {
            try {
                const languages = await fetchLanguageBreakdown(project.repoName);
                if (languages && languages.length > 0) {
                    project.languages = languages;
                }
            } catch (err) {
                // Ignore error and retain the primary language fallback
            }

            try {
                const mediaUrls = await checkMediaAvailability(project.repoName);
                project.image = mediaUrls.image;
                project.video = mediaUrls.video;
                project.gif = mediaUrls.gif;
            } catch (err) {
                // Ignore error and assume no media exists
            }
        }));

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
};

/**
 * Retrieves the programming languages mapping used in a given repository.
 * @param {string} repoName - The repository's name on GitHub.
 * @returns {Promise<Array<string>>} List of dominant programming languages present in the repo.
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
 * Checks for the existence of common preview media assets in a targeted repo's main branch.
 * @param {string} repoName - The repository's name on GitHub.
 * @returns {Promise<{ image: string|null, video: string|null, gif: string|null }>} Accessible asset URLs.
 */
const checkMediaAvailability = async (repoName) => {
    const baseUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/refs/heads/main/media`;

    const mediaObj = {
        image: null,
        video: null,
        gif: null
    };

    const checkUrl = async (url) => {
        try {
            const res = await fetch(url, { method: 'HEAD' });
            return res.ok ? url : null;
        } catch (e) {
            return null;
        }
    };

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
 * Maps GitHub languages and repository topics to standardized system skill tags.
 * @param {string} language - The primary evaluated language.
 * @param {Array<string>} topics - Repository topics provided by GitHub.
 * @returns {Array<string>} Combined array of formalized technology tags.
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
 * Extracts a functioning live preview URL from GitHub repo metadata if present.
 * @param {Object} repo - The repository details object.
 * @returns {string|null} Available live demo URL or null if missing.
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
