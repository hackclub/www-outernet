import styles from "./Button.module.scss";

export default function Button({ children, text, fontSize = "1.75rem" }) {
    return (
        <button className={styles.button} style={{ fontSize }}>
            <span>{children}</span>
        </button>
    );
}
