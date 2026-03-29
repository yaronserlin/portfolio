/**
 * GitHub API Service
 * Fetches public repositories and transforms them into portfolio project format
 */

const GITHUB_USERNAME = 'yaronserlin';
const GITHUB_API_URL = 'https://api.github.com';

/**
 * Fetch public repositories from GitHub
 * @returns {Promise<Array>} Array of transformed project objects
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

        // Filter and transform repositories
        let projects = repos
            .filter(repo => !repo.fork) // Exclude forked repositories
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
                    // Set default media structure
                    image: null,
                    video: null,
                    gif: null,
                    stars: repo.stargazers_count,
                    language: repo.language,
                    languages: [repo.language], // Will be updated with full breakdown
                    repoName: repo.name, // Store for later API calls
                };

                return projectObj;
            })
            .sort((a, b) => b.stars - a.stars); // Sort by stars descending

        // Concurrently fetch languages and check media for all projects
        await Promise.all(projects.map(async (project) => {
            // Fetch language breakdown
            try {
                const languages = await fetchLanguageBreakdown(project.repoName);
                if (languages && languages.length > 0) {
                    project.languages = languages;
                }
            } catch (err) {
                // Keep default language on error
            }

            // Check media availability
            try {
                const mediaUrls = await checkMediaAvailability(project.repoName);
                project.image = mediaUrls.image;
                project.video = mediaUrls.video;
                project.gif = mediaUrls.gif;
            } catch (err) {
                // Keep nulls on error
            }
        }));

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
};

/**
 * Fetch language breakdown for a specific repository
 * @param {string} repoName - Repository name
 * @returns {Promise<Array>} Array of language names sorted by usage
 */
const fetchLanguageBreakdown = async (repoName) => {
    try {
        const response = await fetch(
            `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/languages`
        );

        if (!response.ok) {
            return []; // Return empty on failure
        }

        const languagesData = await response.json();
        const total = Object.values(languagesData).reduce((sum, val) => sum + val, 0);

        if (total === 0) {
            return [];
        }

        // Sort by most used language
        const sortedLanguages = Object.entries(languagesData)
            .map(([lang, bytes]) => ({ name: lang, bytes }))
            .sort((a, b) => b.bytes - a.bytes);

        // Return just the language names
        return sortedLanguages.map(lang => lang.name);
    } catch (error) {
        console.error(`Error fetching languages for ${repoName}:`, error);
        return [];
    }
};

/**
 * Check which media files are available for a given repository
 * @param {string} repoName - Repository name
 * @returns {Promise<Object>} Object containing valid URLs for image, video, and gif depending on presence
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

    // Parallel checks for media files
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
 * Extract technologies from language and topics
 * @param {string} language - Primary language
 * @param {Array} topics - Repository topics
 * @returns {Array} Array of technology strings
 */
const extractTechnologies = (language, topics = []) => {
    const technologies = [];

    if (language) {
        technologies.push(language);
    }

    // Map common topics to tech stack
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
 * Extract live URL from repository (checks for gh-pages or homepage)
 * @param {Object} repo - Repository object
 * @returns {string|null} Live URL if available
 */
const extractLiveUrl = (repo) => {
    if (repo.homepage && repo.homepage.trim()) {
        return repo.homepage;
    }

    // Check if repo has GitHub Pages enabled
    if (repo.has_pages) {
        return `https://${GITHUB_USERNAME}.github.io/${repo.name}/`;
    }

    return null;
};
