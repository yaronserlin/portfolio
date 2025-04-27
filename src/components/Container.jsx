// import styles from '../styles/Section.module.css';

function Container({ children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    );
}

export default Container;