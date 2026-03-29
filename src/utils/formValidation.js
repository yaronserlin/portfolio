/**
 * PREVIEW: Utility module providing centralized validation logic for the contact form.
 */

/**
 * Validates the contact form fields to ensure all required data is present and properly formatted.
 * 
 * @param {Object} formData - The current state object derived from the contact form.
 * @param {string} formData.name - The sender's name.
 * @param {string} formData.email - The sender's email address.
 * @param {string} formData.subject - The message subject.
 * @param {string} formData.message - The message body.
 * @returns {{ isValid: boolean, error: string }} An object signaling success or containing a localized error string.
 */
export const validateContactForm = (formData) => {
    // Validate required fields and basic email formatting
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

    // Return valid state when all checks pass
    return { isValid: true, error: "" };
};

/**
 * Generates an empty default state object for initializing or resetting the contact form.
 * 
 * @returns {{ name: string, email: string, subject: string, message: string }} An empty form model.
 */
export const getInitialFormState = () => ({
    name: "",
    email: "",
    subject: "",
    message: ""
});
