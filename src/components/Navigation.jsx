/**
 * Preview: Top-anchored routing bar maintaining uniform paths throughout the app and reacting to mobile viewport constraints.
 */

import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { PortfolioContext } from '../context/PortfolioContext';

/**
 * Presents a persistent routing bar referencing context-bound data values. Modifies sub-link states to represent active domains.
 * @returns {JSX.Element} Floating Bootstrap header bar mapping main components.
 */
const Navigation = () => {
    const { portfolioData } = useContext(PortfolioContext);
    const location = useLocation();

    /**
     * Determines whether a given route matches the current application URL.
     * @param {string} path - Assessed relative route layout mapping.
     * @returns {boolean} Equality operator flag signifying presence on the target.
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
};

export default Navigation;