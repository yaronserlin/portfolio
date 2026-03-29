/**
 * PREVIEW: Textual introduction component rendering the author's primary headline and biography hook.
 */

/**
 * Displays the core user identity text inside the hero banner layout.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.personalInfo - Author's foundational data.
 * @returns {JSX.Element} The rendered textual content for the hero section.
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
