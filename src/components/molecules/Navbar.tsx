import { NavbarProps, NavItemProps } from "@/types";
import { useEffect, useRef } from "react";

export default function Navbar({ navOpen }: NavbarProps) {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    e.currentTarget.classList.add("active");

    lastActiveLink.current = e.currentTarget;

    initActiveBox();
  };

  useEffect(() => {
    const homeLink = document.querySelector(
      ".nav-link.active"
    ) as HTMLAnchorElement | null;
    if (homeLink) {
      lastActiveLink.current = homeLink;
      initActiveBox();
    }
  }, []);

  window.addEventListener("resize", initActiveBox);

  const navItems: NavItemProps[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
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
    <nav className={`navbar ${navOpen ? "navbar-active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={handleLinkClick}
        >
          {label}
        </a>
      ))}
      <div
        className="active-box"
        ref={activeBox}
      ></div>
    </nav>
  );
}
