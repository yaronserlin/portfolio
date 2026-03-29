/**
 * ContactForm Component - Contact Message Form with Validation
 * 
 * A fully-functional contact form that allows visitors to send messages directly.
 * Features form validation, email sending via EmailJS, and user feedback.
 * 
 * Form Fields:
 * - Name: Required text input
 * - Email: Required email input
 * - Subject: Required text input
 * - Message: Required textarea
 * 
 * Features:
 * - Client-side form validation via useContactForm hook
 * - Email sending using EmailJS service
 * - Success message display with auto-dismiss
 * - Error message display with dismissible alert
 * - Loading state during email transmission
 * - Form reset after successful submission
 * 
 * Styling:
 * - White background card with shadow
 * - Large form control styling
 * - Rounded corners and padding
 * - Bootstrap form styling
 * 
 * @component
 * @returns {React.ReactElement} Contact form with validation and email integration
 */

import { Form, Button, Alert, Container } from "react-bootstrap";
import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
    const { formData, submitted, error, isLoading, handleChange, handleSubmit, setSubmitted, setError } = useContactForm();

    return (
        <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
        }}>
            {submitted && (
                <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
                    <strong>Message sent!</strong> Thank you for reaching out. I'll get back to you soon.
                </Alert>
            )}

            {error && (
                <Alert variant="danger" dismissible onClose={() => setError("")}>
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control-lg"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control-lg"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control-lg"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control-lg"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100 fw-bold"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </Button>
            </Form>

            <p className="text-muted text-center mt-3 small">
                We'll never share your email. Unsubscribe at any time.
            </p>
        </div>
    );
};

export default ContactForm;
