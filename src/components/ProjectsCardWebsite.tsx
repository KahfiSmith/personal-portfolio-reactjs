import { ProjectsItemProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectsCardWebsite({
  imgSrc,
  title,
  desc,
  tags,
  route,
}: ProjectsItemProps) {
  const navigate = useNavigate();

  const truncatedDesc =
    desc?.length && desc.length > 75
      ? `${desc.slice(0, 75)}...`
      : desc ?? "No description available";

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div
      className="ring-1 ring-customVerySoft rounded-xl hover:shadow-md hover:shadow-slate-600/50 transition-all duration-500 font-normal group cursor-pointer"
      onClick={handleClick}
    >
      <figure className="overflow-hidden rounded-t-xl">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 w-full aspect-[16/9] object-cover"
        />
        <figcaption className="p-4">
          <h3 className="text-xl font-medium mb-2 text-customTextV3">
            {title}
          </h3>
          <p className="mb-12 leading-7">{truncatedDesc}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center py-[2px] px-3 bg-customSoft/50 rounded-full text-customTextV3 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ArrowUpRight className="transition-transform duration-300 ease-in-out transform group-hover:rotate-45" />
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
