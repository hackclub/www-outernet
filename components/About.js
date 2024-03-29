import styles from "./About.module.scss";
import Stars from "./Stars";
import { useRef } from "react";
import { Fade, Zoom } from "react-reveal";

export default function About() {
  const containerRef = useRef(null);
  return (
    <>
      <div ref={containerRef} style={{ position: "relative" }}>
        <div className={styles.about}>
          <div className={styles.container}>
            <div>
              <h1 className={styles.title}>
                Welcome to{" "}
                our grand{" "}
               experiment
              </h1>
              <div className={styles.paragraph}>
               
                  <p>
                  To all high school artists, writers, engineers, tinkerers,
                  campers, filmmakers, volunteers:
                  </p>
              

                  <p>
                  This summer, we’re ditching boring classrooms for the great
                  outdoors to create a hacker oasis where you can be creative,
                  make things, help one another, and have fun.
                  </p>

                  <p>
                  Together, let’s build a space where you can indulge in an
                  entirely new creative space. No preconceived notions. No
                  expectations. Just a space for you to create whatever you
                  want.
                  </p>
                </div>
            </div>
              <div
                className={styles.polaroids}
              >
                <img
                  style={{
                    position: "relative",
                    transform: "rotate(-10deg)",
                    zIndex: 0,
                  }}
                  src="https://cloud-ilhjjq543-hack-club-bot.vercel.app/1238640104-c9057168-862e-46a4-9729-49a79115d2d2-min.jpeg"
                />
                <img
                  style={{
                    transform: "rotate(10deg)",
                    position: "absolute",
                    top: "50%",
                  }}
                  src="https://cloud-ilhjjq543-hack-club-bot.vercel.app/0238642298-6c1fd9c7-49a4-4bc8-ab17-c841c6bd6f8b.jpeg"
                />
              </div>
              
          </div>
        </div>

        {/* <Stars containerRef={containerRef} /> */}
      </div>
      <div
        className={styles.border}
        style={{ zIndex: 2, position: "relative", marginTop: "-1px" }}
      >
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
