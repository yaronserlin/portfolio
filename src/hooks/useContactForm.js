/**
 * PREVIEW: Custom React hook encapsulating state management and API dispatch logic for the ContactForm.
 */

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { validateContactForm, getInitialFormState } from "../utils/formValidation";

/**
 * Orchestrates form data collection, validation, and communication with the EmailJS service.
 * 
 * @returns {Object} A collection of state variables and handler functions to be consumed by the UI component.
 */
const useContactForm = () => {
    const [formData, setFormData] = useState(getInitialFormState());
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Initialize the third-party EmailJS library on mount using securely injected environment variables
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    /**
     * Propagates changes from controlled inputs to the local form state while clearing previous errors.
     * 
     * @param {import('react').ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The input change event.
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError("");
    };

    /**
     * Intercepts standard form submissions, performs final validations, and transmits data.
     * 
     * @param {import('react').FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enforce validation constraints prior to network requests
        const { isValid, error: validationError } = validateContactForm(formData);
        if (!isValid) {
            setError(validationError);
            return;
        }

        setIsLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    to_email: "yaron.serlin.dev@gmail.com",
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                }
            );

            // On success, reset the form and temporarily reveal the success banner
            setSubmitted(true);
            setFormData(getInitialFormState());
            setIsLoading(false);

            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (emailError) {
            console.error("Email send error:", emailError);
            setIsLoading(false);
            setError("Failed to send message. Please try again or contact me directly via email.");
        }
    };

    /**
     * Hard resets all tracked state variables back to their baseline defaults.
     */
    const resetForm = () => {
        setFormData(getInitialFormState());
        setSubmitted(false);
        setError("");
        setIsLoading(false);
    };

    return {
        formData,
        submitted,
        error,
        isLoading,
        handleChange,
        handleSubmit,
        resetForm,
        setSubmitted,
        setError
    };
};

export default useContactForm;
