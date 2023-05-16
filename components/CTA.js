import Button from "./Button";
import styles from "./CTA.module.scss";
import Stars from "./Stars";

export default function CTA() {
    return (
        <section className={styles.wrapper}>
            <div>
                <h1>You make this summer epic...</h1>
                <p>
                    No matter where our events take us, the key to the magic has
                    always been you. Thanks for being a part of the magic.
                </p>
                <Button>Register</Button>
            </div>
            <Stars />
        </section>
    );
}
