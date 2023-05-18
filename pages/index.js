import About from "@/components/About";
import Header from "@/components/Header";
import Workshops from "@/components/Workshops";
import Travel from "@/components/Travel";
import { YourAdventure } from "@/components/YourAdventure";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Index() {
    return (
        <>
            <Header />
            <About />
            <Workshops />
            <Travel />
            <YourAdventure />
            <CTA />
            <FAQ />
            <footer style={{ padding: "1rem 0" }}>
                <div
                    style={{
                        width: "100%",
                        height: "10px",
                        backgroundColor: "var(--lightgold)",
                        marginBottom: "10px"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "10px",
                        backgroundColor: "var(--orange)",
                        marginBottom: "10px"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "10px",
                        backgroundColor: "var(--olive)"
                    }}
                />
            </footer>
        </>
    );
}
