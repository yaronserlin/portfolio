/**
 * ProfileImage Component - Consistent Profile Photo Display
 * 
 * Wrapper component for displaying profile images with consistent styling.
 * Used throughout the application (HomePage, AboutPage, etc.) for image display.
 * 
 * Features:
 * - Responsive image scaling with img-fluid class
 * - Rounded corners with Bootstrap's rounded-lg class
 * - Bootstrap shadow styling for depth
 * - Flexible alt text with default
 * - Pass-through of additional props and event handlers
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} [props.alt="Profile"] - Alt text for accessibility
 * @param {string} [props.className="img-fluid rounded-lg shadow-lg"] - CSS classes
 * @param {Object} [props...] - Additional HTML img attributes (style, onMouseEnter, etc.)
 * @returns {React.ReactElement} Responsive profile image element
 */

const ProfileImage = ({ src, alt = "Profile", className = "img-fluid rounded-lg shadow-lg", ...props }) => {
    return (
        <img src={src} alt={alt} className={className} {...props} />
    );
};

export default ProfileImage;
