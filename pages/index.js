import About from "@/components/About";
import Header from "@/components/Header";
import Workshops from "@/components/Workshops";
import Travel from "@/components/Travel";
import { YourAdventure } from "@/components/YourAdventure";

export default function Index() {
  return (
    <>
      <Header />
      <About />
      <Workshops />
      <Travel />
      <YourAdventure />
    </>
  );
}
