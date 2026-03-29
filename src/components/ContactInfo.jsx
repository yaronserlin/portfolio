/**
 * Preview: Centralized presentation layer rendering distinct clickable communication avenues and sub-text caveats.
 */

import SocialLinks from "./SocialLinks";

/**
 * Wraps mailto execution links, external site redirect buttons, and response time copy into an integrated form column.
 * @param {Object} props - Configuration settings.
 * @param {Object} props.contactInfo - Mapped URL properties denoting external network identifiers mapping to current user.
 * @returns {JSX.Element} Fully configured contact mechanism layout structure.
 */
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
