import Button from "./Button";
import styles from "./CTA.module.scss";
import Stars from "./Stars";
import { useRef } from "react";
import { Fade } from "react-reveal";

export default function CTA() {
  const containerRef = useRef();

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div>
        <h1>
          <Fade cascade>You make this summer epic...</Fade>
        </h1>
        <Fade delay={300}>
          <p style={{ marginBottom: 0 }}>
            No matter where our events take us, the key to the magic has always
            been you.
          </p>
        </Fade>
        <Fade delay={500}>
          <p>Thanks for being a part of the magic.</p>
        </Fade>
        <br />
        <Fade delay={700}>
          <Button backgroundColor="var(--khaki)" textColor="var(--navy)">
            Register
          </Button>
        </Fade>
      </div>
      <div>
        <img
          src="/cta-bg.svg"
          style={{ width: "100vw", marginLeft: "-7rem", marginBottom: "-8rem" }}
        />
      </div>
      {/* <Stars containerRef={containerRef} layers={1} /> */}
    </section>
  );
}
