import styles from "./Button.module.scss";

export default function Button({
  children,
  backgroundColor = "var(--navy)",
  textColor = "var(--khaki)",
  fontSize = "1.75rem",
  link = "https://outernet-register.innovationcircuit.com/",
}) {
  return (
    <a
      href={link}
      target="_blank"
      className={styles.button}
      style={{ fontSize, border: `1px solid ${backgroundColor}` }}
    >
      <span style={{ backgroundColor, color: textColor }}>{children}</span>
    </a>
  );
}
