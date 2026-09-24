/**
 * PREVIEW: Accessibility Statement page following the common Israeli
 * practice (SI 5568 / WCAG 2.0 AA) with contact details for requests.
 */

import { Container } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';

const ACCESSIBILITY_EMAIL = 'yaron.serlin.dev@gmail.com';

const sections = [
    {
        heading: 'General',
        content: `I place great importance on making this website accessible to people with disabilities and work to align it with the Israeli Standard SI 5568, based on WCAG 2.0 Level AA.`
    },
    {
        heading: 'Accessibility Adjustments Made',
        content: `• Semantic HTML structure with meaningful headings and landmarks.
• Full keyboard navigation support.
• Responsive layout that adapts to different screen sizes and zoom levels.
• Images include alternative text where they carry meaning.`
    },
    {
        heading: 'Known Limitations',
        content: `This site is under continuous improvement. If you encounter an accessibility barrier, please report it - these reports are treated as bugs to fix.`
    },
    {
        heading: 'Contact for Accessibility Requests',
        content: `For accessibility questions, requests, or reports, contact: ${ACCESSIBILITY_EMAIL}. I am committed to responding within 14 days.`
    }
];

/**
 * Renders the accessibility statement.
 *
 * @returns {JSX.Element} The accessibility statement page.
 */
const AccessibilityPage = () => {
    return (
        <section className="py-5" style={{ minHeight: '100vh' }}>
            <Container style={{ maxWidth: '800px' }}>
                <SectionHeader title="Accessibility Statement" subtitle="Last updated: September 2026" />
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

export default AccessibilityPage;
