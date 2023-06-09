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
              <div className={styles.qa}>
                <h2>What is this?</h2>
                <p>
                  Outernet is four day hacker camp in Vermont for high schoolers
                  with workshops, mini-hackathons, CTFs, and similar technical
                  events. It's organized by Hack Club, a 501(c)(3) nonprofit that
                  supports a global community of 25k high school makers.
                </p>
              </div>
              <div className={styles.qa}>
                <h2>Who can attend?</h2>
                <p>
                  Outernet is built by and for high schoolers. Graduating
                  seniors and middle schoolers are also welcome to join us.
                </p>
              </div>
              <div className={styles.qa}>
                <h2>How much does this event cost?</h2>
                <p>
                  Outernet is completely free, food and accomodation are
                  included. Travel stipends are also available.
                </p>
              </div>
              <div className={styles.qa}>
                <h2>I can't pay for travel...</h2>
                <p>
                  To ensure everyone has a chance to make it, our donors have
                  funded a set of travel stipends. We're also working with
                  United Airlines and Alaska Airlines to offer discounted
                  flights. More details are available post-registration.
                </p>
              </div>
              <div className={styles.qa}>
                <h2>What amenities will be available?</h2>
                <p>
                  Hot showers, unisex toilets, and sinks! Potable drinking water
                  is accessible via well. Power is available in select areas on
                  site. Limited WiFi will be available on site (don't worry,
                  we'll make it work!).
                </p>
              </div>
          </div>
          <div>
              <div className={styles.qa}>
                <h2>Where is Outernet hosted?</h2>
                <p>
                  Outernet is hosted at{" "}
                  <a href="https://www.covenanthillsvt.org/who-we-are.html" target="_blank">
                    Covenant Hills Campground
                  </a>{" "}
                  in the Northeast Kingdom region of Vermont, USA. The venue’s
                  address is{" "}
                  <a href="https://goo.gl/maps/zhMntt1f3KT6TZae9" target="_blank">
                    246 Covenant Hills Rd, Cabot, VT 05647
                  </a>
                  .
                </p>
              </div>
              <div className={styles.qa}>
                <h2>What are the sleeping arrangements?</h2>
                <p>
                  Most folks will be staying in 8-12 person camps that are
                  gender-seperated, we'll provide bedding & tents. You're also
                  welcome to bring your own tent setup.
                </p>
              </div>
              <div className={styles.qa}>
                <h2>What should I bring?</h2>
                <p>
                  Sturdy shoes, casual clothes for four days, a rain jacket, a
                  hoodie, swimming wear, a towel, simple toiletries, a
                  flashlight, a laptop plus its charger, and an open mind.
                </p>
              </div>
              <div className={styles.qa}>
                <h2>My parents are worried!</h2>
                <p>
                  We're here to help, ask them to reach out to us at{" "}
                  <a href="mailto:outernet@hackclub.com">
                    outernet@hackclub.com
                  </a>{" "}
                  and we'll make sure to answer all their questions. Outernet
                  will be supervised by background checked staff and overseen by
                  24/7 security staff. Find more resources (including
                  information sessions) in{" "}
                  <a href="https://hack.af/outernet-parents" target="_blank">
                    our parents guide
                  </a>
                  .
                </p>
              </div>
              <div className={styles.qa}>
                <h2>What have you all done in years prior?</h2>
                <p>
                  Glad you asked! We've ran overnight hackathons in{" "}
                  <a href="https://youtu.be/PnK4gzO6S3Q" target="_blank">San Francisco</a> and {" "}
                  <a href="https://youtu.be/KLx4NZZPzMc" target="_blank">New Delhi</a>. 
                  Two years ago, we charted a train from
                  Vermont to Los Angles and ran the world's longest hackathon
                  over land. We're not kidding, check out the mini-documentary:{" "}
                  <a href="https://youtu.be/2BID8_pGuqA" target="_blank">
                    The Hacker Zephyr
                  </a>
                  .
                </p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
