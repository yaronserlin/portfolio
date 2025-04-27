import styles from '../styles/Footer.module.css';

import { Divider, Link, Typography } from "@mui/material";

function Footer({ ...props }) {
    return (
        <footer className={styles.footer} {...props}>
            <Divider />
            <Typography variant="subtitle2">
                &copy; 2025 Yaron Serlin. All rights reserved.
            </Typography>
            <Link href="https://github.com/your-username">
                GitHub
            </Link>
        </footer>
    );
}

export default Footer;