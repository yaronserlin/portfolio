/**
 * ContactPage Component - Contact Information & Message Form
 * 
 * This page provides multiple ways to get in touch with the portfolio owner:
 * - Contact information display (email, phone)
 * - Social media links (GitHub, LinkedIn, Facebook)
 * - Contact form for direct message submission
 * 
 * Layout:
 * - Left column: Contact info with direct email link and social links
 * - Right column: Contact form with validation and EmailJS integration
 * - Responsive: Stacks vertically on mobile
 * 
 * Features:
 * - Client-side form validation
 * - Email sending via EmailJS service
 * - Success/error message feedback
 * - Loading state during submission
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.contactInfo - Contact details including email and social links
 * @returns {React.ReactElement} Contact page with info and contact form
 */

import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

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