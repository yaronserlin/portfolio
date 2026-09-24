/**
 * PREVIEW: Privacy Policy page describing what little data the portfolio
 * site processes (the EmailJS-backed contact form) and visitor rights.
 */

import { Container } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';

const PRIVACY_EMAIL = 'yaron.serlin.dev@gmail.com';

const sections = [
    {
        heading: '1. Who I Am',
        content: `This portfolio website is operated by Yaron Serlin, an independent developer. For any privacy question or request, contact: ${PRIVACY_EMAIL}.`
    },
    {
        heading: '2. What Information Is Collected',
        content: `This site collects no analytics, uses no cookies, and stores nothing in your browser. The only personal information processed is what you choose to send through the contact form: your name, email address, subject, and message content.`
    },
    {
        heading: '3. How the Contact Form Works',
        content: `When you submit the contact form, the details above are transmitted through EmailJS, a third-party email delivery service, which forwards them to the site owner's email inbox. EmailJS processes this information solely to deliver the message and acts as a data processor. Submitting the form constitutes your consent to this processing for the purpose of replying to your inquiry.`
    },
    {
        heading: '4. How Long Information Is Kept',
        content: `Messages sent through the contact form are kept as ordinary email correspondence for as long as needed to handle your inquiry and any follow-up. You may request deletion of a message thread at any time.`
    },
    {
        heading: '5. Third Parties and Hosting',
        content: `• EmailJS - delivers contact form messages.
• Render - hosts this static website and may keep standard server logs (such as IP address and browser type) as part of its infrastructure.
No personal information is sold, rented, or shared for advertising.`
    },
    {
        heading: '6. Your Rights',
        content: `Under the Israeli Protection of Privacy Law (as amended by Amendment 13) and other applicable laws, you may request access to the personal information held about you, its correction, or its deletion. To exercise these rights, email ${PRIVACY_EMAIL}.`
    },
    {
        heading: '7. Changes to This Policy',
        content: `This policy may be updated from time to time. The date below reflects the latest version.`
    }
];

/**
 * Renders the privacy policy as simple, readable sections.
 *
 * @returns {JSX.Element} The privacy policy page.
 */
const PrivacyPage = () => {
    return (
        <section className="py-5" style={{ minHeight: '100vh' }}>
            <Container style={{ maxWidth: '800px' }}>
                <SectionHeader title="Privacy Policy" subtitle="Last updated: September 2026" />
                {sections.map((s) => (
                    <div key={s.heading} className="mb-4">
                        <h2 className="h5 fw-bold">{s.heading}</h2>
                        <p className="text-secondary" style={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>{s.content}</p>
                    </div>
                ))}
                <p className="text-secondary small mt-4">
                    This document was prepared as a technical drafting aid and does not constitute legal advice;
                    review by a qualified lawyer is recommended.
                </p>
            </Container>
        </section>
    );
};

export default PrivacyPage;
