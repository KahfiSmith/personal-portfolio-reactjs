import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Motion from "@/components/Motion";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useTitle } from "@/hooks";

export default function Home() {
  useTitle("Kahfi Smith");
  return (
    <Motion>
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact className="fixed bottom-2 w-full z-40" />
      </div>
    </Motion>
  );
}
