// import styles from '../styles/ContactForm.module.css';

function ContactForm({ ...props }) {
    return (
        // <form className={styles.form}>
        <form {...props}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;