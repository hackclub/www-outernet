import styles from "./Footer.module.scss";

export default function Footer() {
    return (
    <>
        <div className={styles.text}>
            <div className={styles.icon}>
                <img src="android-icon-72x72.png"/>
            </div>
            <h3>A Gift, From Us To You · Crafted With Care by <a href="https://hackclub.com" target="_blank">Hack Club</a></h3>
            <h3><a href="https://github.com/hackclub/www-outernet" target="_blank">Open-Sourced Code</a> | Finances | <a href="https://www.instagram.com/starthackclub/" target="_blank">Instagram</a> | <a href="https://twitter.com/hackclub?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">Twitter</a></h3>
     </div>
    </>
    
    )
}
