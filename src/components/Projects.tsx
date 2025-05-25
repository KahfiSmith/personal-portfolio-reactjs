import ProjectCardDesign from "@/components/ProjectCardDesign";
import ProjectsCardWebsite from "@/components/ProjectsCardWebsite";
import { dataProjects } from "@/lib/utils/dataProjects";

const websiteProject = dataProjects.filter((item) => item.type === "website");
const designProject = dataProjects.filter((item) => item.type === "design");

export default function Projects() {
  return (
    <section
      className="w-full flex justify-center pt-20 min-h-screen mb-6"
      id="projects"
    >
      <div className="w-full md:flex md:flex-col items-center justify-between px-4 max-w-5xl">
        <div className="flex flex-col justify-start font-medium mb-6">
          <h2 className="md:mb-14 mb-6 text-customText font-bold text-center text-xl md:text-2xl lg:text-3xl font-lora">
            Showcase of Creativity
          </h2>
          <div className="flex flex-col mb-12">
            <h3 className="mb-1 text-customText font-semibold text-lg md:text-xl lg:text-2xl">
              Web Development Portfolio
            </h3>
            <span className="mb-6 text-customText font-normal text-base lg:text-lg">
              Modern and responsive web with a focus on intuitive UI/UX design
              and efficient backend solutions.
            </span>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              {websiteProject.map((item, index) => (
                <ProjectsCardWebsite
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  desc={item.desc}
                  tags={item.tags}
                  route={item.route}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-1 text-customText font-semibold text-lg md:text-xl lg:text-2xl">
              Creative Design Portfolio
            </h3>
            <span className="mb-6 text-customText font-normal text-base lg:text-lg">
              Several innovative designs, ranging from mobile and website UI/UX,
              to graphic design.
            </span>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              {designProject.map((item, index) => (
                <ProjectCardDesign
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  desc={item.desc}
                  tags={item.tags}
                  route={item.route}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
