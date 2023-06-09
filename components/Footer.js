import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img className={styles.footerImage} src="./assets/mountains-two.svg"/>
                <h3 className={styles.footerOne}>An Out-Of-Doors, Make-It-Yours Adventure. From Us To You.</h3>
            </div>
        </>
    )
}
