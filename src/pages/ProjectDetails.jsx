// src/pages/ProjectDetails.jsx
import { useParams } from 'react-router-dom';
import projects from '../data/projects'; // wherever you keep your array

function ProjectDetails() {
    const { projectId } = useParams();
    const project = projects.find(p => p.page === `/projects/${projectId}`);

    if (!project) {
        return <div>Project not found.</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
    );
}

export default ProjectDetails;
