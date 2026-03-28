/**
 * HeroCTA Component - Call-to-Action Buttons in Hero Section
 * 
 * Displays two primary action buttons for hero section CTAs:
 * - "View My Work" button: Navigates to Projects page
 * - "Get In Touch" button: Navigates to Contact page
 * 
 * Features:
 * - Primary and outline button variants
 * - Hover animation with upward translation
 * - Responsive flex layout (row on desktop, column on mobile)
 * - Large button sizing for prominence
 * - Navigation via React Router useNavigate hook
 * 
 * Interactions:
 * - Mouse hover: Buttons lift upward by 2px
 * - Click: Navigate to corresponding page
 * 
 * @component
 * @returns {React.ReactElement} CTA button container with navigation
 */

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HeroCTA = () => {
    const navigate = useNavigate();

    /**
     * Navigate to Projects page
     */
    const handleViewWork = () => {
        navigate("/projects");
    };

    /**
     * Navigate to Contact page
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
