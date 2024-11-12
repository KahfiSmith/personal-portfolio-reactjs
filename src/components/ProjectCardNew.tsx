import { ProjectsItemProps } from "@/types";

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
        className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-150"
      />
      <div className="absolute inset-0 bg-black/50 hover:bg-black/20 p-4 flex flex-col justify-between text-customText">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
