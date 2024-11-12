import { ProjectsItemProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsCard({
  imgSrc,
  title,
  desc,
  tags,
  link,
}: ProjectsItemProps) {
  return (
    <div className="ring-1 ring-inset ring-customVerySoft rounded-xl hover:bg-customSoft/30 transition-colors font-normal">
      <figure>
        <img src={imgSrc} alt={title} loading="lazy" className="rounded-t-xl" />
        <figcaption className="p-4">
          <h3 className="text-xl font-medium mb-2 text-customTextV3">
            {title}
          </h3>
          <p className="mb-12">{desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 ">
              {tags &&
                tags.length > 0 &&
                tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center py-[2px] px-3 bg-customSoft/50 rounded-full text-customTextV3"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <a href={link}>
              <ArrowUpRight />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
