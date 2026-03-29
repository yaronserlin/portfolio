/**
 * Preview: Informational display looping an array of descriptive keywords identifying out-of-work passions.
 */

/**
 * Returns a stylized list rendering non-technical recreational domains defined within personal info configurations.
 * @param {Object} props - Associated component properties.
 * @param {Array<string>} props.interests - Extracted raw collection of string data representing interests.
 * @returns {JSX.Element|null} Composed unordered list chunk, or nothing if empty.
 */
const AboutInterests = ({ interests = [] }) => {
    if (!interests || interests.length === 0) return null;

    return (
        <div style={{
            padding: '1.25rem',
            marginTop: '1.25rem',
            background: 'rgba(255, 255, 255, 0.7)',
            borderLeft: '4px solid var(--bs-secondary)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
        }}>
            <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--bs-primary)' }}>Interests</h3>
            <ul className="list-unstyled">
                {interests.map((interest, index) => (
                    <li
                        key={index}
                        className="mb-2"
                        style={{
                            fontSize: '1rem',
                            color: 'var(--bs-body-color)',
                            paddingLeft: '0.5rem',
                            transition: 'transform 0.2s ease, color 0.2s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateX(8px)';
                            e.currentTarget.style.color = 'var(--bs-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateX(0)';
                            e.currentTarget.style.color = 'var(--bs-body-color)';
                        }}
                    >
                        {interest}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AboutInterests;
