import React, { createContext, useState, useEffect } from 'react';
import { portfolioDb } from '../data/portfolioDetails';
import { fetchGitHubProjects } from '../services/githubService';

export const PortfolioContext = createContext();

/**
 * PortfolioProvider component - Context provider for portfolio data management
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the provider
 * @returns {React.ReactElement} Provider component wrapping children with PortfolioContext
 * 
 * @description
 * Provides portfolio data and setter function to all child components through React Context.
 * Initializes portfolio state with data from portfolioDb and fetches projects from GitHub API.
 * Falls back to local projects if GitHub fetch fails.
 * 
 * @example
 * <PortfolioProvider>
 *   <App />
 * </PortfolioProvider>
 */
export const PortfolioProvider = ({ children }) => {

    const [portfolioData, setPortfolioData] = useState(portfolioDb);
    const [isLoadingProjects, setIsLoadingProjects] = useState(true);

    // Fetch GitHub projects on component mount
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