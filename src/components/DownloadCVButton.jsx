/**
 * PREVIEW: Button that opens Yaron's CV PDF in a new tab.
 */

import { Button } from 'react-bootstrap';

export const CV_URL = '/Yaron_Serlin_CV.pdf';

/**
 * Renders the Download CV button used on the About and Contact pages.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className=''] - Extra classes.
 * @param {string} [props.size='lg'] - Bootstrap button size.
 * @returns {JSX.Element} The button.
 */
const DownloadCVButton = ({ className = '', size = 'lg' }) => (
    <Button
        as="a"
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline-secondary"
        size={size}
        className={`fw-bold btn-lift ${className}`}
        style={{ padding: '0.75rem 2rem', fontSize: '1rem', border: '2px solid var(--bs-secondary)' }}
    >
        Download CV
    </Button>
);

export default DownloadCVButton;
