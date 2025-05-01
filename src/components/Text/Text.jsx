import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Text.module.css';

/**
 * Flexible Text component for rendering styled text blocks.
 *
 * @param {Object} props - Component props
 * @param {string | React.ReactNode} props.children - Text content or React node
 * @param {string} [props.className] - Optional additional class names
 * @param {Object} [props.style] - Optional inline styles
 * @param {string} [props.size] - Font size variant ('xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg')
 * @param {string} [props.fontWeight] - Font weight ('light', 'normal', 'bold')
 * @param {string} [props.textAlign] - Text alignment ('left', 'center', 'right', 'justify')
 * @param {string} [props.color] - Text color variant ('primary', 'light', 'muted', 'error')
 * @param {boolean} [props.uppercase] - Whether to transform text to uppercase
 * @param {boolean} [props.italic] - Whether to apply italic style
 * @param {string} [props.as] - HTML tag to render (default: 'p')
 * @param {string | number} [props.margin] - Optional margin
 * @param {string | number} [props.padding] - Optional padding
 */
const Text = ({
    children,
    className,
    style,
    size,
    fontWeight,
    textAlign,
    color,
    uppercase,
    italic,
    as: Component = 'p',
    margin,
    padding,
    ...props
}) => {
    const combinedStyle = {
        ...style,
        ...(margin !== undefined && { margin }),
        ...(padding !== undefined && { padding }),
    };

    return (
        <Component
            className={clsx(
                styles.text,
                styles[size],
                styles[fontWeight],
                styles[textAlign],
                styles[color],
                { [styles.uppercase]: uppercase },
                { [styles.italic]: italic },
                className
            )}
            style={combinedStyle}
            {...props}
        >
            {children}
        </Component>
    );
};

Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg']),
    fontWeight: PropTypes.oneOf(['light', 'normal', 'bold']),
    textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    color: PropTypes.oneOf(['primary', 'light', 'muted', 'error']),
    uppercase: PropTypes.bool,
    italic: PropTypes.bool,
    as: PropTypes.string,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Text.defaultProps = {
    className: '',
    style: {},
    size: 'sm',
    fontWeight: 'normal',
    textAlign: 'left',
    color: 'primary',
    uppercase: false,
    italic: false,
    as: 'p',
    margin: undefined,
    padding: undefined,
};

export default Text;
