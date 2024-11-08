import { ReactNode, RefObject } from "react";

export interface NavItemProps {
  label: string;
  link: string;
  className: string;
  ref?: RefObject<HTMLAnchorElement>;
}

export interface NavbarProps {
    navOpen: boolean
}

export interface ExperienceItem {
  title: string;
  content: ReactNode;
}