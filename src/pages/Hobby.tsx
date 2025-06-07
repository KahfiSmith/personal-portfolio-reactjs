import BackButton from "@/components/BackButton";
import Motion from "@/components/Motion";
import PopUpHobby from "@/components/PopUpHobby";
import ProjectCardDesign from "@/components/ProjectCardDesign";
import { useScrollToTop, useTitle } from "@/hooks";
import { dataHobby } from "@/lib/utils/dataHobby";
import { ProjectsItemProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const designProject = dataHobby.filter((item) => item.type === "design");

// Animation variants for page loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hobby() {
  useTitle("Hobby");
  useScrollToTop();

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ProjectsItemProps | null>(
    null
  );
  const popupRef = useRef<HTMLDivElement>(null);

  const handleOpenPopup = (item: ProjectsItemProps) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClosePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <Motion>
      <motion.div 
        className="w-full flex justify-center min-h-screen items-start pt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
          <motion.div variants={itemVariants}>
            <BackButton
              title="Hobby"
              subtitle="Apart from playing games and watching anime, I also enjoy other hobbies such as graphic design and reading manga. This activity not only hones creativity but also provides inspiration and new insights that I can apply in my work as a developer."
            />
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <h3 className="font-medium text-xl mb-1">Graphic Design</h3>
            <span>
              I enjoy exploring creative ideas through graphic design.
            </span>
          </motion.div>

          <motion.div 
            className="grid gap-5 grid-cols-1 md:grid-cols-2"
            variants={gridVariants}
          >
            {designProject.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onClick={() => handleOpenPopup(item)}
                className="cursor-pointer"
                whileHover={{ 
                  scale: 1.02, 
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectCardDesign
                  imgSrc={item.imgSrc}
                  title={item.title}
                  desc={item.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          {isPopupOpen && selectedItem && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClosePopup}
            >
              <motion.div
                ref={popupRef}
                className="relative shadow-lg max-w-[600px] overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4">
                  <PopUpHobby
                    title={selectedItem.title}
                    imgSrc={selectedItem.imgSrc}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Motion>
  );
}
