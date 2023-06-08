// Green area on travel
import styles from "./Travel.module.scss";
import { Fade } from "react-reveal";

export default function Travel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Fade>
          <h1>
            Outernet is free and our gift to you; <br />
            let's make sure you can make it out here.
          </h1>
        </Fade>
      </div>
      <div className={styles.main}>
        <Fade>
          <img src="https://lh3.googleusercontent.com/wTQaY8GnZQbkoSvsyDgb-GK27Pc4nIBnoGk2lJWMWdPQf1RPrCwX5L6GOwv5bC7SFMSsCkk4mnK2gNIW4tSpriMNUHDCnsdNjoBeVEqHXTWUiiEWfytP0Q=s1600" />
          <p>
            Outernet is taking place in Vermont's Northeast Kingdom (Cabot,
            05647) at <a href="https://www.covenanthillsvt.org/who-we-are.html">Covenant Hills Campground</a>. Shuttles will be provided from:
          </p>

          <ul>
            <li>Boston-Logan International Airport</li>
            <li>Burlington International Airport</li>
            <li>Manchester-Boston Regional Airport</li>
            <li>Boston South Station</li>
          </ul>
          <p>
            The venue is also accessible via car{" "}
            <a href="https://goo.gl/maps/zhMntt1f3KT6TZae9">(directions)</a>.
          </p>
          <p>
            To ensure everyone has a chance to make it, our donors have funded a
            set of travel stipends. We're also working with United Airlines and
            Alaska Airlines to offer discounted flights.
          </p>
          <p>
            On your registation form, indicate that you'd like to recieve
            details about long-distance travel and we'll email the information
            about stipends and discounted flights to you and your parents. View our
            <a href="https://hack.af/outernet-travel-guide">travel guide</a>{" "}
            for additional guidance.
          </p>
        </Fade>
      </div>
    </div>
  );
}
