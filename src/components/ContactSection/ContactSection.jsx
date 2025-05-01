// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactSection.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Container from '../Container/Container';
import Image from '../Image/Image';
import Text from '../Text/Text';

const iconMap = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    x: <FaXTwitter />
};

/**
 * ContactSection
 *
 * Renders a contact section with an image, personal info, and dynamic social icons.
 *
 * @param {Object} props
 * @param {string} props.imageSrc - Image URL
 * @param {string} props.title - Section title (e.g. "Reach out")
 * @param {string} props.name - Name to display
 * @param {string} props.email - Email address
 * @param {string} props.inviteText - Invite message
 * @param {Object} props.socialLinks - Object with platform keys and URLs, e.g. { facebook: '', linkedin: '' }
 */
const ContactSection = ({ imageSrc, title, name, email, inviteText, socialLinks }) => (

    <Container className={styles.contactSection}>
        <Container className={styles.imageContainer}>
            <Image src={imageSrc} alt={name} className={styles.image} />
        </Container>

        <Container className={styles.infoContainer}>

            <Text as='h2' className={styles.title}>{title}</Text>
            <Text as='h3' className={styles.name}>{name}</Text>
            <Text as='a' href={`mailto:${email}`} className={styles.email}>{email}</Text>

            <Text as='h4' className={styles.invite}>{inviteText}</Text>
            <Container className={styles.socialIcons}>
                {Object.entries(socialLinks).map(([platform, url]) => (
                    url && iconMap[platform.toLowerCase()] && (
                        <Text as='a' key={platform} href={url} target="_blank" rel="noopener noreferrer">
                            {iconMap[platform.toLowerCase()]}
                        </Text>
                    )
                ))}
            </Container>
        </Container>
    </Container>
);

ContactSection.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    inviteText: PropTypes.string.isRequired,
    socialLinks: PropTypes.objectOf(PropTypes.string)
};

export default ContactSection;
