import { motion } from "framer-motion";
export default function Motion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className=" flex flex-col gap-4 items-center justify-center px-4"
    >
      {children}
    </motion.div>
  );
}
