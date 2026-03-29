/**
 * SkillItem Component - Individual Skill Display
 * 
 * Displays a single skill with its corresponding icon from react-icons.
 * Icons are retrieved using the skillIcons utility that maps skill names
 * to icon components.
 * 
 * Features:
 * - Icon from react-icons if available
 * - Fallback to first letter of skill name if icon not found
 * - Title and accessibility attributes on icons
 * - Skill name text label
 * - Flexible layout for use in skill cards
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.skill - Skill object
 * @param {string} props.skill.name - Skill name (must match icon mapping key)
 * @returns {React.ReactElement} Skill item with icon and name
 */

import { getSkillIcon } from "../utils/skillIcons";

const SkillItem = ({ skill }) => {
    const IconComponent = getSkillIcon(skill.name);

    return (
        <div className="skill-item">
            <div className="skill-icon-wrapper">
                {IconComponent ? (
                    <IconComponent className="skill-icon" title={skill.name} />
                ) : (
                    <div className="skill-icon-placeholder">{skill.name.charAt(0)}</div>
                )}
            </div>
            <span className="skill-name">{skill.name}</span>
        </div>
    );
};

export default SkillItem;
