import Button from "./Button";
import styles from "./CTA.module.scss";
import Stars from "./Stars";
import { useRef } from "react";
import { Fade } from "react-reveal";
import { useState } from "react";

export default function CTA() {
  const containerRef = useRef();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div>
        <h1>
          <Fade>You make this summer epic...</Fade>
        </h1>
        <Fade delay={300}>
          <p style={{ marginBottom: 0 }}>
            No matter where our events take us, the key to the magic has always
            been you. Join us and sign up.
          </p>
        </Fade>
        <Fade delay={500}>
          <div className={styles.forms}>
            <div>
              <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              required
            />
            </div>
            <div>
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
            />
            </div>
          </div>
        </Fade>
        <br />
        <Fade delay={700}>
          <Button
            backgroundColor="var(--khaki)"
            textColor="var(--navy)"
            onClick={() => {
              if (typeof window !== undefined) {
                window.location.href = `https://outernet-register.innovationcircuit.com/?Name=${name}&Email=${email}`;
              }
            }}
          >
            Register
          </Button>
        </Fade>
      </div>
      <div>
        <img
          src="/cta-bg.svg"
          className={styles.border}
        />
      </div>
      {/* <Stars containerRef={containerRef} layers={1} /> */}
    </section>
  );
}
