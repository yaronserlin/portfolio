import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Image.module.css';

/**
 * Reusable Image component with support for style and layout control.
 *
 * @param {Object} props - Image props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.title] - Optional title attribute
 * @param {string | number} [props.width] - Width
 * @param {string | number} [props.height] - Height
 * @param {string | number} [props.maxWidth] - Max width
 * @param {string | number} [props.maxHeight] - Max height
 * @param {string} [props.objectFit] - Object-fit style (e.g. 'cover', 'contain')
 * @param {string | number} [props.borderRadius] - Border radius
 * @param {string} [props.boxShadow] - Box shadow
 * @param {string} [props.margin] - Margin
 * @param {string} [props.padding] - Padding
 * @param {string} [props.display] - Display style
 * @param {string} [props.className] - Additional class names
 * @param {Object} [props.style] - Inline styles
 */
const Image = ({
    src,
    alt,
    title,
    width,
    height,
    maxWidth,
    maxHeight,
    objectFit,
    borderRadius,
    boxShadow,
    margin,
    padding,
    display,
    className,
    style,
}) => {
    const combinedStyle = {
        ...style,
        ...(width !== undefined && { width }),
        ...(height !== undefined && { height }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(maxHeight !== undefined && { maxHeight }),
        ...(objectFit && { objectFit }),
        ...(borderRadius && { borderRadius }),
        ...(boxShadow && { boxShadow }),
        ...(margin && { margin }),
        ...(padding && { padding }),
        ...(display && { display }),
    };

    return (
        <img
            src={src}
            alt={alt}
            title={title}
            className={clsx(styles.image, className)}
            style={combinedStyle}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    objectFit: PropTypes.string,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    boxShadow: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    display: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

Image.defaultProps = {
    title: '',
    style: {},
    className: '',
};

export default Image;
