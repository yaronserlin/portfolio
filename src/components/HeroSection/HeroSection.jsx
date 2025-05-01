import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeroSection.module.css';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Container from '../Container/Container';
import Image from '../Image/Image';

/**
 * HeroSection
 * 
 * Displays profile image on the left and content on the right,
 * each taking half the viewport width and full viewport height.
 * 
 * @param {object} props
 * @param {string} props.name - Full name/title to display.
 * @param {string} props.subtitle - Subtitle or role.
 * @param {string} props.imageSrc - URL or path to profile image.
 * @param {string} props.buttonText - Text for the primary button.
 * @param {() => void} props.onButtonClick - Click handler for primary button.
 */
const HeroSection = ({ name, subtitle, imageSrc, buttonText, onButtonClick }) => (
    <Container className={styles.hero}>
        <Container className={styles.imageContainer}>
            <Image src={imageSrc} alt={`${name} profile`} className={styles.profileImage} />
        </Container>
        <Container className={styles.content}>
            <Text
                as='h2'
                className={styles.name}
                margin={'0'}
                style={{ lineHeight: '1' }}
            >
                {name}
            </Text>
            <Text
                as='h4'
                className={styles.subtitle}
                margin={'0'}
                style={{ lineHeight: '4', fontWeight: '500' }}

            >
                {subtitle}
            </Text>
            <Button className={`${styles.button} button`.trim()} onClick={onButtonClick} type="button">
                {buttonText}
            </Button>
        </Container>
    </Container>
);

HeroSection.propTypes = {
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
};

HeroSection.defaultProps = {
    subtitle: '',
    buttonText: 'Learn More',
    onButtonClick: () => { },
};

export default HeroSection;