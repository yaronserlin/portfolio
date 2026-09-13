/**
 * PREVIEW: Interactive form component allowing users to send direct messages.
 */

import { Form, Button, Alert } from "react-bootstrap";
import useContactForm from "../hooks/useContactForm";

/**
 * Renders the integrated contact form, utilizing a custom hook to manage validation, state, 
 * and API submission handling (e.g., via EmailJS).
 * 
 * @returns {JSX.Element} The rendered form interface.
 */
const ContactForm = () => {
    // Extract state and handler methods from the contact form hook
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
                <Form.Group
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
                    aria-hidden="true"
                >
                    <Form.Label htmlFor="honeypot-field">Leave this field empty</Form.Label>
                    <Form.Control
                        type="text"
                        id="honeypot-field"
                        name="honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={handleChange}
                    />
                </Form.Group>

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
        </div>
    );
};

export default ContactForm;
