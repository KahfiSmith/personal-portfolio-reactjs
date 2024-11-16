import ProjectCardDesign from "@/components/ProjectCardDesign";
import { useScrollToTop } from "@/hooks";
import { dataHobby } from "@/lib/utils/dataHobby";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const designProject = dataHobby.filter((item) => item.type === "design");

export default function Hobby() {
  const navigate = useNavigate();
  useScrollToTop();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="w-full flex justify-center min-h-screen items-start pt-10">
      <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
        <button
          onClick={handleBack}
          className="flex space-x-2 cursor-pointer group mb-6"
        >
          <MoveLeft className="transition-transform duration-300 ease-in-out group-hover:text-customTextV3 group-hover:-translate-x-2" />
          <span className="font-semibold">Back</span>
        </button>
        <div className="mb-6">
          <h2 className="md:mb-2 mb-1 text-customText font-semibold text-[20px] md:text-2xl lg:text-3xl">
            Hobby
          </h2>
          <span>
            Apart from playing games and watching anime, I also enjoy other
            hobbies such as graphic design and reading manga. This activity is
            not only hone creativity, but also provide inspiration and insight
            new thing that I can apply in my work as developers.
          </span>
        </div>
        <div className="mb-3">
          <h3 className="font-medium text-xl mb-1">Graphic Design</h3>
          <span>I enjoy exploring creative ideas through graphic design.</span>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {designProject.map((item, index) => (
            <ProjectCardDesign
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
            />
          ))}
        </div>
    
      </div>
    </section>
  );
}
