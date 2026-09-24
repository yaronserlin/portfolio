import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { extractTechnologies, extractLiveUrl, fetchGitHubProjects, deriveSkillsFromProjects, categorizeSkill, processReadmeHtml, buildGallery } from './githubService';

describe('extractTechnologies', () => {
    it('leads with the repo primary language when present', () => {
        expect(extractTechnologies('JavaScript', [])).toEqual(['JavaScript']);
    });

    it('appends mapped topics without duplicating the primary language', () => {
        expect(extractTechnologies('JavaScript', ['react', 'javascript', 'docker'])).toEqual([
            'JavaScript',
            'React',
            'Docker'
        ]);
    });

    it('ignores unknown topics and topics with unexpected casing handled via lowercase', () => {
        expect(extractTechnologies(null, ['REACT', 'not-a-real-topic'])).toEqual(['React']);
    });

    it('falls back to ["GitHub"] when nothing is known about the repo', () => {
        expect(extractTechnologies(null, [])).toEqual(['GitHub']);
        expect(extractTechnologies(undefined, undefined)).toEqual(['GitHub']);
    });
});

describe('extractLiveUrl', () => {
    it('prefers an explicit homepage URL', () => {
        expect(extractLiveUrl({ homepage: 'https://example.com', has_pages: true, name: 'repo' }))
            .toBe('https://example.com');
    });

    it('ignores a blank/whitespace-only homepage', () => {
        expect(extractLiveUrl({ homepage: '   ', has_pages: false, name: 'repo' })).toBeNull();
    });

    it('falls back to the GitHub Pages URL when has_pages is true', () => {
        expect(extractLiveUrl({ homepage: null, has_pages: true, name: 'my-repo' }))
            .toBe('https://yaronserlin.github.io/my-repo/');
    });

    it('returns null when there is no homepage and no pages site', () => {
        expect(extractLiveUrl({ homepage: null, has_pages: false, name: 'my-repo' })).toBeNull();
    });
});

describe('fetchGitHubProjects', () => {
    beforeEach(() => {
        sessionStorage.clear();
        vi.stubGlobal('fetch', vi.fn());
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('filters out forks and sorts the remaining repos by stars descending', async () => {
        fetch.mockImplementation((url) => {
            if (url.includes('/repos?')) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([
                        { id: 1, name: 'low-stars', fork: false, stargazers_count: 2, default_branch: 'main' },
                        { id: 2, name: 'forked-repo', fork: true, stargazers_count: 999, default_branch: 'main' },
                        { id: 3, name: 'high-stars', fork: false, stargazers_count: 10, default_branch: 'main' }
                    ])
                });
            }
            // languages endpoint and raw.githubusercontent media checks
            return Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}) });
        });

        const projects = await fetchGitHubProjects();

        expect(projects.map(p => p.repoName)).toEqual(['high-stars', 'low-stars']);
        expect(projects[0].title).toBe('High Stars');
    });

    it('drops non-project repos and lists featured projects first', async () => {
        fetch.mockImplementation((url) => {
            if (url.includes('/repos?')) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([
                        { id: 1, name: 'side-project', fork: false, stargazers_count: 50, default_branch: 'main' },
                        { id: 2, name: 'yaronserlin.github.io', fork: false, stargazers_count: 0, default_branch: 'main' },
                        { id: 3, name: 'yaronserlin', fork: false, stargazers_count: 0, default_branch: 'main' },
                        { id: 4, name: 'automata-editor', fork: false, stargazers_count: 0, default_branch: 'main' },
                        { id: 5, name: 'MaintenanceSystemApp', fork: false, stargazers_count: 0, default_branch: 'main' }
                    ])
                });
            }
            return Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}) });
        });

        const projects = await fetchGitHubProjects();

        expect(projects.map(p => p.repoName)).toEqual(['MaintenanceSystemApp', 'automata-editor', 'side-project']);
    });

    it('returns an empty array when the repo list request fails', async () => {
        fetch.mockResolvedValue({ ok: false, status: 500 });

        const projects = await fetchGitHubProjects();

        expect(projects).toEqual([]);
    });

    it('serves cached results on a second call without re-fetching', async () => {
        fetch.mockImplementation((url) => {
            if (url.includes('/repos?')) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve([
                        {
                            id: 1,
                            name: 'repo-one',
                            fork: false,
                            stargazers_count: 5,
                            default_branch: 'main',
                            language: null,
                            html_url: 'https://github.com/yaronserlin/repo-one',
                            homepage: null,
                            has_pages: false
                        }
                    ])
                });
            }
            return Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}) });
        });

        const first = await fetchGitHubProjects();
        const callCountAfterFirst = fetch.mock.calls.length;

        const second = await fetchGitHubProjects();

        expect(second).toEqual(first);
        expect(fetch.mock.calls.length).toBe(callCountAfterFirst);
    });
});

describe('deriveSkillsFromProjects', () => {
    it('collects unique technologies and languages across all projects', () => {
        const projects = [
            { technologies: ['React', 'JavaScript'], languages: ['JavaScript', 'TypeScript'] },
            { technologies: ['Python'], languages: ['Python'] }
        ];

        expect(deriveSkillsFromProjects(projects)).toEqual(['React', 'JavaScript', 'TypeScript', 'Python']);
    });

    it('skips raw GitHub language names that are not skills', () => {
        const projects = [{ technologies: ['React'], languages: ['CSS', 'SCSS', 'HTML', 'Shell', 'Dockerfile'] }];

        expect(deriveSkillsFromProjects(projects)).toEqual(['React']);
    });

    it('skips names already present in existingSkillNames, case-insensitively', () => {
        const projects = [{ technologies: ['React', 'Docker'], languages: [] }];

        expect(deriveSkillsFromProjects(projects, ['react'])).toEqual(['Docker']);
    });

    it('excludes the generic "GitHub" fallback placeholder', () => {
        const projects = [{ technologies: ['GitHub'], languages: [] }];

        expect(deriveSkillsFromProjects(projects)).toEqual([]);
    });

    it('ignores null/undefined language entries', () => {
        const projects = [{ technologies: ['GitHub'], languages: [null] }];

        expect(deriveSkillsFromProjects(projects)).toEqual([]);
    });

    it('returns an empty array when given no projects', () => {
        expect(deriveSkillsFromProjects([])).toEqual([]);
    });
});

describe('categorizeSkill', () => {
    it('categorizes known frontend languages/frameworks as Frontend', () => {
        expect(categorizeSkill('TypeScript')).toBe('Frontend');
        expect(categorizeSkill('SCSS')).toBe('Frontend');
        expect(categorizeSkill('Vue.js')).toBe('Frontend');
    });

    it('categorizes known backend languages/frameworks as Backend', () => {
        expect(categorizeSkill('Go')).toBe('Backend');
        expect(categorizeSkill('PostgreSQL')).toBe('Backend');
        expect(categorizeSkill('Django')).toBe('Backend');
    });

    it('falls back to "Tools & Languages" for anything unrecognized', () => {
        expect(categorizeSkill('Shell')).toBe('Tools & Languages');
        expect(categorizeSkill('Dockerfile')).toBe('Tools & Languages');
        expect(categorizeSkill('C++')).toBe('Tools & Languages');
    });

    it('is case-insensitive', () => {
        expect(categorizeSkill('javascript')).toBe('Frontend');
        expect(categorizeSkill('PYTHON')).toBe('Backend');
    });
});

describe('extractTechnologies ordering', () => {
    it('lists the main stack first regardless of GitHub topic order', () => {
        expect(extractTechnologies('JavaScript', ['vite', 'mongodb', 'react', 'nodejs', 'cmms'])).toEqual([
            'JavaScript', 'React', 'Node.js', 'MongoDB', 'Vite'
        ]);
    });
});

describe('processReadmeHtml', () => {
    const html = [
        '<p><img src="https://camo.githubusercontent.com/x" data-canonical-src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></p>',
        '<p><img src="docs/logo.png" alt="Logo"></p>',
        '<p><img src="media/demo.png" alt="Dashboard"></p>',
        '<p><img src="./docs/media/screenshots/home.jpg" alt="Home"></p>',
        '<p><a href="docs/user-guide.md">Guide</a> <a href="#setup">Setup</a></p>',
        '<script>alert(1)</script><img src="x.png" onerror="alert(2)">'
    ].join('');

    it('resolves relative paths and keeps only real screenshots', () => {
        const { images } = processReadmeHtml(html, 'demo-repo', 'main');
        expect(images.map(i => i.src)).toEqual([
            'https://raw.githubusercontent.com/yaronserlin/demo-repo/main/media/demo.png',
            'https://raw.githubusercontent.com/yaronserlin/demo-repo/main/docs/media/screenshots/home.jpg',
            'https://raw.githubusercontent.com/yaronserlin/demo-repo/main/x.png'
        ]);
    });

    it('rewrites links to GitHub, keeps in-page anchors and strips scripts and handlers', () => {
        const { html: out } = processReadmeHtml(html, 'demo-repo', 'main');
        expect(out).toContain('href="https://github.com/yaronserlin/demo-repo/blob/main/docs/user-guide.md"');
        expect(out).toContain('href="#setup"');
        expect(out).not.toContain('<script');
        expect(out).not.toContain('onerror');
    });
});

describe('buildGallery', () => {
    it('puts the demo image first, then README images, without duplicates', () => {
        const gallery = buildGallery('https://x/demo.png', [
            { src: 'https://x/a.png', alt: 'A' },
            { src: 'https://x/demo.png?raw=1', alt: 'dup' },
            { src: 'https://x/b.png', alt: 'B' },
        ]);
        expect(gallery.map(i => i.src)).toEqual(['https://x/demo.png', 'https://x/a.png', 'https://x/b.png']);
    });

    it('works without a demo image and caps the length', () => {
        const many = Array.from({ length: 15 }, (_, i) => ({ src: `https://x/${i}.png`, alt: '' }));
        expect(buildGallery(null, many)).toHaveLength(10);
        expect(buildGallery(null, undefined)).toEqual([]);
    });
});
