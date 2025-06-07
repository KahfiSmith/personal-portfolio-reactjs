import SkillsCard from "@/components/SkillsCard";
import { dataSkills } from "@/lib/utils/dataSkills";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Skills() {
  return (
    <motion.section
      className="w-full flex justify-center min-h-screen items-center"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="w-full md:flex md:flex-col items-center justify-between px-4 max-w-5xl">
        <motion.div 
          className="flex flex-col justify-start font-medium mb-6 w-full bg-customVerySoft/10 px-6 py-14 rounded-2xl"
          variants={containerVariants}
        >
          <motion.h2 
            className="md:mb-14 mb-6 text-customText font-semibold text-center text-xl md:text-2xl lg:text-3xl font-lora"
            variants={titleVariants}
          >
            Programming Language & Tools
          </motion.h2>
          <motion.div 
            className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
            variants={cardContainerVariants}
          >
            {dataSkills.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <SkillsCard
                  imgSrc={item.imgSrc}
                  label={item.label}
                  desc={item.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
