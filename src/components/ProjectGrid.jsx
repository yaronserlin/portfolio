/**
 * PREVIEW: Auto-arranging grid layer managing the presentation context of numerous project cards.
 */

import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

/**
 * Loops over provided architectural project instances mapping them into responsive col blocks
 * bound tightly to Bootstrap's grid specifications.
 * 
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.projects - Array of project definitions supplied via Github.
 * @returns {JSX.Element} The rendered project grid boundary.
 */
const ProjectGrid = ({ projects }) => {
    // Guard against empty datasets to prevent rendering empty structural wrappers
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
