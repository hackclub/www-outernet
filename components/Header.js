import Button from "@/components/Button";
import styles from "./Header.module.scss";
import Stars from "./Stars";
import { useEffect, useRef, useState } from "react";
import { Fade, Zoom } from "react-reveal";

export default function Header() {
  const [backgroundColor, setBackgroundColor] = useState("#87ceeb");
  const containerRef = useRef();
  const contentRef = useRef();

  const interpolateColor = (c0, c1, f) => {
    if (f === 0) return c0;
    //https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
    c0 = c0.match(/.{1,2}/g).map((oct) => parseInt(oct, 16) * (1 - f));
    c1 = c1.match(/.{1,2}/g).map((oct) => parseInt(oct, 16) * f);
    let ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
    return `#${ci
      .reduce((a, v) => (a << 8) + v, 0)
      .toString(16)
      .padStart(6, "0")}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      setBackgroundColor(
        interpolateColor(
          "87ceeb",
          "07151b",
          Math.min(window.scrollY / document.body.clientHeight, 1)
        )
      );
    });

    return window.removeEventListener("scroll", (event) => {
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
        style={{ backgroundColor }}
      >
        <img className={styles.flag} src="/assets/flag.svg" />
        <div className={styles.parallaxGround}>
          <img src="/assets/ground.png" />
        </div>
        <div className={styles.contentBg}></div>
        <div className={styles.content}>
          <Fade>
            <h2>Hack Club presents...</h2>
          </Fade>
          <h1>
            <Zoom cascade delay={300}>
              Outernet
            </Zoom>
          </h1>
          <Fade delay={500}>
            <p style={{ marginBottom: 0, marginBlockEnd: '0.4em' }}>
              A hacker oasis in nature for high school hackers
            </p>
          </Fade>
          <Fade delay={700}>
            <p style={{ marginBlockStart: '0em' }}>Northeast Kingdom, VT, USA &middot; 28th to 31st July, 2023</p>
          </Fade>
          <br />
          <Fade delay={900}>
            <Button
              backgroundColor="white"
              textColor="var(--orange)"
              style={{ fontSize: '1.4em'}}
              href="https://register.outernet.hackclub.com/"
            >
              Join us
            </Button>
          </Fade>
        </div>
        {/* <div>
                    <img src="/header-border.svg" className={styles.border} />
                </div> */}
      </header>
    </>
  );
}
