/**
 * Preview: Standardized Bootstrap marker wrapping brief strings reflecting learned technologies or frameworks.
 */

import { Badge } from "react-bootstrap";

/**
 * Emits a visually tight inline block serving as an indicator.
 * @param {Object} props - Bound configuration parameters.
 * @param {string} props.tech - Descriptive string value denoting the item.
 * @param {string} [props.variant="secondary"] - Color contextual class (primary, success, warning, etc.).
 * @param {string} [props.className=""] - External visual injection styles.
 * @returns {JSX.Element} Decorated Bootstrap structural component.
 */
const TechBadge = ({ tech, variant = "secondary", className = "" }) => {
    return (
        <Badge bg={variant} className={`me-2 mb-2 ${className}`}>
            {tech}
        </Badge>
    );
};

export default TechBadge;
