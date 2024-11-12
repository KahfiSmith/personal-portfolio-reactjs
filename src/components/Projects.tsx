import ProjectCardNew from "@/components/ProjectCardNew";
import ProjectsCard from "@/components/ProjectsCard";
import { dataProjects } from "@/lib/utils/dataProjects";

const websiteProject = dataProjects.filter((item) => item.type === "website");
const designProject = dataProjects.filter((item) => item.type === "design");

export default function Projects() {
  return (
    <section
      className="w-full flex justify-center pt-20 min-h-screen"
      id="projects"
    >
      <div className="w-full md:flex md:flex-col items-center justify-between px-16 lg:px-40">
        <div className="flex flex-col justify-start font-medium mb-6">
          <span className="md:mb-14 mb-6 text-customText font-semibold text-center text-[20px] md:text-2xl lg:text-3xl">
            Showcase of Creativity
          </span>
          <div className="flex flex-col mb-12">
            <span className="mb-1 text-customText font-semibold text-[20px] md:text-xl lg:text-2xl">
              Web Development Portfolio
            </span>
            <span className="mb-6 text-customText font-normal text-[20px] md:text-base lg:text-lg">
              Modern and responsive web with a focus on intuitive UI/UX design
              and efficient backend solutions.
            </span>
            <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
              {websiteProject.map((item, index) => (
                <ProjectsCard
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  desc={item.desc}
                  tags={item.tags}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <span className="mb-1 text-customText font-semibold text-[20px] md:text-xl lg:text-2xl">
              Creative Design Portfolio
            </span>
            <span className="mb-6 text-customText font-normal text-[20px] md:text-base lg:text-lg">
              Several innovative designs, ranging from mobile and website UI/UX,
              to anime GFX work.
            </span>
            <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
              {designProject.map((item, index) => (
                <ProjectCardNew
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
