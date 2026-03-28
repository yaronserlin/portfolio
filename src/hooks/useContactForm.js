/**
 * useContactForm Hook - Contact Form State and Logic Management
 * 
 * This custom hook encapsulates all contact form functionality including:
 * - Form state management (name, email, subject, message)
 * - Form validation
 * - Email sending via EmailJS service
 * - Success/error handling and messaging
 * - Form reset functionality
 * 
 * Features:
 * - Automatic EmailJS initialization on component mount
 * - Form validation before submission
 * - Loading state during email sending
 * - Auto-hiding success messages after 5 seconds
 * - Error message display with retry capability
 * 
 * Environment Variables Required:
 * - VITE_EMAILJS_PUBLIC_KEY: EmailJS public key
 * - VITE_EMAILJS_SERVICE_ID: EmailJS service ID  
 * - VITE_EMAILJS_TEMPLATE_ID: EmailJS template ID
 * 
 * @hook
 * @returns {Object} Form state and handler functions
 * @returns {Object} .formData - Current form values (name, email, subject, message)
 * @returns {boolean} .submitted - Whether form was successfully submitted
 * @returns {string} .error - Error message if submission failed
 * @returns {boolean} .isLoading - Whether email is currently sending
 * @returns {Function} .handleChange - Handler for input field changes
 * @returns {Function} .handleSubmit - Handler for form submission with validation
 * @returns {Function} .resetForm - Reset form to initial state
 * @returns {Function} .setSubmitted - Manually set submitted state
 * @returns {Function} .setError - Manually set error message
 */

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { validateContactForm, getInitialFormState } from "../utils/formValidation";

const useContactForm = () => {
    const [formData, setFormData] = useState(getInitialFormState());
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    /**
     * Handle input field changes
     * @param {Event} e - Input change event
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
     * Handle form submission with validation and email sending
     * @param {Event} e - Form submission event
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
     * Reset form to initial empty state
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
