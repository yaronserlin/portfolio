import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';

function Contact() {
    return (
        <div>
            <Section title="Contact Me">
                <ContactForm />
            </Section>
        </div>
    );
}

export default Contact;