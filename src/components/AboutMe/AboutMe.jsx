// src/components/AboutMe/AboutMe.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutMe.module.css';
import Container from '../Container/Container';
import Text from '../Text/Text';
import Image from '../Image/Image';

/**
 * AboutMe
 *
 * Displays an "About Me" section with a heading, descriptive text, and an image.
 *
 * @param {object} props
 * @param {string} props.title  - Section heading/title.
 * @param {string} props.text   - Descriptive text content.
 * @param {string} props.imageSrc - URL or path to the profile image.
 */
const AboutMe = ({ title, text, imageSrc }) => (

    <Container className={styles.about}>
        <Container className={styles.textContainer}>
            <Text as='h2' className={styles.title}>{title}</Text>
            <Text as='p' className={styles.text}>{text}</Text>
        </Container>
        <Container className={styles.imageContainer}>
            <Image src={imageSrc} alt={title} className={styles.image} />
        </Container>

    </Container>

);

AboutMe.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default AboutMe;