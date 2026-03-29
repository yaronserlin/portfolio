/**
 * Preview: Semantic styling wrapper standardizing title hierarchy definitions across core portfolio pages.
 */

/**
 * Configures standard formatting for page anchors and descriptive subtext sections.
 * @param {Object} props - Configuration payloads.
 * @param {string} props.title - Primary massive display label.
 * @param {string} [props.subtitle] - Contextual lead narrative content for subtitles.
 * @param {string} [props.className=""] - External visual modifiers appended to outmost container.
 * @returns {JSX.Element} A centered HTML header grouping structure.
 */
const SectionHeader = ({ title, subtitle, className = "" }) => {
    return (
        <div className={`section-header text-center mb-5 ${className}`}>
            <h1 className="display-5 fw-bold mb-3">{title}</h1>
            {subtitle && <p className="lead text-muted">{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
