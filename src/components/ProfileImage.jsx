/**
 * PREVIEW: Simple abstraction component for the primary profile avatar rendering.
 */

/**
 * Renders a standardized profile image with default styling utility classes applied.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.src - The source URL for the profile image.
 * @param {string} [props.alt="Profile"] - Accessibility alt text.
 * @param {string} [props.className="img-fluid rounded-lg shadow-lg"] - Custom CSS classes injected over the defaults.
 * @param {Object} [props...] - Any additional props to merge onto the underlying img element.
 * @returns {JSX.Element} The rendered image element.
 */
const ProfileImage = ({ src, alt = "Profile", className = "img-fluid rounded-lg shadow-lg", ...props }) => {
    return (
        <img src={src} alt={alt} className={className} {...props} />
    );
};

export default ProfileImage;
