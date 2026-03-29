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

import LanguageBadge from './LanguageBadge';

const SkillItem = ({ skill }) => {
    return (
        <LanguageBadge language={skill.name} />
    );
};

export default SkillItem;
