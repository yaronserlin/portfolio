/**
 * Preview: A configuration mapping from technology/skill names to their corresponding React Icon components.
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
    'React': SiReact,
    'JavaScript': SiJavascript,
    'HTML/CSS': SiHtml5,
    'Bootstrap': SiBootstrap,
    'Node.js': SiNodedotjs,
    'Python': SiPython,
    'Java': SiCplusplus,
    'Git & Version Control': SiGit,
    'C++': SiCplusplus,
    'C': SiCplusplus,
};

/**
 * Retrieves the specific React Icon component associated with a given skill name.
 * @param {string} skillName - The name of the skill to fetch an icon for.
 * @returns {import('react').ComponentType | null} The corresponding icon component, or null if not mapped.
 */
export const getSkillIcon = (skillName) => {
    return SKILL_ICONS[skillName] || null;
};

export default SKILL_ICONS;
