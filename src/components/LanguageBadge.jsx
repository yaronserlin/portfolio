/**
 * LanguageBadge Component
 * 
 * Displays a programming language with its official icon loaded dynamically from SimpleIcons.
 * This prevents the need to hardcode icons and colors for every new technology learned.
 * 
 * @param {Object} props
 * @param {string} props.language - The name of the programming language or technology
 */
import React from 'react';
import './LanguageBadge.css';

const LanguageBadge = ({ language }) => {
    if (!language) return null;

    // Helper to map technology names to accurate simple-icons slugs
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
