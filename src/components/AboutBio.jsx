/**
 * PREVIEW: Component that renders the author's biography text sections.
 */

/**
 * Displays both the short highlight hook and the extensive introductory biography text.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.bio - A short summarizing description about the author.
 * @param {string} props.longBio - The full elaborate personal story.
 * @returns {JSX.Element} The rendered biography paragraphs.
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
