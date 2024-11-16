import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
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

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md">
      <nav className="flex flex-col justify-center py-5 px-6 text-customText/70 w-full">
        <div className="flex items-center md:justify-center md:ring-2 ring-customText/40 py-1 md:px-10 rounded-full md:mx-auto ">
          <button
            className={`ml-auto md:hidden block transform transition-transform duration-300 ${
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
        <ul
          className={`md:hidden mt-4 text-center space-y-4 font-semibold transition-all duration-500 ease-in-out transform ${
            isOpen ? "" : "hidden"
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
          <li className="flex justify-center items-center">
            <hr className="w-8 border-t-1 border-customText/40 my-0" />
          </li>
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
      </nav>
    </header>
  );
}
