// Workshops with the balls!
import styles from "./Workshops.module.scss";

export default function Workshops() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1>it takes a village...</h1>
                <p>We’ve found the place.</p>
                <p>Now it’s time for you to create the space.</p>
                <p>
                    Outernet will be contrived of hacker-formed villages, taking
                    shape through the vision of the hackers involved.
                </p>
                <p>
                    We’ve set aside $5,000 for villages to use as the community
                    sees fit.
                </p>
                <p>
                    Propose an idea, form your camp group and build something
                    for the Outernet community to enjoy at{" "}
                    <a
                        className={styles.link}
                        href="https://github.com/hackclub/outernet"
                        target="_blank">
                        github.com/hackclub/outernet.
                    </a>
                </p>
            </div>
            <div />
        </div>
    );
}
