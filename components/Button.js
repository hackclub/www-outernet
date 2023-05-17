import styles from "./Button.module.scss";

export default function Button({
    children,
    backgroundColor = "var(--navy)",
    textColor = "var(--khaki)",
    fontSize = "1.75rem"
}) {
    return (
        <button
            className={styles.button}
            style={{ fontSize, border: `1px solid ${backgroundColor}` }}>
            <span style={{ backgroundColor, color: textColor }}>
                {children}
            </span>
        </button>
    );
}
