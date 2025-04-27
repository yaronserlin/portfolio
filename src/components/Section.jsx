import styles from '../styles/Section.module.css';

function Section({ title, children, ...props }) {
    return (
        // <section className={styles.section}>
        <section {...props}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {/* {title && <h2 >{title}</h2>} */}
            {children}
        </section>
    );
}

export default Section;