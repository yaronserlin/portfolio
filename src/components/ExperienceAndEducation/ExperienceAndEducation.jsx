// src/components/ExperienceAndEducation/ExperienceAndEducation.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExperienceAndEducation.module.css';
import Container from '../Container/Container';
import Text from '../Text/Text';

/**
 * ExperienceAndEducation
 *
 * Displays experience and education entries with a left-aligned title and right-aligned entries.
 *
 * @param {object} props
 * @param {Array<{ title: string, institution: string, description: string, date: string }>} props.experienceAndEducation
 */
const ExperienceAndEducation = ({ experienceAndEducation = [] }) => (

    <Container className={styles.wrapper}>
        <Container className={styles.leftColumn}>
            <Text as='h2' className={styles.heading}>Experience & Education</Text>
        </Container>

        <Container className={styles.rightColumn}>
            {experienceAndEducation.map((item, index) => (
                <Container key={index} className={styles.entry}>
                    <Text as='h4' className={styles.date}>{item.date}</Text>
                    <Container className={styles.entryContent}>
                        <Text as='h4' className={styles.title}>{item.title}</Text>
                        <Text as='h4' className={styles.institution}>{item.institution}</Text>
                        <Text as='p' className={styles.description}>{item.description}</Text>
                    </Container>
                </Container>
            ))}
        </Container>
    </Container>
);

ExperienceAndEducation.propTypes = {
    experienceAndEducation: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ExperienceAndEducation;
