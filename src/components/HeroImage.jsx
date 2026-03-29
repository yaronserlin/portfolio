/**
 * HeroImage Component - Hero Section Profile Image Display
 * 
 * Displays the profile image in the hero section with:
 * - Image scaling and shadow effects on hover
 * - Perspective 3D styling for visual depth
 * - Rounded corners (5% border-radius)
 * - Responsive sizing with maintained aspect ratio
 * 
 * Interactions:
 * - Mouse hover: Image scales up 2% with enhanced shadow
 * - Mouse leave: Image returns to original scale and shadow
 * - Smooth transitions for all effects
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @returns {React.ReactElement} Profile image with hover effects
 */

import ProfileImage from "./ProfileImage";

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
