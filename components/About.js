import styles from "./About.module.scss";
import Stars from "./Stars";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef(null);

    return (
        <>
            <div ref={containerRef} style={{ position: "relative" }}>
                <div className={styles.about}>
                    <div className={styles.container}>
                        <div>
                            <h1>welcome to our grand experiment...</h1>
                            <p>
                                <b>
                                    To all high school artists, writers,
                                    engineers, tinkerers, campers, filmmakers,
                                    volunteers:
                                </b>
                            </p>
                            <p>
                                This summer, we’re ditching boring classrooms
                                for the great outdoors to create a hacker oasis
                                where you can be creative, make things, help one
                                another, and have fun.
                            </p>
                            <p>
                                Together, let’s build a space where you can
                                indulge in an entirely new creative space. No
                                preconceived notions. No expectations. Just a
                                space for you to create whatever you want.
                            </p>
                        </div>
                        <div
                            className={styles.polaroids}
                            style={{
                                position: "relative",
                                marginTop: "-130px"
                            }}>
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
                </div>

                {/* <Stars containerRef={containerRef} /> */}
            </div>
            <div
                className={styles.border}
                style={{ zIndex: 2, position: "relative", marginTop: "-1px" }}>
                <img
                    className={styles.border}
                    style={{ marginTop: "0px" }}
                    src="/about-stuff-1.svg"
                    draggable="false"
                />
            </div>
        </>
    );
}
