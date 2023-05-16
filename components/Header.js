import Button from "@/components/Button";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.parallaxGround}>
                    <img src="/assets/ground.png" />
                </div>
                <div className={styles.parallaxClouds}>
                    <img src="/assets/clouds.png" />
                </div>
                <div className={styles.content}>
                    <h2>Hack Club presents...</h2>
                    <h1>Outernet</h1>
                    <p style={{ marginBottom: 0 }}>
                        A technological odyssey into tinkering, nature, and
                        emergence &middot; 28th to 31st July, 2023
                    </p>
                    <p>Otis Mountain, Upstate NY</p>
                    <Button>Join us</Button>
                </div>
                <img src="/header-border.svg" className={styles.border} />
            </header>
        </>
    );
}
