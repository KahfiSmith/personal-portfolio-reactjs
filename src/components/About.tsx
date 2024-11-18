import { AboutCard } from "@/components/AboutCard";
import { Timeline } from "@/components/ui/timeline";
import { dataExperience } from "@/lib/utils/dataExprerience";

export default function About() {
  return (
    <section
      className="w-full flex justify-center pt-20 min-h-screen"
      id="about"
    >
      <div className="w-full md:flex md:flex-col items-center px-4 max-w-5xl">
        <div className="flex flex-col justify-start text-xl md:text-2xl lg:text-3xl font-medium mb-6">
          <span className="md:mb-5 mb-1 text-customText">
            I'm a Frontend Web Developer and UI/UX Designer
          </span>
        </div>
        <AboutCard/>
        <Timeline data={dataExperience} />
      </div>
    </section>
  );
}
