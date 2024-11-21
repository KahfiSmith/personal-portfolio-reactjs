import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50, 
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50, 
  },
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }} 
  >
    {children}
  </motion.div>
);

export default PageTransition;
