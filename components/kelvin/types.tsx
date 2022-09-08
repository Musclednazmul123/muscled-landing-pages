import { ReactNode } from "react";

export interface FlexLayoutProp {
  spaceClass?: string;
  children: ReactNode;
  justify?: string;
  direction?: string;
  align?: string;
}

type row = (string | any)[];

export interface TableProp {
  headers: string[];
  rows: row[];
}

type ContentLink = {
  title: string;
  url: string;
};

export interface TableOfContentProp {
  links: ContentLink[];
}

export interface IProps {
  children?: ReactNode;
  className?: string;
  starIcons: ReactNode;
  subtitle?: string;
  list?: {
    icon?: boolean;
    text: string;
  }[];
  title?: string;
  description?: string;
  duration?: string;
  highlight?: string;
  headerBgColor?: string;
}

export interface ButtonProps {
  outline?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  arrow?: string;
  text: string;
  className?: string;
}
