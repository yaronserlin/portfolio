/**
 * Preview: Custom React hook handling all state, validation, and submission logic for the underlying contact form via EmailJS.
 */

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { validateContactForm, getInitialFormState } from "../utils/formValidation";

/**
 * Manages the contact form state, error handling, and orchestrates the transmission of messages using EmailJS.
 * @returns {Object} Methods and state properties for rendering and processing the form.
 */
const useContactForm = () => {
    const [formData, setFormData] = useState(getInitialFormState());
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    /**
     * Updates form state progressively based on user input events.
     * @param {import('react').ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The triggered input change event.
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
     * Rejects invalid payloads or initiates sending procedure using environment variables for the EmailJS service.
     * @param {import('react').FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

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

            setSubmitted(true);
            setFormData(getInitialFormState());
            setIsLoading(false);

            // Hide the success message after five seconds automatically
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
     * Purges all current state data and restores the form's blank initial condition.
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
