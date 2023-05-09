import styles from "./About.module.scss";
import Stars from "./Stars";

const spotlightDiameter = 150;

export default function About() {
    return (
        <div className={styles.headerBorder}>
            <img src="/header-border.svg" />
            <div className={styles.about}>
                <div>
                    <h1>welcome to our grand experiment...</h1>
                    <p>
                        <b>
                            To all high school artists, writers, engineers,
                            tinkerers, campers, filmmakers, volunteers:
                        </b>
                    </p>
                    <p>
                        This summer, we’re ditching boring classrooms for the
                        great outdoors to create a hacker oasis where you can be
                        creative, make things, help one another, and have fun.
                    </p>
                    <p>
                        Together, let’s build a space where you can indulge in
                        an entirely new creative space. No preconceived notions.
                        No expectations. Just a space for you to create whatever
                        you want.
                    </p>
                </div>
                <div
                    className={styles.polaroids}
                    style={{ position: "relative" }}>
                    <img
                        style={{
                            position: "relative",
                            transform: "rotate(-10deg)",
                            zIndex: 0
                        }}
                        src="https://horizon.hackclub.com/images/5.jpg"
                    />
                    <img
                        style={{
                            transform: "rotate(10deg)",
                            position: "absolute",
                            top: "50%"
                        }}
                        src="https://horizon.hackclub.com/images/slh.jpg"
                    />
                </div>
            </div>
            <img src="/about-border.svg" />
            <img style={{ marginTop: "-14rem" }} src="/about-border1.svg" />
            <img style={{ marginTop: "-14rem" }} src="/about-border2.svg" />
            <img style={{ marginTop: "-14rem" }} src="/about-border3.svg" />
        </div>
    );
}
