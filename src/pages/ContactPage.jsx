/**
 * Preview: Dedicated structural page that couples raw contact methods (address, social hooks) to a live input-driven messaging element.
 */

import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

/**
 * Provides a split view presenting the user's hardcoded communication channels laterally beside an interactive mailing capability tool.
 * @param {Object} props - The element properties.
 * @param {Object} props.contactInfo - Collection of metadata indicating phone numbers, standard email domains, and networking hyperlinks.
 * @returns {JSX.Element} The composed Contact page markup.
 */
const ContactPage = ({ contactInfo }) => {
    return (
        <section id="contact" className="py-5 py-md-100" style={{
            background: 'linear-gradient(135deg, rgba(231, 111, 81, 0.05) 0%, rgba(233, 196, 106, 0.05) 100%)',
            minHeight: '100vh'
        }}>
            <Container>
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Let's chat about opportunities, projects, or just say hello"
                />

                <Row>
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <ContactInfo contactInfo={contactInfo} />
                    </Col>

                    <Col lg={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactPage;