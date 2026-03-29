/**
 * Preview: A static page terminal rendering the copyright banner and quick-access social links.
 */

import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioContext } from "../context/PortfolioContext";
import SocialLinks from "./SocialLinks";

/**
 * Emits the universally shared application footer drawing data from the context provider.
 * @returns {JSX.Element} Bottom-aligned persistent navigation and copyright component.
 */
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
};

export default Footer;