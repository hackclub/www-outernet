import Button from "@/components/Button";
import styles from "./Header.module.scss";
import Stars from "./Stars";
import { useRef } from "react";

export default function Header() {
    const containerRef = useRef();

    return (
        <>

            <header className={styles.header} ref={containerRef}>
                <div className={styles.flag}>
                    <img src="/assets/flag.svg"/>
                </div>
                <div className={styles.parallaxGround}>
                    <img src="/assets/ground.png" />
                </div>

                <div className={styles.content}>
                    <h2>Hack Club presents...</h2>
                    <h1>Outernet</h1>
                    <p style={{ marginBottom: 0 }}>
                        A technological odyssey into tinkering, nature, and
                        emergence &middot; 28th to 31st July, 2023
                    </p>
                    <p>Otis Mountain, Upstate NY</p>
                    <Button backgroundColor="white" textColor="var(--orange)">
                        Join us
                    </Button>
                </div>
                <div>
                    <img src="/header-border.svg" className={styles.border} />
                </div>
            </header>
            
        </>
       
    );
}
