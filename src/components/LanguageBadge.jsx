/**
 * Preview: A dynamic label component rendering brand icons for various software technologies utilizing SimpleIcons.
 */

import React from 'react';
import './LanguageBadge.css';

/**
 * Renders an inline visual pill containing the text name and official SVG logo of a programming language or tool.
 * @param {Object} props - Accepted parameters.
 * @param {string} props.language - Case-insensitive string matching known technology domains.
 * @returns {JSX.Element|null} Stylized pill marker, or null if the string is falsy.
 */
const LanguageBadge = ({ language }) => {
    if (!language) return null;

    /**
     * Maps technology names to accurate simple-icons network slugs.
     * @param {string} lang - Technology raw string.
     * @returns {string} Sanitized slug identifier.
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
        if (customMap[lower]) return customMap[lower];
        // Strip out non-alphanumeric characters for standard slugs
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
                    // Hide the image immediately if there's no matching icon
                    e.target.style.display = 'none';
                }}
            />
            {language}
        </span>
    );
};

export default LanguageBadge;
