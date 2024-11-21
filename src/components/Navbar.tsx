import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md">
      <nav className="flex flex-col justify-center py-5 px-6 text-customText/70 w-full">
        <div className="flex items-center md:justify-center md:ring-2 ring-customText/40 py-1 md:px-10 rounded-full md:mx-auto">
          <button
            className={`ml-auto md:hidden block transform transition-transform duration-300 z-50 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <ul
            className={`md:flex hidden md:justify-center md:items-center md:mt-0 mt-4 text-center space-y-4 md:space-y-0 font-semibold md:space-x-12 h-8 transition-all duration-300 ease-in-out ${
              isDesktop ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <li className="hover:text-customText transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#projects">Projects</a>
            </li>
            <li className="h-4 w-[1px] bg-customText/40"></li>
            <li
              className="hover:text-customText transition-colors cursor-pointer"
              onClick={() => navigate("/hobby")}
            >
              Hobby
            </li>
            <li
              className="hover:text-customText transition-colors cursor-pointer"
              onClick={() => navigate("/blog")}
            >
              Blog
            </li>
          </ul>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <motion.ul
                className="md:hidden mt-4 text-center space-y-4 font-semibold z-50 bg-customBackground p-6 rounded-lg shadow-lg mx-4 ring-1 ring-customSoft"
                variants={navVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, staggerChildren: 0.05 }}
              >
                <motion.li
                  className="hover:text-customText transition-colors"
                  variants={navVariants}
                >
                  <a href="#about">About</a>
                </motion.li>
                <motion.li
                  className="hover:text-customText transition-colors"
                  variants={navVariants}
                >
                  <a href="#skills">Skills</a>
                </motion.li>
                <motion.li
                  className="hover:text-customText transition-colors"
                  variants={navVariants}
                >
                  <a href="#projects">Projects</a>
                </motion.li>
                <motion.li
                  className="flex justify-center items-center"
                  variants={navVariants}
                >
                  <hr className="w-8 border-t-1 border-customText/40 my-0" />
                </motion.li>
                <motion.li
                  className="hover:text-customText transition-colors cursor-pointer"
                  onClick={() => navigate("/hobby")}
                  variants={navVariants}
                >
                  Hobby
                </motion.li>
                <motion.li
                  className="hover:text-customText transition-colors cursor-pointer"
                  onClick={() => navigate("/blog")}
                  variants={navVariants}
                >
                  Blog
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
