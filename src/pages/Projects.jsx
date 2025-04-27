import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import Container from '../components/Container';
import projects from '../data/projects';
import styles from '../styles/Projects.module.css';

import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    const handleProjectClick = (page) => {
        // Navigate to the project link
        navigate(page);
    }

    return (
        <Container >
            <Section className={styles.sectionTitle} title="My Projects">
                <Container className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            onClick={() => handleProjectClick(project.page)} // Pass the link to
                        />
                    ))}
                </Container>
            </Section>
        </Container>
    );
}

export default Projects;
