/**
 * Preview: Global routing component organizing layout persistence and page connections through URL-based navigation.
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

/**
 * Aggregates site routes and global layout components like Header and Footer.
 * @returns {JSX.Element} The rendered React Application.
 */
function App() {

  const { portfolioData } = useContext(PortfolioContext);

  return (
    <>
      <Navigation />

      <Routes>
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
