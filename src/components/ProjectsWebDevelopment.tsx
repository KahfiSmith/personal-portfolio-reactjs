import ProjectsCardWebsite from "@/components/ProjectsCardWebsite";
import { dataProjects } from "@/lib/utils/dataProjects";
import { motion } from "framer-motion";

const websiteProject = dataProjects.filter((item) => item.type === "website");

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
      duration: 0.3,
    },
  },
};

export default function ProjectsWebDevelopment() {
  return (
    <motion.div
      className="flex flex-col mb-12"
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
        Web Development Portfolio
      </motion.h3>
      <motion.span 
        className="mb-6 text-customText font-normal text-base lg:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Modern and responsive web with a focus on intuitive UI/UX design
        and efficient backend solutions.
      </motion.span>
      <motion.div
        className="grid gap-5 grid-cols-1 md:grid-cols-2"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {websiteProject.map((item, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover="hover"
          >
            <ProjectsCardWebsite
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