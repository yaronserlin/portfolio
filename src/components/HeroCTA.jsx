/**
 * Preview: Primary action triggers driving initial user conversion rates from the main landing view.
 */

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

/**
 * Returns twin navigation anchors redirecting towards significant subpages like contact or project exhibits.
 * @returns {JSX.Element} Bounded layout flex configuration hosting stylized buttons.
 */
const HeroCTA = () => {
    const navigate = useNavigate();

    /**
     * Pushes routing state to trigger navigation to the internal Projects path.
     */
    const handleViewWork = () => {
        navigate("/projects");
    };

    /**
     * Pushes routing state to trigger navigation to the internal Contact path.
     */
    const handleGetInTouch = () => {
        navigate("/contact");
    };

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
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
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
