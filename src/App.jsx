/**
 * PREVIEW: Main application component handling routing and layout structure.
 */

import './styles/custom.scss';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { PortfolioContext } from './context/PortfolioContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

/**
 * Root component that defines the application's layout and routing configuration.
 * Consumes global portfolio data from context to pass as props down to individual pages.
 * 
 * @returns {JSX.Element} The rendered React application.
 */
function App() {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage personalInfo={portfolioData.personalInfo} />} />
        <Route path="/about" element={<AboutPage personalInfo={portfolioData.personalInfo} skills={portfolioData.skills} />} />
        <Route path="/contact" element={<ContactPage contactInfo={portfolioData.contactInfo} />} />
        <Route path="/projects" element={<ProjectsPage projects={portfolioData.projects} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
