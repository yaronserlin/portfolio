/**
 * HeroContent Component - Hero Section Text and Info
 * 
 * Displays the main textual content in the hero section including:
 * - Portfolio owner's full name as large heading
 * - Professional title
 * - Short biography/about text
 * - Education/qualification information
 * 
 * Styling:
 * - Responsive text sizing using CSS clamp() for scaling
 * - Primary color for name heading
 * - Secondary color for professional title
 * - Left padding on larger screens for proper alignment
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.personalInfo - Personal information object
 * @param {string} props.personalInfo.name - Full name
 * @param {string} props.personalInfo.title - Professional title
 * @param {string} props.personalInfo.about - Short biography text
 * @param {string} props.personalInfo.education - Education details
 * @returns {React.ReactElement} Hero content section with name, title, and bio
 */

const HeroContent = ({ personalInfo }) => {
    return (
        <div className="ps-lg-4">
            <h1 className="fw-bold mb-2" style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'var(--bs-dark)',
                lineHeight: '1.2'
            }}>
                {personalInfo.name}
            </h1>
            <p className="fs-5 fw-semibold mb-3" style={{ color: 'var(--bs-secondary)' }}>
                {personalInfo.title}
            </p>
            <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--bs-body-color)',
                marginBottom: '2rem',
                maxWidth: '500px'
            }}>
                {personalInfo.about}
            </p>
            <div className="mt-5">
                <p className="text-muted">
                    <small>📚 {personalInfo.education}</small>
                </p>
            </div>
        </div>
    );
};

export default HeroContent;
