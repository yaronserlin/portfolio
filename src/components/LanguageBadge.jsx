import React from 'react';
import './LanguageBadge.css';
import {
    SiJavascript,
    SiHtml5,
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiC,
    SiPhp,
    SiRuby,
    SiSwift,
    SiGo,
    SiRust,
    SiReact,
    SiDart
} from 'react-icons/si';
import { FaTerminal, FaJava, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

// Map languages to their official colors and React Icons
const languageMap = {
    'JavaScript': { icon: SiJavascript, color: '#f7df1e', text: 'black' },
    'HTML': { icon: SiHtml5, color: '#e34f26', text: 'white' },
    'CSS': { icon: FaCss3Alt, color: '#1572B6', text: 'white' },
    'TypeScript': { icon: SiTypescript, color: '#3178C6', text: 'white' },
    'Python': { icon: SiPython, color: '#3776AB', text: 'white' },
    'Java': { icon: FaJava, color: '#007396', text: 'white' },
    'C++': { icon: SiCplusplus, color: '#00599C', text: 'white' },
    'C': { icon: SiC, color: '#A8B9CC', text: 'black' },
    'C#': { icon: TbBrandCSharp, color: '#239120', text: 'white' },
    'PHP': { icon: SiPhp, color: '#777BB4', text: 'white' },
    'Ruby': { icon: SiRuby, color: '#CC342D', text: 'white' },
    'Swift': { icon: SiSwift, color: '#F05138', text: 'white' },
    'Go': { icon: SiGo, color: '#00ADD8', text: 'white' },
    'Rust': { icon: SiRust, color: '#000000', text: 'white' },
    'React': { icon: SiReact, color: '#61DAFB', text: 'black' },
    'Dart': { icon: SiDart, color: '#0175C2', text: 'white' },
    // Default fallback
    'default': { icon: FaTerminal, color: '#6c757d', text: 'white' }
};

/**
 * LanguageBadge Component
 * 
 * Displays a programming language with its official icon and brand color.
 * 
 * @param {Object} props
 * @param {string} props.language - The name of the programming language
 */
const LanguageBadge = ({ language }) => {
    // Find matching language config, case-insensitive, or fallback to default
    const configKey = Object.keys(languageMap).find(
        key => key.toLowerCase() === language?.toLowerCase()
    ) || 'default';

    const { icon: Icon, color, text } = languageMap[configKey];

    return (
        <span
            className="badge language-badge"
            style={{
                '--badge-bg': color,
                '--badge-color': text,
                '--badge-border': text === 'black' ? '1px solid rgba(0,0,0,0.1)' : '1px solid transparent'
            }}
        >
            <Icon className="badge-icon" />
            {language}
        </span>
    );
};

export default LanguageBadge;
