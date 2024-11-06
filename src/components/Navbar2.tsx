import { NavItemProps } from "@/types";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar2() {
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
    <header className="w-full fixed z-50 bg-customSoft/20 top-0 left-0 h-20 flex items-center backdrop-blur-md">
      <nav className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <a href="/">
          <img src="/images/logos.svg" alt="KahfiSmith" className="w-16 h-16" />
        </a>
        <div className="relative flex justify-self-center items-center">
          <button className="md:hidden w-8 h-8 p-1 rounded-md bg-customSoft/40 active:scale-90 text-customText" onClick={() => setNavOpen(!navOpen)}>
            {" "}
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
        <span className="text-customText max-md:hidden justify-self-end">masmaba</span>
      </nav>
    </header>
  );
}
