/**
 * Preview: A structured flex container managing the alignment and spacing of dynamically loaded repository cards.
 */

import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

/**
 * Automatically structures passed projects into a responsive sequence row.
 * @param {Object} props - Target configurations.
 * @param {Array<Object>} props.projects - Filtered list of Github data objects ready for framing.
 * @returns {JSX.Element} Composed map iteration of ProjectCard modules.
 */
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
