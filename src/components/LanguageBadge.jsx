/**
 * PREVIEW: Dynamic pill component rendering technology names alongside their official brand icons.
 */

import React from 'react';
import './LanguageBadge.css';

/**
 * Displays an inline badge representing a programming language or tool. It automatically fetches
 * the corresponding brand SVG from simple-icons based on the provided name.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.language - The name of the technology or language to display.
 * @returns {JSX.Element|null} The rendered badge, or null if no language string is provided.
 */
const LanguageBadge = ({ language }) => {
    // Guard clause: prevent rendering empty badges
    if (!language) return null;

    /**
     * Resolves the technology name to a valid simple-icons URL slug.
     * Incorporates custom overrides for edge-case tool names that don't match simple normalization.
     * 
     * @param {string} lang - The raw technology name.
     * @returns {string} The normalized simple-icons slug.
     */
    const getSlug = (lang) => {
        const customMap = {
            'c++': 'cplusplus',
            'c#': 'csharp',
            'node.js': 'nodedotjs',
            'html5': 'html5',
            'css3': 'css3',
            'rest apis': 'fastapi', 
            'git & github': 'github',
            'client-server architecture': 'serverless',
            'sql': 'mysql',
            'mongodb': 'mongodb',
            'java': 'openjdk',
            'javafx': 'openjdk',
            'mac': 'apple',
            'linux': 'linux',
            'react': 'react',
            'javascript': 'javascript',
            'express': 'express',
            'bootstrap': 'bootstrap'
        };
        const lower = lang.toLowerCase();
        
        // Return explicit override if it exists
        if (customMap[lower]) return customMap[lower];
        
        // Fallback to generic stripping for standard slugs
        return lower.replace(/[^a-z0-9]/g, '');
    };

    const slug = getSlug(language);

    return (
        <span
            className="badge language-badge d-inline-flex align-items-center gap-2 m-1"
            style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#333',
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600,
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease',
                cursor: 'default'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
            }}
        >
            <img 
                src={`https://cdn.simpleicons.org/${slug}`}
                alt=""
                width="16"
                height="16"
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                    // Fail gracefully by hiding the broken image icon
                    e.target.style.display = 'none';
                }}
            />
            {language}
        </span>
    );
};

export default LanguageBadge;
