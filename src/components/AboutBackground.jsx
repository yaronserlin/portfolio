/**
 * Preview: Presentational display extracting educational and professional markers into a styled section block.
 */

/**
 * Generates an isolated box containing formal credentials applying the standard internal glassmorphic class structures.
 * @param {Object} props - Sourced configurations.
 * @param {string} props.education - Educational achievement strings.
 * @param {string} props.title - Professional occupational role definition.
 * @returns {JSX.Element} Simple display div with distinct border styles.
 */
const AboutBackground = ({ education, title }) => {
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
            <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--bs-primary)' }}>Background</h3>
            <p className="mb-3">
                <strong className="text-primary">{education}</strong>
            </p>
            <p className="text-muted">{title}</p>
        </div>
    );
};

export default AboutBackground;
