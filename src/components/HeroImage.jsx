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
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    aspectRatio: '1',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    borderRadius: '5%',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(2, 62, 138, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
            />
        </div>
    );
};

export default HeroImage;
