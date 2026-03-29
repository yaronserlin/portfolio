/**
 * Preview: A gallery-style page listing the dynamically loaded suite of GitHub repository projects associated with the owner.
 */

import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import ProjectGrid from "../components/ProjectGrid";
import { PortfolioContext } from "../context/PortfolioContext";

/**
 * Handles the display logic for the projects iteration section, rendering loading states or grid listings based on application state context.
 * @param {Object} props - The incoming properties.
 * @param {Array<Object>} props.projects - An array filled with project instances harvested primarily from external hubs (GitHub).
 * @returns {JSX.Element} The composed Projects page.
 */
const ProjectsPage = ({ projects }) => {
    const { isLoadingProjects } = useContext(PortfolioContext);

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