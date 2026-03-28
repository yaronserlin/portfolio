/**
 * AboutInterests Component - Personal Interests and Hobbies Display
 * 
 * Displays a list of personal interests and hobbies with:
 * - Emoji icons for visual interest
 * - Smooth hover animations (translateX)
 * - Interactive list with hover color changes
 * - Interests are hardcoded but could be moved to data
 * 
 * Current Interests:
 * - 🌊 Diving & Ocean Exploration
 * - 🪁 Kitesurfing
 * - 💻 Full-Stack Web Development
 * - 🤖 Artificial Intelligence & Algorithms
 * 
 * Styling:
 * - Semi-transparent white background with glass effect
 * - Left border accent in secondary color
 * - Rounded corners and subtle shadow
 * - Hover effects on individual interest items
 * 
 * @component
 * @returns {React.ReactElement} Styled card with personal interests list
 */

const AboutInterests = () => {
    const interests = [
        "🌊 Diving & Ocean Exploration",
        "🪁 Kitesurfing",
        "💻 Full-Stack Web Development",
        "🤖 Artificial Intelligence & Algorithms"
    ];

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
