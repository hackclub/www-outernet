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
                  Outernet is four day hacker camp in Vermont for high schoolers with workshops, 
                  mini-hackathons, CTFs, and similar technical events. It's organized by Hack Club, 
                  a 501(c)3 nonprofit that supports a global community of 25k high school makers.
                </p>
              </div>
            </Fade>
            <Fade delay={400}>
              <div className={styles.qa}>
                <h2>Who can attend?</h2>
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
                  Outernet is completely free, food and accomodation are included. Travel stipends are also available.
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
                  flights. More details are available post-registration.
                </p>
              </div>
            </Fade>
            <Fade delay={1000}>
              <div className={styles.qa}>
                <h2>What amenities will be available?</h2>
                <p>
                  Portable restrooms (porta-potties) & sinks (pumped daily!).
                  Potable drinking water accessible via well. Power available in
                  select areas on site. Limited WiFi will be available on site (don't worry, we'll make it work!).
                </p>
              </div>
            </Fade>
          </div>
          <div>
            <Fade delay={1100}>
              <div className={styles.qa}>
                <h2>What are the sleeping arrangements?</h2>
                <p>Most folks will be staying in 8-12 person camps that are gender-seperated, we'll provide bedding & tents.
                You're also welcome to bring your own tent setup.</p>
              </div>
            </Fade>
            <Fade delay={1000}>
              <div className={styles.qa}>
                <h2>What should I bring?</h2>
                <p>Sturdy shoes, casual clothes for four days, a rain jacket, a hoodie, swimming wear, a towel, simple toiletries, a flashlight, a laptop plus it's charger, and an open mind.</p>
              </div>
            </Fade>
            <Fade delay={1200}>
              <div className={styles.qa}>
                <h2>My parents are worried!</h2>
                <p>
                  We're here to help, ask them to reach out to us at{" "}
                  <a href="mailto:outernet@hackclub.com">outernet@hackclub.com</a> and we'll make sure to answer all their
                  questions. Outernet will be supervised by background checked
                  staff and overseen by 24/7 security staff. Find more resources 
                  (including information sessions) in our
                  parents guide <a href="/">here</a>.
                </p>
              </div>
            </Fade>
            <Fade delay={1400}>
              <div className={styles.qa}>
                <h2>What have you all done in years prior?</h2>
                <p>
                  Glad you asked! We've ran overnight hackathons in <a href="">San Francisco</a>, <a href="https://youtu.be/KLx4NZZPzMc">New Delhi</a>, and <a href="">Boston</a>. 
                  Two years ago, we charted a train from Vermont to Los Angles and ran the world's longest hackathon over land. We're not kidding, check out the mini-documentary: <a href="https://youtu.be/2BID8_pGuqA">youtu.be/2BID8_pGuqA</a>.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
