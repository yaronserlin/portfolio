// src/components/SampleWork/SampleWork.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SampleWork.module.css';
import Container from '../Container/Container';
import Image from '../Image/Image';
import Text from '../Text/Text';

/**
 * SampleWork
 * Displays a gallery of projects or samples of work.
 *
 * @param {Array} projects - List of project objects with title, description, image, and link.
 */
const SampleWork = ({ projects }) => (

    <Container className={styles.sampleWorkSection}>
        <h2 className={styles.heading}>Sample Work</h2>
        <Container className={styles.grid}>
            {projects.map((project, index) => (
                <Container key={index} className={styles.card}>

                    <Image src={project.image} alt={project.title} className={styles.image} />
                    <Container className={styles.content}>

                        <Text as='h4' className={styles.title}>{project.title}</Text>
                        <Text as='p' className={styles.description}>{project.description}</Text>
                        {project.link && (

                            <Text as='a' href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                View Project
                            </Text>
                        )}
                    </Container>
                </Container>
            ))}
        </Container>
    </Container>
);

SampleWork.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string,
        })
    ).isRequired,
};

export default SampleWork;
