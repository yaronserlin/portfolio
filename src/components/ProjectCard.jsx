import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ title, description, image, link, ...props }) {
    return (
        <div className={styles.projectCard} {...props}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;