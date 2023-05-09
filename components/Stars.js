import styles from "./Stars.module.scss";
import { useState, useEffect } from "react";

export default function Stars() {
    const [stars, useStars] = useState([]);

    useEffect(() => {
        //
    }, []);

    return (
        <>
            {stars.map((star, idx) => (
                <span
                    className={styles.star}
                    key={idx}
                    style={{ top: star.y, left: star.x }}>
                    &middot;
                </span>
            ))}
        </>
    );
}
