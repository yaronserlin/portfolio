/**
 * ProjectsPage Component - Portfolio Projects Showcase
 * 
 * This page displays all projects in the portfolio using a responsive grid layout.
 * Each project is presented as an interactive card with:
 * - Project thumbnail image
 * - Title and description
 * - Technology badges
 * - Links to GitHub repository and live demo (if available)
 * - Media viewer for project gifs/videos
 * 
 * Layout:
 * - Page header with title and subtitle
 * - Responsive grid of project cards (3 columns on desktop, 2 on tablet, 1 on mobile)
 * - Full viewport height with gradient background
 * 
 * Features:
 * - Loading state handling
 * - Interactive project cards with hover effects
 * - Modal viewer for project demos
 * - Fetches projects from GitHub API
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.projects - Array of project objects
 * @returns {React.ReactElement} Projects showcase page with grid of project cards
 */

import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import ProjectGrid from "../components/ProjectGrid";
import { PortfolioContext } from "../context/PortfolioContext";

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