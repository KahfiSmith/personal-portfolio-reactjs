import { ProjectsItemProps } from "@/types";

export default function PopUpHobby({ title, imgSrc }: ProjectsItemProps) {
  return (
    <div className="relative mx-auto overflow-hidden max-h-[80vh] w-full">
      <div className="w-full h-full">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-500 ease-in-out rounded-lg"
        />
      </div>
    </div>
  );
}
