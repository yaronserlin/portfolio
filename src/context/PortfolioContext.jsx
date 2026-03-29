/**
 * Preview: React Context provider that tracks app-wide data such as portfolio assets and GitHub data fetching state.
 */

import React, { createContext, useState, useEffect } from 'react';
import { portfolioDb } from '../data/portfolioDetails';
import { fetchGitHubProjects } from '../services/githubService';

export const PortfolioContext = createContext();

/**
 * Wraps the app hierarchy to inject shared portfolio/project state.
 * @param {Object} props - Standard React component properties.
 * @param {React.ReactNode} props.children - Enclosed sub-components.
 * @returns {JSX.Element} The Provider holding portfolio data properties.
 */
export const PortfolioProvider = ({ children }) => {

    const [portfolioData, setPortfolioData] = useState(portfolioDb);
    const [isLoadingProjects, setIsLoadingProjects] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const gitHubProjects = await fetchGitHubProjects();

                if (gitHubProjects.length > 0) {
                    setPortfolioData(prev => ({
                        ...prev,
                        projects: gitHubProjects
                    }));
                } else {
                    console.log('Using local projects as fallback');
                }
            } catch (error) {
                console.error('Error loading GitHub projects:', error);
                console.log('Using local projects as fallback');
            } finally {
                setIsLoadingProjects(false);
            }
        };

        loadProjects();
    }, []);

    return (
        <PortfolioContext.Provider value={{ portfolioData, setPortfolioData, isLoadingProjects }}>
            {children}
        </PortfolioContext.Provider>
    );
};