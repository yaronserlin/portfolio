
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import styles from '../styles/ContactForm.module.css';

const initialFormData = {
    name: '',
    email: '',
    message: ''
};

function ContactForm() {

    const [state, handleSubmit] = useForm("xqaqagdq");
    const [fromData, setFormData] = useState(initialFormData)

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted:', fromData);
        // handleSubmit(event);

        setFormData(initialFormData); // Reset form data after submission
    };

    return (
        <form onSubmit={(evt) => handleFormSubmit(evt)} className={styles.contactFormContainer}>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                type="name"
                name="name"
                value={fromData.name}
                onChange={handleChange}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                value={fromData.email}
                onChange={handleChange}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                value={fromData.message}
                onChange={handleChange}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;

