/**
 * Preview: Provides validation constraints and default state initialization for the contact form fields.
 */

/**
 * Validates the contact form payload to ensure all necessary fields contain properly formatted data.
 * @param {Object} formData - The current state of the contact form.
 * @param {string} formData.name - The name provided by the user.
 * @param {string} formData.email - The email provided by the user.
 * @param {string} formData.subject - The subject of the message.
 * @param {string} formData.message - The body of the message.
 * @returns {{ isValid: boolean, error: string }} An object containing validation status and an error message if applicable.
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
 * Initializes and returns a blank contact form state.
 * @returns {{ name: string, email: string, subject: string, message: string }} An empty form data object.
 */
export const getInitialFormState = () => ({
    name: "",
    email: "",
    subject: "",
    message: ""
});
