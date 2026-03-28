/**
 * ProjectGrid Component - Grid Layout for Projects Display
 * 
 * Displays projects in a responsive grid layout using ProjectCard components.
 * Each project is presented in its own responsive column.
 * 
 * Layout:
 * - 3 columns on large screens
 * - 2 columns on medium screens
 * - 1 column on small screens
 * - 4px gap between cards (Bootstrap g-4 class)
 * 
 * Features:
 * - Empty state message if no projects
 * - Responsive Bootstrap grid system
 * - Reusable ProjectCard component for each project
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.projects - Array of project objects
 * @returns {React.ReactElement} Grid container with project cards
 */

import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <div className="text-center py-5">No projects to display</div>;
    }

    return (
        <Row className="g-4 text-center">
            {projects.map((project) => (
                <Col key={project.id} className="col-12 col-md-6 col-lg-4">
                    <ProjectCard project={project} />
                </Col>
            ))}
        </Row>
    );
};

export default ProjectGrid;
