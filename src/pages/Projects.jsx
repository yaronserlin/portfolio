// Importing necessary components and modules
import ProjectCard from '../components/ProjectCard'; // Component to display individual project cards
import Section from '../components/Section'; // Component to define a section layout
import Container from '../components/Container'; // Component to wrap the page content
import projects from '../data/projects'; // Array of project data
import styles from '../styles/Projects.module.css'; // CSS module for styling

import { useRef } from 'react'; // Hook to create a reference to DOM elements
import { useNavigate } from 'react-router-dom'; // Hook to programmatically navigate between routes

// Constants for card dimensions and spacing
const cardSize = 250; // Width of a single project card
const cardPadding = 16; // Padding between project cards
const cardWidth = cardSize + cardPadding * 2; // Total width of each card including padding

/**
 * Projects Component
 * Displays a horizontally scrollable list of project cards.
 * Users can navigate between projects using arrow buttons or click on a project to view its details.
 */
function Projects() {
    const navigate = useNavigate(); // Hook to navigate to different pages
    const scrollContainerRef = useRef(null); // Reference to the scrollable container

    /**
     * Handles navigation to a specific project page.
     * @param {string} page - The route of the project page to navigate to.
     */
    const handleProjectClick = (page) => {
        navigate(page);
    };

    /**
     * Scrolls the project list horizontally by a specified offset.
     * @param {number} scrollOffset - The distance to scroll (positive for right, negative for left).
     */
    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };

    return (

        < Section className={styles.sectionTitle} title="My Projects" >
            <Container className={styles.pageContainer}>
                <div className={styles.scrollWrapper}>
                    {/* Left arrow button to scroll left */}
                    <button className={styles.arrow} onClick={() => scroll(-cardWidth)}>&lt;</button>

                    {/* Scrollable container for project cards */}
                    <div className={styles.scrollContainer} ref={scrollContainerRef}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index} // Unique key for each project card
                                title={project.title} // Project title
                                description={project.description} // Project description
                                image={project.image} // Project image
                                link={project.link} // Link to the project
                                onClick={() => handleProjectClick(project.page)} // Click handler for navigation
                            />
                        ))}
                    </div>

                    {/* Right arrow button to scroll right */}
                    <button className={styles.arrow} onClick={() => scroll(cardWidth)}>&gt;</button>
                </div>

            </Container >
        </Section >
    );
}

export default Projects;