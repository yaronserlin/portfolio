/**
 * SectionHeader Component - Reusable Page Section Title and Subtitle
 * 
 * Displays a centered section header with title and optional subtitle.
 * Used across multiple pages (Skills, Contact, Projects) for consistent styling.
 * 
 * Features:
 * - Centered text alignment
 * - Large display heading (display-5) for titles
 * - Lead text styling for subtitles
 * - Muted color for subtitles for visual hierarchy
 * - Customizable CSS classes
 * - Bottom margin for spacing
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Main section title
 * @param {string} [props.subtitle] - Optional subtitle text
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Centered section header with title and subtitle
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
