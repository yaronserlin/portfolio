// src/components/Section/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

/**
 * Section
 * 
 * A reusable section wrapper with variant backgrounds and customizable padding.
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children - The content inside the section.
 * @param {'light'|'alt'|'dark'} props.variant - Background style variant.
 * @param {string} [props.className] - Additional className for custom styling.
 */
const Section = ({ children, variant = 'light', className = '' }) => {
    // Ensure the variant is one of the allowed values
    const validVariants = ['light', 'alt', 'dark'];
    if (!validVariants.includes(variant)) {
        console.warn(`Invalid variant "${variant}" provided. Defaulting to "light".`);
        variant = 'light';
    }
    // Generate the class name based on the variant 
    const variantClass = `bg_${variant}`;

    return (
        <section className={`${styles.section} ${variantClass} ${className}`.trim()}>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['light', 'alt', 'dark']),
    className: PropTypes.string,
};

export default Section;