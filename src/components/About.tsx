import { AboutCard } from "@/components/AboutCard";
import { Timeline } from "@/components/ui/timeline";
import { dataExperience } from "@/lib/utils/dataExprerience";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
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

const timelineVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function About() {
  return (
    <motion.section
      className="w-full flex justify-center pt-20 min-h-screen"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-full md:flex md:flex-col items-center px-4 max-w-5xl mb-10">
        <motion.div 
          className="flex flex-col justify-start text-xl md:text-2xl lg:text-3xl font-medium mb-6"
          variants={titleVariants}
        >
          <motion.span 
            className="md:mb-5 mb-1 text-customText font-lora"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut"
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            I'm a Frontend Web Developer
          </motion.span>
        </motion.div>
        
        <motion.div
          className="w-full"
          variants={cardVariants}
        >
          <AboutCard/>
        </motion.div>
        
        <motion.div
          variants={timelineVariants}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          <Timeline data={dataExperience} />
        </motion.div>
      </div>
    </motion.section>
  );
}
