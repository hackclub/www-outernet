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
            <footer style={{ padding: "6px 0" }}>
                <div
                    style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "var(--lightgold)",
                        marginBottom: "6px"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "var(--orange)",
                        marginBottom: "6px"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "var(--olive)"
                    }}
                />
            </footer>
        </>
    );
}
