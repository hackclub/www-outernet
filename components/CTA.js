import Button from "./Button";
import styles from "./CTA.module.scss";
import Stars from "./Stars";
import { useRef } from "react";

export default function CTA() {
    const containerRef = useRef();

    return (
        <section className={styles.wrapper} ref={containerRef}>
            <div>
                <h1>You make this summer epic...</h1>
                <p style={{ marginBottom: 0 }}>
                    No matter where our events take us, the key to the magic has
                    always been you.
                </p>
                <p>Thanks for being a part of the magic.</p>
                <Button backgroundColor="var(--khaki)" textColor="var(--navy)">
                    Register
                </Button>
            </div>
            <Stars containerRef={containerRef} layers={1} />
        </section>
    );
}
