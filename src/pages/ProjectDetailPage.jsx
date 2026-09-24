/**
 * PREVIEW: Page for a single project - description, stack, links, screenshots and the full README,
 * all pulled live from the project's GitHub repository.
 */

import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PortfolioContext } from '../context/PortfolioContext';
import { fetchProjectReadme } from '../services/githubService';
import LanguageBadge from '../components/LanguageBadge';

const pageStyle = {
    background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)'
};

/**
 * Renders the detail page for the project whose repo name is in the URL.
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.projects - Projects loaded from GitHub.
 * @returns {JSX.Element} The project page.
 */
const ProjectDetailPage = ({ projects }) => {
    const { repoName } = useParams();
    const { isLoadingProjects } = useContext(PortfolioContext);
    const project = (projects || []).find(p => p.repoName.toLowerCase() === repoName.toLowerCase());

    // README result tagged with the repo it belongs to, so switching projects shows "loading"
    // until the new README arrives instead of the previous project's text.
    const [readmeResult, setReadmeResult] = useState({ repo: null, data: null });

    useEffect(() => {
        if (!project) return undefined;
        let cancelled = false;
        fetchProjectReadme(project.repoName, project.defaultBranch).then((data) => {
            if (!cancelled) setReadmeResult({ repo: project.repoName, data });
        });
        return () => { cancelled = true; };
    }, [project]);

    const readmeLoaded = project && readmeResult.repo === project.repoName;
    const readme = readmeLoaded ? readmeResult.data : null;
    const readmeState = !readmeLoaded ? 'loading' : (readme ? 'ready' : 'error');

    useEffect(() => {
        if (project) document.title = `${project.title} - Yaron Serlin`;
        return () => { document.title = 'Yaron Serlin - Junior Full-Stack Developer'; };
    }, [project]);

    if (isLoadingProjects) {
        return (
            <Container as="section" className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-5" style={pageStyle}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading project...</span>
                </div>
            </Container>
        );
    }

    if (!project) {
        return (
            <Container as="section" className="min-vh-100 py-5 text-center" style={pageStyle}>
                <h1 className="h3 mb-3">Project not found</h1>
                <p className="text-muted">There is no project called "{repoName}".</p>
                <Link to="/projects" className="btn btn-primary">Back to projects</Link>
            </Container>
        );
    }

    const screenshots = readme?.images || [];
    const gallery = screenshots.length > 0 ? screenshots : (project.image ? [{ src: project.image, alt: project.title }] : []);

    return (
        <Container as="section" className="min-vh-100 py-5 project-detail" style={pageStyle}>
            <Link to="/projects" className="d-inline-block mb-4 text-decoration-none">&larr; All projects</Link>

            <Row className="g-4 align-items-start mb-4">
                <Col lg={7}>
                    <h1 className="fw-bold mb-3">{project.title}</h1>
                    <p className="lead mb-3">{project.description}</p>
                    {project.technologies?.length > 0 && (
                        <div className="mb-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {project.technologies.map(tech => <LanguageBadge key={tech} language={tech} />)}
                        </div>
                    )}
                    <div className="d-flex flex-wrap gap-2">
                        {project.liveUrl && (
                            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary">
                                Live Demo
                            </Button>
                        )}
                        <Button href={project.url} target="_blank" rel="noopener noreferrer" variant="outline-primary">
                            Code on GitHub
                        </Button>
                    </div>
                </Col>
                {gallery[0] && (
                    <Col lg={5}>
                        <a href={gallery[0].src} target="_blank" rel="noopener noreferrer">
                            <img src={gallery[0].src} alt={gallery[0].alt || `${project.title} screenshot`} className="img-fluid rounded shadow-sm project-hero-image" />
                        </a>
                    </Col>
                )}
            </Row>

            {gallery.length > 1 && (
                <>
                    <h2 className="h4 fw-bold mb-3">Screenshots</h2>
                    <Row className="g-3 mb-5">
                        {gallery.slice(1).map(img => (
                            <Col key={img.src} xs={6} md={4} lg={3}>
                                <a href={img.src} target="_blank" rel="noopener noreferrer" className="d-block project-thumb">
                                    <img src={img.src} alt={img.alt || `${project.title} screenshot`} loading="lazy" className="w-100 h-100 rounded shadow-sm" />
                                </a>
                                {img.alt && <div className="small text-muted mt-1">{img.alt}</div>}
                            </Col>
                        ))}
                    </Row>
                </>
            )}

            <h2 className="h4 fw-bold mb-3">About this project</h2>
            {readmeState === 'loading' && (
                <div className="spinner-border spinner-border-sm text-primary" role="status">
                    <span className="visually-hidden">Loading README...</span>
                </div>
            )}
            {readmeState === 'error' && (
                <p className="text-muted">
                    Couldn't load the full description right now. <a href={project.url} target="_blank" rel="noopener noreferrer">Read it on GitHub</a>.
                </p>
            )}
            {readmeState === 'ready' && (
                <div className="readme-content bg-white rounded shadow-sm p-4" dangerouslySetInnerHTML={{ __html: readme.html }} />
            )}
        </Container>
    );
};

export default ProjectDetailPage;
