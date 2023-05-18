import styles from "./FAQ.module.scss";

export default function FAQ() {
    return (
        <>
            <section className={styles.wrapper}>
                <h1>You might be wondering...</h1>
                <div className={styles.faq}>
                    <div>
                        <div
                            className={styles.qa}
                            style={{ minHeight: "400px" }}>
                            <h2>What is this?</h2>
                            <p>
                                Outernet is built by and for high schoolers.
                                Graduating seniors and middle schoolers are also
                                welcome to join us on Otis.
                            </p>
                        </div>
                        <div className={styles.qa}>
                            <h2>Who can come?</h2>
                            <p>
                                Outernet is built by and for high schoolers.
                                Graduating seniors and middle schoolers are also
                                welcome to join us on Otis.
                            </p>
                        </div>
                        <div className={styles.qa}>
                            <h2>How much does this event cost?</h2>
                            <p>
                                It’s completely free - food is included and
                                travel stipends are available.
                            </p>
                        </div>
                        <div className={styles.qa}>
                            <h2>What amenities will be available?</h2>
                            <p>
                                Portolet restrooms (porta-potties) & sinks
                                (pumped daily!). Potable drinking water
                                accessible via well. Power available in select
                                areas on site. Wifi available in select areas on
                                site.
                            </p>
                        </div>
                    </div>
                    <div>
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
                        <div className={styles.qa}>
                            <h2>My parents are worried!</h2>
                            <p>
                                We're here to help, ask them to reach out to us
                                at outernet@hackclub.com and we'll make sure to
                                answer all their questions. Outernet will be
                                supervised by background checked staff and
                                overseen by 24/7 security staff.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
