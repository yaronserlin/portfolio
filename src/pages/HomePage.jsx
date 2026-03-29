/**
 * PREVIEW: Landing page component displaying the introductory section and call-to-actions.
 */

import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../components/HeroImage';
import HeroContent from '../components/HeroContent';
import HeroCTA from '../components/HeroCTA';

/**
 * Renders the home page with a split layout: profile image on one side, text and buttons on the other.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.personalInfo - Author's personal details like name and bio.
 * @returns {JSX.Element} The rendered home page section.
 */
const HomePage = ({ personalInfo }) => {
    // Initial loading guard to prevent rendering errors if data isn't ready
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