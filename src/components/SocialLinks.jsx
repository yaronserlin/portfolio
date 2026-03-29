/**
 * PREVIEW: Consolidated element orchestrating rendering of various social profiles as either buttons or icon anchors.
 */

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

/**
 * Builds an interactive list grouping external developer profiles based on the provided configuration payload.
 * Supports rendering visually distinct variants for different container locations (e.g., forms vs footers).
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.contactInfo - Extracted collection housing profile URLs.
 * @param {string} [props.variant="links"] - Visual indicator controlling render style ("buttons" | "links").
 * @param {string} [props.className=""] - External visual modifiers appended to the outmost wrapping node.
 * @returns {JSX.Element} The correctly styled social connection links.
 */
const SocialLinks = ({ contactInfo, variant = "links", className = "" }) => {
    // Condition handling the prominent "Solid Button" styling format
    if (variant === "buttons") {
        return (
            <div className={`d-flex gap-2 flex-wrap ${className}`}>
                {contactInfo.github && (
                    <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm fw-bold d-inline-flex align-items-center gap-2"
                        title="GitHub"
                    >
                        <FaGithub /> GitHub
                    </a>
                )}
                {contactInfo.linkedin && (
                    <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm fw-bold d-inline-flex align-items-center gap-2"
                        title="LinkedIn"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                )}
                {contactInfo.facebook && (
                    <a
                        href={contactInfo.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm fw-bold d-inline-flex align-items-center gap-2"
                        title="Facebook"
                    >
                        <FaFacebook /> Facebook
                    </a>
                )}
            </div>
        );
    }

    // Default return handling the "Icon Only" footer-styled layout
    return (
        <div className={`d-flex gap-3 align-items-center flex-wrap ${className}`}>
            {contactInfo.facebook && (
                <a
                    href={contactInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '1.25rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--bs-secondary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <FaFacebook />
                </a>
            )}

            {contactInfo.github && (
                <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '1.25rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--bs-secondary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <FaGithub />
                </a>
            )}

            {contactInfo.linkedin && (
                <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '1.25rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--bs-secondary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <FaLinkedin />
                </a>
            )}
        </div>
    );
};

export default SocialLinks;
