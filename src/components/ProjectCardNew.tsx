import { ProjectsItemProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCardNew({
  title,
  desc,
  imgSrc,
}: ProjectsItemProps) {
  return (
    <div className="relative rounded-lg mx-auto shadow-md overflow-hidden group">
      <img
        src={imgSrc}
        alt={title}
        className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-150 group-hover:rotate-6"
      />
      <div className="absolute inset-0 bg-black/50 hover:bg-black/20 flex flex-col justify-between ">
        <div className="bg-transparent backdrop-blur-sm p-3 rounded-t-lg group-hover:backdrop-blur-0">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm">{desc}</p>
        </div>
        <button className="absolute top-4 right-4 bg-white/10 p-2 rounded-full text-customText/80">
          <ArrowUpRight size={18}/>
        </button>
      </div>
    </div>
  );
}
