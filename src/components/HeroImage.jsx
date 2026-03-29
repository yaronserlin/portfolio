/**
 * Preview: A specialized wrapper for the ProfileImage adding a customized hover pop effect specific to the landing view.
 */

import ProfileImage from "./ProfileImage";

/**
 * Returns an encapsulated standard wrapper around the base avatar rendering interactive zoom hover states.
 * @param {Object} props - Extracted properties.
 * @param {string} props.src - URI of the target image render.
 * @returns {JSX.Element} Stylized Hero image frame.
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
