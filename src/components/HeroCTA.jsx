/**
 * PREVIEW: Call-to-action button group for the home page hero section.
 */

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DownloadCVButton from "./DownloadCVButton";

/**
 * Renders the primary navigation actions from the landing view, routing the user
 * towards the projects gallery, the contact form, or the CV PDF.
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
                className="fw-bold btn-lift"
                style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem'
                }}
            >
                View My Work
            </Button>
            <Button
                variant="outline-primary"
                size="lg"
                onClick={handleGetInTouch}
                className="fw-bold btn-lift"
                style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    border: '2px solid var(--bs-primary)'
                }}
            >
                Get in Touch
            </Button>
            <DownloadCVButton />
        </div>
    );
};

export default HeroCTA;
