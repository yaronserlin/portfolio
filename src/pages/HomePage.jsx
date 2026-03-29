/**
 * Preview: The main entry page component displaying a visually engaging hero section for the portfolio owner.
 */

import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../components/HeroImage';
import HeroContent from '../components/HeroContent';
import HeroCTA from '../components/HeroCTA';

/**
 * Renders the introductory landing page consisting of a profile image, dynamic text content, and call-to-action buttons.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.personalInfo - Author's foundational identity details such as name, title, and bio.
 * @returns {JSX.Element} The composed Home page section.
 */
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