/**
 * HomePage Component - Hero/Landing Page
 * 
 * This is the main landing page displayed at the root route (/). It serves as the
 * hero section with an eye-catching introduction to the portfolio owner.
 * 
 * Layout:
 * - Left column: Large profile image with perspective 3D effect
 * - Right column: Hero content (name, title, bio) and call-to-action buttons
 * - Full viewport height with gradient background
 * - Responsive: Stacks vertically on mobile, side-by-side on desktop
 * 
 * Features:
 * - Background gradient for visual appeal
 * - Component composition with HeroImage, HeroContent, and HeroCTA
 * - Loading state handling
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.personalInfo - Personal information from portfolio context
 * @returns {React.ReactElement} Hero section with introduction and CTAs
 */

import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../components/HeroImage';
import HeroContent from '../components/HeroContent';
import HeroCTA from '../components/HeroCTA';

const HomePage = ({ personalInfo }) => {
    if (!personalInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.08) 0%, rgba(0, 180, 216, 0.08) 100%)'
        }}>
            <Container>
                <Row className="align-items-center min-vh-100">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <HeroImage src={personalInfo.image} />
                    </Col>
                    <Col lg={6}>
                        <HeroContent personalInfo={personalInfo} />
                        <HeroCTA />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HomePage;