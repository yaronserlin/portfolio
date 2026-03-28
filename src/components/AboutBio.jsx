/**
 * AboutBio Component - Biography Display Section
 * 
 * Displays the portfolio owner's biography in two tiers:
 * - Short bio: Concise introduction (displayed as lead text)
 * - Long bio: Detailed biography with additional context
 * 
 * Styling:
 * - Lead text styling for short bio (larger font, line-height)
 * - Regular text for long bio
 * - Consistent color and line-height for readability
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.bio - Short biography text
 * @param {string} props.longBio - Detailed biography text
 * @returns {React.ReactElement} Biography section with intro and details
 */

const AboutBio = ({ bio, longBio }) => {
    return (
        <div>
            <p className="lead mb-4" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--bs-body-color)' }}>
                {bio}
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1rem', color: 'var(--bs-body-color)' }}>
                {longBio}
            </p>
        </div>
    );
};

export default AboutBio;
