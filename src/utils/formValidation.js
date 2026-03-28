/**
 * Form Validation Utilities - Contact Form Validation and State Management
 * 
 * Provides utility functions for:
 * - Validating contact form data with specific error messages
 * - Managing form initial state
 * 
 * Validation Rules:
 * - Name: Required, non-empty
 * - Email: Required, must contain @ and .
 * - Subject: Required, non-empty
 * - Message: Required, non-empty
 */

/**
 * Validate contact form data
 * @param {Object} formData - Form data object with name, email, subject, message
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message body
 * @returns {Object} Validation result with isValid flag and error message
 * @returns {boolean} .isValid - Whether the form passes all validations
 * @returns {string} .error - Specific error message if validation failed, empty string if valid
 */
export const validateContactForm = (formData) => {
    if (!formData.name?.trim()) {
        return { isValid: false, error: "Please enter your name" };
    }

    if (!formData.email?.trim()) {
        return { isValid: false, error: "Please enter your email address" };
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
        return { isValid: false, error: "Please enter a valid email address" };
    }

    if (!formData.subject?.trim()) {
        return { isValid: false, error: "Please enter a subject" };
    }

    if (!formData.message?.trim()) {
        return { isValid: false, error: "Please enter your message" };
    }

    return { isValid: true, error: "" };
};

/**
 * Get initial empty form state
 * @returns {Object} Empty form object with all fields set to empty strings
 * @returns {string} .name - Empty name field
 * @returns {string} .email - Empty email field
 * @returns {string} .subject - Empty subject field
 * @returns {string} .message - Empty message field
 */
export const getInitialFormState = () => ({
    name: "",
    email: "",
    subject: "",
    message: ""
});
