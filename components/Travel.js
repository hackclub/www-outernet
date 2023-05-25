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
            all you have to do is get here.
          </h1>
        </Fade>
      </div>
      <div className={styles.main}>
        <Fade>
          <img src="https://cloud-gegnghd4o-hack-club-bot.vercel.app/018omgd-wattsm-297_1.png" />
          <p>
            Outernet is taking place in Vermont's Northeast Kingdom (Greensboro,
            05841). Shuttles will be provided from:
          </p>

          <ul>
            <li>Boston-Logan International Airport</li>
            <li>Manchester-Boston Regional Airport</li>
            <li>Burlington International Airport</li>
            <li> Boston South Station</li>
          </ul>
          <p>
            The venue is also accessible via car{" "}
            <a href="https://goo.gl/maps/3aapuzHCzKBMM5L77?coh=178573&entry=tt">
              (directions)
            </a>
            .
          </p>
          <p>
            To ensure everyone has a chance to make it, our donors have funded a
            set of travel stipends. We're also working with United Airlines and
            Alaska Airlines to offer discounted flights.
          </p>
          <p>
            On your registation form, indicate that you'd like to recieve
            details about long-distance travel and we'll email more information
            about stipends and discounted flights to you and your parents.
          </p>
        </Fade>
      </div>
    </div>
  );
}
