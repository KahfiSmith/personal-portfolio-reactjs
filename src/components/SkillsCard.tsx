import { SkillItemProps } from "@/types";

export default function SkillsCard({ imgSrc, label, desc }: SkillItemProps) {
  return (
    <div className="flex items-center gap-3 ring-2 ring-inset ring-customVerySoft rounded-xl p-3 hover:bg-customSoft/70 transition-colors group cursor-pointer bg-customSoft/30">
      <figure className="bg-customBackground/60 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-customBackground flex items-center justify-center transition-colors">
        <img src={imgSrc} alt={label} width={28} height={28} />
      </figure>
      <div className="font-semibold text-sm md:text-base lg:text-lg">
        <h3>{label}</h3>
        <p className="font-normal text-customText/90 text-sm">{desc}</p>
      </div>
    </div>
  );
}
