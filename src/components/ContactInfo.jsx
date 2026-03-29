/**
 * ContactInfo Component - Contact Information Display
 * 
 * Displays contact information and social media links in the contact page.
 * Includes:
 * - Email address with direct mailto link
 * - Social media buttons (GitHub, LinkedIn, Facebook)
 * - Helpful tip about response times
 * 
 * Layout:
 * - Contact Information heading
 * - Email section with labeled link
 * - Social Links section with button variants
 * - Tip box with response time information
 * 
 * Styling:
 * - Separated sections with borders
 * - Hover effects on email link
 * - Consistent color and typography
 * - Light background for tip box
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.contactInfo - Contact information object
 * @param {string} props.contactInfo.email - Email address
 * @param {string} props.contactInfo.github - GitHub profile URL
 * @param {string} props.contactInfo.linkedin - LinkedIn profile URL
 * @param {string} props.contactInfo.facebook - Facebook profile URL
 * @returns {React.ReactElement} Contact information card with email and social links
 */

import SocialLinks from "./SocialLinks";

const ContactInfo = ({ contactInfo }) => {
    return (
        <div>
            <h2 className="h4 mb-4 fw-bold text-primary">Contact Information</h2>

            <div
                style={{
                    paddingBottom: '1.5rem',
                    marginBottom: '1rem',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                }}
            >
                <h3
                    className="h6 fw-bold text-primary mb-2"
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        letterSpacing: '0.5px'
                    }}
                >
                    Email
                </h3>
                <a
                    href={`mailto:${contactInfo.email}`}
                    style={{
                        color: 'var(--bs-body-color)',
                        textDecoration: 'none',
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--bs-secondary)';
                        e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--bs-body-color)';
                        e.currentTarget.style.textDecoration = 'none';
                    }}
                >
                    {contactInfo.email}
                </a>
            </div>

            <div className="mb-4">
                <h3
                    className="h6 fw-bold text-primary mb-3"
                    style={{
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        letterSpacing: '0.5px'
                    }}
                >
                    Social Links
                </h3>
                <SocialLinks contactInfo={contactInfo} variant="buttons" />
            </div>

            <div
                className="p-4 bg-light rounded mt-5"
                style={{
                    background: 'rgba(248, 249, 250, 0.7)',
                    borderLeft: '4px solid var(--bs-primary)'
                }}
            >
                <p className="text-muted mb-0">
                    <strong>Quick Tip:</strong> Email is the fastest way to reach me. I typically respond within 24 hours.
                </p>
            </div>
        </div>
    );
};

export default ContactInfo;
