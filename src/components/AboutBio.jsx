/**
 * Preview: An embedded subcomponent extracting textual biography variables into stylized standalone paragraphs.
 */

/**
 * Emits the pre-configured semantic narrative introduction found throughout broader identity pages.
 * @param {Object} props - Injection configurations.
 * @param {string} props.bio - Catchy hook text line typically serving as an initial summary.
 * @param {string} props.longBio - Extended historical and experiential descriptive strings.
 * @returns {JSX.Element} Flowing text node column structure.
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
