/**
 * Preview: Primitive presentation wrapper standardizing borders and outlines for static user avatars.
 */

/**
 * Abstracts standard Bootstrap stylistic utility classes for standard profile icons.
 * @param {Object} props - Accepted parameters.
 * @param {string} props.src - Valid URL or path to desired image.
 * @param {string} [props.alt="Profile"] - Fallback accessibility text.
 * @param {string} [props.className="img-fluid rounded-lg shadow-lg"] - Space-separated HTML class string.
 * @param {Object} [props...] - Any spreading remaining properties assigned to the DOM `<img>` element.
 * @returns {JSX.Element} Configured accessible image node.
 */
const ProfileImage = ({ src, alt = "Profile", className = "img-fluid rounded-lg shadow-lg", ...props }) => {
    return (
        <img src={src} alt={alt} className={className} {...props} />
    );
};

export default ProfileImage;
