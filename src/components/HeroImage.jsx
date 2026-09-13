/**
 * PREVIEW: Specialized wrapper for the profile image adding a prominent hero-specific hover effect.
 */

import ProfileImage from "./ProfileImage";

/**
 * Renders the author's avatar with an interactive zooming box-shadow effect to anchor the visual weight of the landing page.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.src - Valid URL or path pointing to the developer's profile image.
 * @returns {JSX.Element} The rendered interactive profile image.
 */
const HeroImage = ({ src }) => {
    return (
        <div>
            <ProfileImage
                src={src}
                className="hero-image"
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    aspectRatio: '1',
                    objectFit: 'cover',
                    borderRadius: '5%',
                    cursor: 'pointer'
                }}
            />
        </div>
    );
};

export default HeroImage;
