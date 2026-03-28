/**
 * TechBadge Component - Technology/Skill Badge Display
 * 
 * Displays a technology or skill as a Bootstrap badge.
 * Used in ProjectCard and other places where tech stacks are displayed.
 * 
 * Features:
 * - Customizable color variants (default: secondary)
 * - Additional CSS classes support
 * - Bootstrap styling for consistency
 * - Responsive and mobile-friendly
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.tech - Technology or skill name to display
 * @param {string} [props.variant="secondary"] - Bootstrap color variant (primary, success, warning, etc.)
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Bootstrap badge with technology name
 */

import { Badge } from "react-bootstrap";

const TechBadge = ({ tech, variant = "secondary", className = "" }) => {
    return (
        <Badge bg={variant} className={`me-2 mb-2 ${className}`}>
            {tech}
        </Badge>
    );
};

export default TechBadge;
