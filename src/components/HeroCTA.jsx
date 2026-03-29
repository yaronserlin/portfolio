/**
 * PREVIEW: Dual-action call-to-action button group for the home page hero section.
 */

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * Renders the primary navigation actions from the landing view, routing the user
 * towards either the projects gallery or the contact form.
 * 
 * @returns {JSX.Element} The rendered call-to-action button group.
 */
const HeroCTA = () => {
    const navigate = useNavigate();

    /**
     * Navigates the user to the projects showcase page.
     */
    const handleViewWork = () => navigate("/projects");

    /**
     * Navigates the user to the contact information page.
     */
    const handleGetInTouch = () => navigate("/contact");

    return (
        <div className="d-flex flex-column flex-md-row gap-3 mt-4">
            <Button
                variant="primary"
                size="lg"
                onClick={handleViewWork}
                className="fw-bold"
                style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                View My Work
            </Button>
            <Button
                variant="outline-primary"
                size="lg"
                onClick={handleGetInTouch}
                className="fw-bold"
                style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    border: '2px solid var(--bs-primary)',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'var(--bs-primary)';
                    e.currentTarget.style.borderColor = 'var(--bs-primary)';
                    e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--bs-primary)';
                    e.currentTarget.style.color = 'var(--bs-primary)';
                }}
            >
                Get in Touch
            </Button>
        </div>
    );
};

export default HeroCTA;
