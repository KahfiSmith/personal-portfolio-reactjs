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
  type?: string;
  route?: string;
}

export interface ContactProps {
  className?: string;
}

export interface SocialLinkProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export interface BackButtonProps {
  title: string;
  subtitle: string;
  titleColor?: string;
}
