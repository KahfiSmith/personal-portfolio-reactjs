import { RefObject } from "react";

export interface NavItemProps {
  label: string;
  link: string;
  className: string;
  ref?: RefObject<HTMLAnchorElement>;
}

export interface NavbarProps {
    navOpen: boolean
}