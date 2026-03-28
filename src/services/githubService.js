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
        const projects = repos
            .filter(repo => !repo.fork) // Exclude forked repositories
            .map((repo, index) => ({
                id: repo.id,
                title: repo.name
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' '),
                description: repo.description || 'A GitHub project',
                technologies: extractTechnologies(repo.language, repo.topics),
                url: repo.html_url,
                liveUrl: extractLiveUrl(repo),
                image: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/refs/heads/main/screenshot.png`,
                // Videos and GIFs can be stored in /media or /assets folder
                video: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/refs/heads/main/media/demo.mp4`,
                gif: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/refs/heads/main/media/demo.gif`,
                stars: repo.stargazers_count,
                language: repo.language,
            }))
            .sort((a, b) => b.stars - a.stars); // Sort by stars descending

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
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
