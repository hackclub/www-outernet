import styles from "./Button.module.scss";

export default function Button({
  children,
  backgroundColor = "var(--navy)",
  textColor = "var(--khaki)",
  link,
  ...props
}) {
  return (
    <a
      href={link}
      target="_blank"
      className={styles.button}
      style={{ border: `1px solid ${backgroundColor}`, width: 'fit-content', textAlign: 'center' }}
      {...props}
    >
      <span style={{ backgroundColor, color: textColor, fontSize: 'inherit' }}>{children}</span>
    </a>
  );
}
