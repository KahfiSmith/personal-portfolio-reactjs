import ProjectsWebDevelopment from "@/components/ProjectsWebDevelopment";
import ProjectsCreativeDesign from "@/components/ProjectsCreativeDesign";
import { motion } from "framer-motion";

// Animation variants for main container and title
const pageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 60,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const dividerVariants = {
  hidden: { 
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Projects() {
  return (
    <section
      className="w-full flex justify-center pt-20 min-h-screen mb-6"
      id="projects"
    >
      <motion.div
        className="w-full md:flex md:flex-col items-center justify-between px-4 max-w-5xl"
        variants={pageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col justify-start font-medium mb-6">
          <motion.h2
            className="md:mb-14 mb-6 text-customText font-bold text-center text-xl md:text-2xl lg:text-3xl font-lora"
            variants={titleVariants}
          >
            Showcase of Creativity
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"
            variants={dividerVariants}
          />
          <ProjectsWebDevelopment />
          <ProjectsCreativeDesign />
        </div>
      </motion.div>
    </section>
  );
}
