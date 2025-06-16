import ProjectCardDesign from "@/components/ProjectCardDesign";
import { dataProjects } from "@/lib/utils/dataProjects";
import { motion } from "framer-motion";

const designProject = dataProjects.filter((item) => item.type === "design");

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

export default function ProjectsCreativeDesign() {
  return (
    <motion.div
      className="flex flex-col"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h3
        className="mb-1 text-customText font-semibold text-lg md:text-xl lg:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Creative Design Portfolio
      </motion.h3>
      <motion.span
        className="mb-6 text-customText font-normal text-base lg:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Several innovative designs, ranging from mobile and website UI/UX, to
        graphic design.
      </motion.span>{" "}
      <motion.div
        className="grid gap-6 grid-cols-1 md:grid-cols-2 w-full"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {designProject.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="w-full h-full"
          >
            <ProjectCardDesign
              imgSrc={item.imgSrc}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
              route={item.route}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
