import Button from "@/components/Button";
import styles from "./Header.module.scss";
import Stars from "./Stars";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [backgroundColor, setBackgroundColor] = useState("#87ceeb");
    const containerRef = useRef();
    const contentRef = useRef();

    const interpolateColor = (c0, c1, f) => {
        if (f === 0) return c0;
        //https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
        c0 = c0.match(/.{1,2}/g).map(oct => parseInt(oct, 16) * (1 - f));
        c1 = c1.match(/.{1,2}/g).map(oct => parseInt(oct, 16) * f);
        let ci = [0, 1, 2].map(i => Math.min(Math.round(c0[i] + c1[i]), 255));
        return `#${ci
            .reduce((a, v) => (a << 8) + v, 0)
            .toString(16)
            .padStart(6, "0")}`;
    };

    useEffect(() => {
        window.addEventListener("scroll", event => {
            setBackgroundColor(
                interpolateColor(
                    "87ceeb",
                    "07151b",
                    Math.min(window.scrollY / document.body.clientHeight, 1)
                )
            );
        });

        return window.removeEventListener("scroll", event => {
            setBackgroundColor(
                interpolateColor(
                    "#87ceeb",
                    "#07151b",
                    Math.min(window.scrollY / document.body.clientHeight, 1)
                )
            );
        });
    }, []);

    return (
        <>
            <header
                className={styles.header}
                ref={containerRef}
                style={{ backgroundColor }}>
                <img className={styles.flag} src="/assets/flag.svg" />
                <div className={styles.parallaxGround}>
                    <img src="/assets/ground.png" />
                </div>
                <div className={styles.contentBg}></div>
                <div className={styles.content}>
                    <h2>Hack Club presents...</h2>
                    <h1>Outernet</h1>
                    <p style={{ marginBottom: 0 }}>
                        A technological odyssey into tinkering, nature, and
                        emergence &middot; 28th to 31st July, 2023
                    </p>
                    <p>Otis Mountain, Upstate NY</p>
                    <Button backgroundColor="white" textColor="var(--orange)" href="https://outernet-register.innovationcircuit.com/">
                        Join us
                    </Button>
                </div>
                {/* <div>
                    <img src="/header-border.svg" className={styles.border} />
                </div> */}
            </header>
        </>
    );
}
