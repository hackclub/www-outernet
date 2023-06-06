import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <img className={styles.footerImage} src="./assets/mountains-two.svg"/>
                <h3 className={styles.footerOne}>An Out-Of-Doors, Make-It-Yours Adventure<br />From Us To You</h3>
                <h3 className={styles.footerTwo}><br />
                    <a target="_blank" href="https://hackclub.org">Hack Club</a> | 
                    <a target="_blank" href="https://instagram.com/starthackclub/"> Instagram</a> | 
                    <a target="_blank" href="https://github.com/hackclub/www-outernet"> GitHub</a> | 
                    <a target="_blank" href=""> Bank</a>
                </h3>
            </div>
        </>
    )
}
