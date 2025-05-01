import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Container.module.css';

/**
 * A flexible layout container for spacing, alignment, and layout control.
 *
 * @param {Object} props - Container props
 * @param {React.ReactNode} props.children - Content to be wrapped
 * @param {string} [props.className] - Additional class names
 * @param {Object} [props.style] - Inline styles
 * @param {string | number} [props.padding] - Padding
 * @param {string | number} [props.margin] - Margin
 * @param {string | number} [props.width] - Width
 * @param {string | number} [props.maxWidth] - Max width
 * @param {string | number} [props.height] - Height
 * @param {string} [props.display] - Display type (e.g., 'flex', 'block')
 * @param {string} [props.justifyContent] - Flexbox justifyContent
 * @param {string} [props.alignItems] - Flexbox alignItems
 * @param {string} [props.flexDirection] - Flexbox direction
 * @param {string} [props.textAlign] - Text alignment
 * @param {string} [props.backgroundColor] - Background color
 * @param {string} [props.color] - Text color
 */
const Container = ({
    children,
    className,
    style,
    padding,
    margin,
    width,
    maxWidth,
    height,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    textAlign,
    backgroundColor,
    color,
}) => {
    const combinedStyle = {
        ...style,
        ...(padding !== undefined && { padding }),
        ...(margin !== undefined && { margin }),
        ...(width !== undefined && { width }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(height !== undefined && { height }),
        ...(display !== undefined && { display }),
        ...(justifyContent !== undefined && { justifyContent }),
        ...(alignItems !== undefined && { alignItems }),
        ...(flexDirection !== undefined && { flexDirection }),
        ...(textAlign !== undefined && { textAlign }),
        ...(backgroundColor !== undefined && { backgroundColor }),
        ...(color !== undefined && { color }),
    };

    return (
        <div className={clsx(styles.container, className)} style={combinedStyle}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    display: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexDirection: PropTypes.string,
    textAlign: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
};

Container.defaultProps = {
    className: '',
    style: {},
};

export default Container;
