import { SkillItemProps } from "@/types";

export default function SkillsCard({ imgSrc, label, desc }: SkillItemProps) {
  return (
    <div className="flex items-center gap-3 ring-2 ring-inset ring-customVerySoft rounded-xl p-3 hover:bg-customSoft/70 group cursor-pointer bg-customSoft/30 transform hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out">
      <figure className="bg-customBackground/60 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-customBackground flex items-center justify-center transition-colors transform group-hover:scale-110">
        <img
          src={imgSrc}
          alt={label}
          width={28}
          height={28}
          className="transition-transform duration-300 ease-in-out group-hover:rotate-6"
        />
      </figure>
      <div className="font-semibold text-sm md:text-base lg:text-lg">
        <span>
          {label}
        </span>
        <p className="font-normal text-customText/90 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}
