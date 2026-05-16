import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import WhyHireMe from "@/components/sections/WhyHireMe";
import TechStack from "@/components/sections/TechStack";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Research from "@/components/sections/Research";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/chatbot/Chatbot";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ai-bg text-white selection:bg-ai-primary/30">
        <Hero />
        <TechStack />
        <WhyHireMe />
        <About />
        <Skills />
        <CurrentlyBuilding />
        <Projects />
        <Experience />
        <Achievements />
        <Research />
        <References />
        <Contact />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}
