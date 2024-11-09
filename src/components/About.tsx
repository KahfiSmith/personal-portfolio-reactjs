import { Timeline } from "@/components/ui/timeline";
import { dataExperience } from "@/lib/utils/dataExprerience";

export default function About() {
  return (
    <section className="w-full mb-96 flex justify-center pt-20" id="about">
      <div className="max-w-screen-lg md:flex md:flex-col items-center justify-between px-8">
        <div className="flex flex-col justify-start text-[20px] md:text-2xl lg:text-3xl font-medium mb-6">
          <span className="font-reguler md:mb-5 mb-1 text-customText">
            I'm a <span className="font-semibold">Frontend Web Developer</span>{" "}
            and <span className="font-semibold">UI/UX Designer</span>
          </span>
        </div>
        <div className="flex flex-col text-sm md:text-base leading-6 md:leading-7 text-justify mb-4">
          <span className="mb-4">
            Hello, my name is Mohamad Al-kahfi, but you can call me{" "}
            <span className="font-semibold text-customTextV2">Kahfi</span>. I am
            an Informatics Engineering student at Jember State Polytechnic. I
            chose to become a frontend developer because this profession allows
            me to combine creativity and technical skills to create engaging and
            effective user experiences.
          </span>
          <span>
            Currently, I have mastered{" "}
            <span className="text-customTextV3 font-semibold">
              HTML, CSS, JavaScript, Bootstrap, and Tailwind
            </span>
            . I also have experience in developing web applications using{" "}
            <span className="text-customTextV3 font-semibold">React.js </span>
            with{" "}
            <span className="text-customTextV3 font-semibold">TypeScript </span>
            as well as several backend languages such as{" "}
            <span className="text-customTextV3 font-semibold">
              PHP, Laravel, and Express.js
            </span>
            . In the future, I plan to learn
            <span className="text-customTextV3 font-semibold"> Next.js</span> to
            better understand developing more complete and dynamic web
            applications. By the way, I also like playing games and watching
            anime.
          </span>
        </div>
        <Timeline data={dataExperience} />
      </div>
    </section>
  );
}
