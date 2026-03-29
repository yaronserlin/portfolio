/**
 * PREVIEW: Component displaying the author's educational background and job title.
 */

/**
 * Renders a styled informational block highlighting academic credentials and current role.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.education - Highest educational degree or institution details.
 * @param {string} props.title - Current professional job title.
 * @returns {JSX.Element} The rendered background information block.
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
