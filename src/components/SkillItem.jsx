/**
 * PREVIEW: Singular encapsulation wrapper abstracting the skill object translation logic away from the badge renderer.
 */

import LanguageBadge from './LanguageBadge';

/**
 * Extracts the literal skill name from the complex object payload to render standard LanguageBadges.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.skill - Evaluated object containing the technology identifier mapped to `.name`.
 * @returns {JSX.Element} The rendered technology tag interface.
 */
const SkillItem = ({ skill }) => {
    return (
        <LanguageBadge language={skill.name} />
    );
};

export default SkillItem;
