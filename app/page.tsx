import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import SelectedWork from "@/components/sections/SelectedWork";
import Achievements from "@/components/sections/Achievements";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/navigation/Footer";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-950">
        <Hero />
        <About />
        <Experience />
        <SelectedWork />
        <Achievements />
        <TechnicalExpertise />
        <CompetitiveProgramming />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
