import { ProjectsItemProps } from "@/types";

export default function PopUpHobby({ title, imgSrc }: ProjectsItemProps) {
  return (
    <div className="relative mx-auto overflow-hidden">
      <div className="w-full h-full">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}
