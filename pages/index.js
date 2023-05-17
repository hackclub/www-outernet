import About from "@/components/About";
import Header from "@/components/Header";
import Workshops from "@/components/Workshops";
import Travel from "@/components/Travel";
import { YourAdventure } from "@/components/YourAdventure";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer/"

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
                        height: "14px",
                        backgroundColor: "var(--lightgold)",
                        marginBottom: "1rem"
                    }}
                />
                <div
                    style={{
                        width: "100%",
                        height: "14px",
                        backgroundColor: "var(--orange)",
                    }}
                />
            </footer>
            <Footer />
        </>
    );
}
