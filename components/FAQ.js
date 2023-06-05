import styles from "./FAQ.module.scss";
import { Slide, Fade } from "react-reveal";

export default function FAQ() {
  return (
    <>
      <section className={styles.wrapper}>
        <h1>
          <Slide>You might be wondering...</Slide>
        </h1>
        <div className={styles.faq}>
          <div>
            <Fade delay={200}>
              <div className={styles.qa}>
                <h2>What is this?</h2>
                <p>
                  Outernet is 4 day hacker camp in Vermont for high school
                  coders with workshops, mini-hackathon sprints, and other
                  programming. It's organized by Hack Club, a 501(c)3 nonprofit
                  that supports a global community of 25k high school makers.
                </p>
              </div>
            </Fade>
            <Fade delay={400}>
              <div className={styles.qa}>
                <h2>Who can come?</h2>
                <p>
                  Outernet is built by and for high schoolers. Graduating
                  seniors and middle schoolers are also welcome to join us.
                </p>
              </div>
            </Fade>
            <Fade delay={600}>
              <div className={styles.qa}>
                <h2>How much does this event cost?</h2>
                <p>
                  It’s completely free — food and accomodations are included —
                  and travel stipends are available.
                </p>
              </div>
            </Fade>
            <Fade delay={800}>
              <div className={styles.qa}>
                <h2>I can't pay for travel...</h2>
                <p>
                  To ensure everyone has a chance to make it, our donors have
                  funded a set of travel stipends. We're also working with
                  United Airlines and Alaska Airlines to offer discounted
                  flights. On your registation form, indicate that you'd like to
                  recieve details about long-distance travel and we'll email
                  more information about stipends and discounted flights to you
                  and your parents.
                </p>
              </div>
            </Fade>
            <Fade delay={1000}>
              <div className={styles.qa}>
                <h2>What amenities will be available?</h2>
                <p>
                  Portable restrooms (porta-potties) & sinks (pumped daily!).
                  Potable drinking water accessible via well. Power available in
                  select areas on site. Wifi available in select areas on site.
                </p>
              </div>
            </Fade>
          </div>
          <div>
            <Fade delay={1100}>
              <div className={styles.qa}>
                <h2>What are the sleeping arrangements?</h2>
                <p>Please bring your own sleeping bags and we have 4-6 person camps that are gender-seperated. </p>
              </div>
            </Fade>
            <Fade delay={1000}>
              <div className={styles.qa}>
                <h2>What should I bring?</h2>
                <ul>
                  <li>Sturdy shoes</li>
                  <li>Rain jacket / warm layers</li>
                  <li>Swimming wear</li>
                  <li>Towel</li>
                  <li>Flashlight / Headlamp</li>
                  <li>Laptop & charger</li>
                  <li>Sleeping bag</li>
                  <li>Camping pad</li>
                  <li>Tent</li>
                  <li>An open mind</li>
                </ul>
              </div>
            </Fade>
            <Fade delay={1200}>
              <div className={styles.qa}>
                <h2>My parents are worried!</h2>
                <p>
                  We're here to help, ask them to reach out to us at
                  outernet@hackclub.com and we'll make sure to answer all their
                  questions. Outernet will be supervised by background checked
                  staff and overseen by 24/7 security staff.
                </p>
                <p>
                  Find more resources (including information sessions) at our
                  parents guide <a href="/">here</a>.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
