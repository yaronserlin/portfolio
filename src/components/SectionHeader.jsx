/**
 * PREVIEW: Extracted header text component for uniformly styling section titles across pages.
 */

/**
 * Renders a standardized block containing a large primary title and an optional 
 * muted descriptive subtitle underneath.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.title - The main heading text.
 * @param {string} [props.subtitle] - The optional secondary accompanying text.
 * @param {string} [props.className=""] - Additional CSS classes applied to the root container.
 * @returns {JSX.Element} The rendered section header block.
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
