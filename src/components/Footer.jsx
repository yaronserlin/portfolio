/**
 * Footer Component - Application Footer
 * 
 * Displays the application footer with:
 * - Copyright notice for current year and portfolio owner name
 * - Social media links (GitHub, LinkedIn, Facebook) as icons
 * - Responsive grid layout with left-aligned copyright and right-aligned social links
 * 
 * Features:
 * - Dark background styling consistent with website theme
 * - Auto-updating year using current date
 * - Responsive design: stacked on mobile, side-by-side on larger screens
 * - Uses SocialLinks component with "links" variant for icon-only display
 * 
 * @component
 * @returns {React.ReactElement} Footer section with copyright and social links
 */

import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioContext } from "../context/PortfolioContext";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    const { portfolioData } = useContext(PortfolioContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-dark text-light mt-5 py-4"
            style={{
                borderTop: '2px solid rgba(255, 255, 255, 0.1)',
                marginTop: 'auto'
            }}
        >
            <Container>
                <Row>
                    <Col md={6} className="mb-3 mb-md-0">
                        <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            <strong style={{ color: 'var(--bs-secondary)' }}>© {currentYear} {portfolioData.personalInfo.name}.</strong> All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <SocialLinks contactInfo={portfolioData.contactInfo} variant="links" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;