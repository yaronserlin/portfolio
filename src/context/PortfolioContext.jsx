/**
 * PREVIEW: Global data provider bridging static fallback data with asynchronously fetched GitHub statistics.
 */

import React, { createContext, useState, useEffect } from 'react';
import { portfolioDb } from '../data/portfolioDetails';
import { fetchGitHubProjects } from '../services/githubService';

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext();

/**
 * Establishes a context provider block wrapping the application tree to distribute centralized data payloads.
 * Attempts to hydrate dynamic project data from GitHub on mount.
 * 
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Application DOM hierarchy expecting context values.
 * @returns {JSX.Element} The initialized provider component.
 */
export const PortfolioProvider = ({ children }) => {
    // Scaffold initial state using the local hardcoded fallback database
    const [portfolioData, setPortfolioData] = useState(portfolioDb);
    const [isLoadingProjects, setIsLoadingProjects] = useState(true);

    /**
     * Initiates the one-time network request for gathering live GitHub repository objects.
     */
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
                // Ensure the loading overlay dismisses regardless of fetch success/failure
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