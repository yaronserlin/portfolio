/**
 * Main Application Root Component
 * 
 * This is the primary application component that orchestrates the entire portfolio website.
 * It manages routing to different pages (Home, About, Projects, Contact) and provides
 * consistent layout with Navigation header and Footer.
 * 
 * The component retrieves portfolio data from the PortfolioContext and passes relevant
 * data to each page. All pages share the Navigation and Footer components for consistent UX.
 * 
 * Routes:
 * - / : HomePage - Hero section with introduction and CTA
 * - /about : AboutPage - Biography, skills, background, and interests
 * - /projects : ProjectsPage - Portfolio projects showcase
 * - /contact : ContactPage - Contact form and information
 * 
 * @component
 * @returns {React.ReactElement} The complete application with routing, navigation, and footer
 */

import './styles/custom.scss'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import { useContext } from 'react';
import { PortfolioContext } from './context/PortfolioContext';

function App() {

  const { portfolioData } = useContext(PortfolioContext);

  return (
    <>
      <Navigation />

      <Routes  >
        <Route path="/" element={<HomePage personalInfo={portfolioData.personalInfo} />} errorElement={<h1>Error</h1>} />
        <Route path='/about' element={<AboutPage personalInfo={portfolioData.personalInfo} skills={portfolioData.skills} />} />
        <Route path='/contact' element={<ContactPage contactInfo={portfolioData.contactInfo} />} />
        <Route path='/projects' element={<ProjectsPage projects={portfolioData.projects} />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
