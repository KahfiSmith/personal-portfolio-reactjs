import { ProjectsItemProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsCardWebsite({
  imgSrc,
  title,
  desc,
  tags,
  link,
}: ProjectsItemProps) {
  const truncatedDesc = desc?.length && desc.length > 75 ? `${desc.slice(0, 75)}...` : desc ?? "No description available";

  return (
    <div className="ring-1 ring-customVerySoft rounded-xl hover:shadow-md hover:shadow-blue-800/50 transition-all duration-500 font-normal group cursor-pointer">
      <figure className="overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 max-h-[250px] min-h-[230px]"
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
            <a
              href={link}
              className="transition-transform duration-300 ease-in-out transform group-hover:rotate-45"
            >
              <ArrowUpRight />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
