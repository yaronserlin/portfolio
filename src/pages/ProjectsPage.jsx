/**
 * PREVIEW: Projects gallery page displaying a grid of the author's work, including loading states.
 */

import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import ProjectGrid from "../components/ProjectGrid";
import { PortfolioContext } from "../context/PortfolioContext";

/**
 * Renders the portfolio projects section. Integrates with the global context to check
 * data-fetching state, displaying either a loading spinner or the populated grid of repositories.
 * 
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.projects - Array of project data objects to display.
 * @returns {JSX.Element} The rendered projects page.
 */
const ProjectsPage = ({ projects }) => {
    const { isLoadingProjects } = useContext(PortfolioContext);

    // Provide a loading state overlay while fetching repository data
    if (isLoadingProjects) {
        return (
            <Container
                as="section"
                id="projects"
                className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-5"
                style={{
                    background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)',
                    paddingTop: '3rem',
                    paddingBottom: '3rem'
                }}
            >
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading projects...</span>
                </div>
                <p className="mt-3 text-muted">Loading projects from GitHub...</p>
            </Container>
        );
    }

    // Guard clause for empty project list scenarios
    if (!projects || projects.length === 0) {
        return (
            <Container
                as="section"
                id="projects"
                className="min-vh-100 d-flex flex-column py-5"
                style={{
                    background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)',
                    paddingTop: '3rem',
                    paddingBottom: '3rem'
                }}
            >
                <SectionHeader
                    title="Projects"
                    subtitle="Showcasing my recent work and portfolio"
                />
                <div className="text-center py-5">
                    <p className="text-muted">No projects available at the moment.</p>
                </div>
            </Container>
        );
    }

    return (
        <Container
            as="section"
            id="projects"
            className="min-vh-100 d-flex flex-column py-5"
            style={{
                background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)',
                paddingTop: '3rem',
                paddingBottom: '3rem'
            }}
        >
            <SectionHeader
                title="Projects"
                subtitle="Showcasing my recent work and portfolio"
            />

            <ProjectGrid projects={projects} />
        </Container>
    );
};

export default ProjectsPage;