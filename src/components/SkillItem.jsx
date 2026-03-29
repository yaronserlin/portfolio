/**
 * Preview: Structural wrapper bridging the domain skill objects to the presentation LanguageBadge.
 */

import LanguageBadge from './LanguageBadge';

/**
 * Defers rendering logic to the LanguageBadge system for singular technologies.
 * @param {Object} props - Expected attributes.
 * @param {Object} props.skill - Evaluated skill entity containing identity info.
 * @returns {JSX.Element} Wrapped visual badge for the extracted skill name.
 */
const SkillItem = ({ skill }) => {
    return (
        <LanguageBadge language={skill.name} />
    );
};

export default SkillItem;
