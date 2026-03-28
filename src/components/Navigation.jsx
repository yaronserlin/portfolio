/**
 * Navigation Component - Responsive Navigation Bar
 * 
 * A sticky navigation bar displayed at the top of all pages. Features include:
 * - Portfolio owner's name as brand/logo
 * - Navigation links to main routes (About, Projects, Contact)
 * - Active route highlighting with underline animation
 * - Responsive hamburger menu on mobile devices
 * 
 * Styling:
 * - Sticky positioning using Bootstrap's sticky="top"
 * - Active link styling with primary color and bottom border
 * - Smooth transitions and hover effects
 * - Mobile-responsive with Bootstrap's navbar expand/collapse
 * 
 * @component
 * @returns {React.ReactElement} Sticky navigation bar with portfolio links
 */

import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';

const Navigation = () => {
    const { portfolioData } = useContext(PortfolioContext);
    const location = useLocation();

    /**
     * Check if a route is currently active
     * @param {string} path - The route path to check
     * @returns {boolean} True if current location matches the path
     */
    const isActive = (path) => location.pathname === path;

    return (
        <Navbar sticky="top" className="bg-white shadow-sm border-bottom" expand="lg" style={{ borderColor: 'rgba(2, 62, 138, 0.1)' }}>
            <Container>
                <Navbar.Brand className="fw-bold fs-5 text-primary" as={Link} to="/">
                    {portfolioData.personalInfo.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={`fw-500 px-2 ${isActive('/about') ? 'text-primary fw-bold' : 'text-body-secondary'}`}
                            style={{
                                borderBottom: isActive('/about') ? '2px solid var(--bs-primary)' : 'none',
                                paddingBottom: '5px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className={`fw-500 px-2 ${isActive('/projects') ? 'text-primary fw-bold' : 'text-body-secondary'}`}
                            style={{
                                borderBottom: isActive('/projects') ? '2px solid var(--bs-primary)' : 'none',
                                paddingBottom: '5px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className={`fw-500 px-2 ${isActive('/contact') ? 'text-primary fw-bold' : 'text-body-secondary'}`}
                            style={{
                                borderBottom: isActive('/contact') ? '2px solid var(--bs-primary)' : 'none',
                                paddingBottom: '5px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;