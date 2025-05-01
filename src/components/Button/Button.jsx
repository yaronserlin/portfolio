import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Reusable Button component.
 *
 * @param {Object} props - Component props
 * @param {string | React.ReactNode} props.children - Button label or element
 * @param {string} [props.type="button"] - Button type (button, submit, reset)
 * @param {function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional class names
 */
const Button = ({ children, type, onClick, className }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`.trim()}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    className: PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    onClick: () => { },
    className: ''
};

export default Button;
