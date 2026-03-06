import About from "@/components/about";
import Contect from "@/components/contect";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contect/>
      <Footer/>
    </>
  );
}
