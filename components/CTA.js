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
        <h1 style={{marginBlockEnd: '0.3em'}}>
          You make this summer epic...
        </h1>
          <p style={{ marginBottom: 0 }}>
            No matter where our events take us, the key to the magic has always
            been you. <br /> Sign up below; let's make this the most meaningful weekend of the year.
          </p>
          <div className={styles.forms}>
            <div>
              <p style={{marginBottom: '4px', fontWeight: 500}}>Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                placeholder="Orpheus Smith"
                required
              />
            </div>
            <div>
              <p style={{marginBottom: '4px', fontWeight: 500}}>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="orpheus@hackclub.com"
                required
              />
            </div>
          </div>
        <br />
          <Button
            backgroundColor="var(--khaki)"
            textColor="var(--navy)"
            style={{fontSize: '1.4em'}}
            onClick={() => {
              if (typeof window !== undefined) {
                window.location.href = `https://register.outernet.hackclub.com/?Name=${name}&Email=${email}`;
              }
            }}
          >
            Register
          </Button>
      </div>
      <div>
        <img src="/cta-bg.svg" className={styles.border} />
      </div>
      {/* <Stars containerRef={containerRef} layers={1} /> */}
    </section>
  );
}
