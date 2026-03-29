/**
 * Preview: Informational text element in the Hero section, extracting rendering identity data.
 */

/**
 * Renders the introductory profile data and formatted biography string in the top hero location.
 * @param {Object} props - Render properties.
 * @param {Object} props.personalInfo - Identity package with name, title, about, and education properties.
 * @returns {JSX.Element} The composed textual subset of the hero banner.
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
