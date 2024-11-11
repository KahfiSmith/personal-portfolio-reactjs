import SkillsCard from "@/components/SkillsCard";
import { dataSkills } from "@/lib/utils/dataSkills";

export default function Skills() {
  return (
    <section className="w-full flex justify-center pt-20 min-h-screen" id="skills">
      <div className="w-full md:flex md:flex-col items-center justify-between px-16">
        <div className="flex flex-col justify-start text-[20px] md:text-2xl lg:text-3xl font-medium mb-6 w-full bg-customVerySoft/10 px-6 py-14 rounded-2xl">
          <span className="md:mb-14 mb-6 text-customText font-semibold text-center">
            Programming Language & Tools
          </span>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {dataSkills.map((item, index) => (
              <SkillsCard
                key={index}
                imgSrc={item.imgSrc}
                label={item.label}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
