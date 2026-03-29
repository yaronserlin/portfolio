/**
 * Skill Icons Mapping - Technology Icons Configuration
 * 
 * Maps skill/technology names to their corresponding icon components from react-icons library.
 * Icons are sourced from the Simple Icons library (SiXxx components).
 * 
 * Supported Categories:
 * - Frontend: React, JavaScript, HTML/CSS, Bootstrap
 * - Backend: Node.js, Python, Java, C++
 * - Tools & Version Control: Git
 * - Systems: C++, C
 * 
 * Icon Fallbacks:
 * - Java uses C++ icon as there's no dedicated Java icon in Simple Icons
 * - C uses C++ icon as fallback for consistency
 * 
 * @exports SKILL_ICONS - Object mapping skill names to icon components
 * @exports getSkillIcon - Function to retrieve icon for a skill name
 */

import {
    SiReact,
    SiJavascript,
    SiHtml5,
    SiBootstrap,
    SiNodedotjs,
    SiPython,
    SiGit,
    SiCplusplus
} from 'react-icons/si';

const SKILL_ICONS = {
    // Frontend
    'React': SiReact,
    'JavaScript': SiJavascript,
    'HTML/CSS': SiHtml5,
    'Bootstrap': SiBootstrap,

    // Backend
    'Node.js': SiNodedotjs,
    'Python': SiPython,
    'Java': SiCplusplus, // Fallback - no direct Java icon

    // Tools & Languages
    'Git & Version Control': SiGit,
    'C++': SiCplusplus,
    'C': SiCplusplus, // Using C++ icon as fallback for C
};

/**
 * Get icon component for a skill name
 * @param {string} skillName - Name of the skill (must match key in SKILL_ICONS)
 * @returns {React.Component|null} Icon component from react-icons, or null if not found
 * 
 * @example
 * const IconComponent = getSkillIcon('React');
 * // Returns SiReact component
 */
export const getSkillIcon = (skillName) => {
    return SKILL_ICONS[skillName] || null;
};

export default SKILL_ICONS;
