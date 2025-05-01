// src/components/SkillsProficiencies/SkillsProficiencies.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsProficiencies.module.css';
import Container from '../Container/Container';
import Text from '../Text/Text';

/**
 * SkillsProficiencies
 * Displays a list of skills with proficiency bars.
 *
 * @param {Array} skills - Array of skill objects with name and level (0–100).
 */
const SkillsProficiencies = ({ skills = [] }) => (

    <Container className={styles.skillsSection}>

        <Text as='h2' className={styles.heading}>Skills & Proficiencies</Text>
        <Container className={styles.skillsList}>
            {skills.map((skill, index) => (
                <Container key={index} className={styles.skill}>
                    <Text as='h5' className={styles.skillName}>{skill.name}</Text>
                    <Container className={styles.progressBar}>
                        <Container
                            className={styles.progress}
                            style={{ width: `${skill.level}%` }}
                        />
                    </Container>
                </Container>
            ))}
        </Container>
    </Container>

);

SkillsProficiencies.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            level: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default SkillsProficiencies;
