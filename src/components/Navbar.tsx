import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md">
      <nav className="flex flex-col justify-center py-5 px-6 items-center w-full text-customText/70">
        <div className="flex items-center justify-between w-full md:justify-center md:ring-2 ring-customText/40 py-1 md:px-10 rounded-full">
          <button
            className="md:hidden block ml-auto w-8 h-8 p-1 rounded-md active:scale-75 text-customText"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <ul className="md:flex hidden md:justify-center md:items-center md:mt-0 mt-4 text-center space-y-4 md:space-y-0 font-semibold md:space-x-12 h-8">
            <li className="hover:text-customText transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-4 text-center space-y-4 font-semibold">
            <li className="hover:text-customText transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-customText transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
