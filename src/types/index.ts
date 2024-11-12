import { ReactNode, RefObject } from "react";

export interface NavItemProps {
  label: string;
  link: string;
  className: string;
  ref?: RefObject<HTMLAnchorElement>;
}

export interface NavbarProps {
  navOpen: boolean;
}

export interface ExperienceItemProps {
  title: string;
  date: string;
  company: string;
  content: ReactNode;
}

export interface SkillItemProps {
  imgSrc: string;
  label: string;
  desc: string;
}

export interface ProjectsItemProps {
  imgSrc: string;
  title: string;
  desc?: string;
  tags?: string[];
  link?: string;
  type?: string;
}
