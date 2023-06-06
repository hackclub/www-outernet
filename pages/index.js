import About from "@/components/About";
import Header from "@/components/Header";
import Workshops from "@/components/Workshops";
import Travel from "@/components/Travel";
import { YourAdventure } from "@/components/YourAdventure";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer"

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
            <Footer />
        </>
    );
}
