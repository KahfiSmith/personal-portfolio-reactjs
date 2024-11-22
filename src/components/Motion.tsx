import useScrollClick from "@/hooks/useScrollClick";
import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes, lazy } from "react";

type TransitionLayoutProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const BackToTop = lazy(() => import("@/components/BackToTop"));

export default function Motion({ children }: TransitionLayoutProps) {
  const scrollYValue = useScrollClick();

  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {children}
      </motion.div>
      {scrollYValue > 100 ? <BackToTop /> : null}
    </>
  );
}
