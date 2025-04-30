import { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';

function Footer({ ...props }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <footer className={styles.footer} {...props}>
            <hr className={styles.divider} />
            <p className={styles.text}>
                &copy; 2025 Yaron Serlin. All rights reserved.
            </p>
            <a href="https://github.com/your-username" className={styles.link}>
                GitHub
            </a>
            <button className={styles.themeToggle} onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </footer>
    );
}

export default Footer;
