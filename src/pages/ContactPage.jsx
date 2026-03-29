/**
 * PREVIEW: Contact page presenting social links and a direct messaging form.
 */

import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

/**
 * Renders the communication hub of the portfolio, combining static contact information
 * alongside an interactive user message submission form.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.contactInfo - Author's contact details (email, phone, social links).
 * @returns {JSX.Element} The rendered contact page.
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