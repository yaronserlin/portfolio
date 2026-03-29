/**
 * AboutBackground Component - Education and Title Information Display
 * 
 * Displays professional background information in a styled card including:
 * - Educational qualification
 * - Professional title/role
 * 
 * Styling:
 * - Semi-transparent white background with glass effect (backdrop-filter: blur)
 * - Left border accent in primary color
 * - Rounded corners and subtle shadow
 * - Hover effect with smooth transitions
 * - "Background" heading with primary color
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.education - Education/qualification details
 * @param {string} props.title - Professional title
 * @returns {React.ReactElement} Styled card with background education and title info
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
