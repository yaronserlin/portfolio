/**
 * SocialLinks - Display social media links
 * Can be used in Contact page, Footer, and other places
 */

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SocialLinks = ({ contactInfo, variant = "links", className = "" }) => {
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

    // Render as simple links (icons only for footer) 
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
