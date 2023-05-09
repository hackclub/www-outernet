import Button from "@/components/Button";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <h2>Hack Club presents...</h2>
                <h1>Outernet</h1>
                <p style={{ marginBottom: 0 }}>
                    A technological odyssey into tinkering, nature, and
                    emergence &middot; 28th to 31st July, 2023
                </p>
                <p>Otis Mountain, Upstate NY</p>
                <Button>Join us</Button>
            </header>
        </>
    );
}
