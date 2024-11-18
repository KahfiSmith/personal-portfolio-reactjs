import BackButton from "@/components/BackButton";
import PopUpHobby from "@/components/PopUpHobby";
import ProjectCardDesign from "@/components/ProjectCardDesign";
import { useScrollToTop, useTitle } from "@/hooks";
import { dataHobby } from "@/lib/utils/dataHobby";
import { ProjectsItemProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const designProject = dataHobby.filter((item) => item.type === "design");

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
    <div className="w-full flex justify-center min-h-screen items-start pt-10">
      <div className="w-full md:flex md:flex-col items-start justify-start px-4 max-w-5xl">
        <BackButton
          title="Hobby"
          subtitle="Apart from playing games and watching anime, I also enjoy other hobbies such as graphic design and reading manga. This activity not only hones creativity but also provides inspiration and new insights that I can apply in my work as a developer."
        />

        <div className="mb-6">
          <h3 className="font-medium text-xl mb-1">Graphic Design</h3>
          <span>I enjoy exploring creative ideas through graphic design.</span>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {designProject.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOpenPopup(item)}
              className="cursor-pointer"
            >
              <ProjectCardDesign
                imgSrc={item.imgSrc}
                title={item.title}
                desc={item.desc}
                tags={item.tags}
              />
            </div>
          ))}
        </div>
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
              <PopUpHobby
                title={selectedItem.title}
                imgSrc={selectedItem.imgSrc}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
