
import { NavItemProps } from "@/types";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const Icon = navOpen ? X : Menu;

  const navItems: NavItemProps[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link",
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 backdrop-blur-md">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-end md:justify-center md:px-6">
        <button className="relative md:hidden w-8 h-8 p-1 rounded-md hover:ring-1 ring-customVerySoft active:scale-90 text-customText backdrop-blur-2xl" onClick={() => setNavOpen(!navOpen)}>
        <Icon/>
        </button>
        <nav className={`navbar ${navOpen ? "navbar-active" : ""}`}>
            {navItems.map((navItem) => (
              <a
                key={navItem.label}
                href={navItem.link}
                className={navItem.className}
              >
                {navItem.label}
              </a>
            ))}
          </nav>
      </div>
    </header>
  );
}
