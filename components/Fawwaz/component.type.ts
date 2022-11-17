import React, {ButtonHTMLAttributes, FC, ReactNode } from "react";

import { title } from "process";
import { FlexLayoutProp } from "../kelvin/types";



// Card

export interface PricingCardProps {
	title?: string;
	rate?: string;
	type?: "basic" | "premium" | "ultimate";
	content?: string[];
}	
export interface CardProps {
	children: ReactNode;
	className?: string;

}

type CardHeaderType = "basic" | "premium" | "ultimate";

export interface CardHeaderProps {
	children?: ReactNode;
	className?: string;
	title?: string;
	rate: string;
	monthly?: JSX.Element;
	type: CardHeaderType | string | undefined;
	description?: string;
    bgColor?: string;
}

export interface CardContentProps {
	className?: string;
	children: ReactNode;
  title?: string;
  rate?: string;
  type?: "basic" | "premium" | "ultimate";
}

export interface CardContent {
  className?: string;
  children: ReactNode;
}

export interface CardFooterProps {
	className?: string;
	children?: ReactNode;
}

export interface IconProps {
  icon?: JSX.Element;
  title: string;
  className?: string;
  full?: string;
  headingClassName?: string;
}

// Form
export interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

export interface InputButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: string;
  textColor: string;
  children?: ReactNode;
  className?: string;
  rounded?: boolean;
  textSize?:string;
}

export interface RoundedBtnProps {
	bgColor: string;
	textColor: string;
	textSize: string,
	children: ReactNode;
	roundedFull: boolean;
	textWeight?:string;
	className?:string;
	padding?:string;
}

//  Table
export interface TableProps {
  children: ReactNode;
  className?: string;
}

export interface TableHeadChildProps {
	content: string | JSX.Element | ReactNode;
	className?: string;
}

export interface TableBodyChildProps {
  content?: string | JSX.Element;
  className?: string;
  type: "basic" | "standard" | "premium" | "ultimate";
}

export interface TableOfContentProps {
	bgColor?: string;
	titleColor?: string;
	titleIconColor?: string;
	contents: JSX.Element[] | string[] | ReactNode;
	isOpen: Boolean;
	className?:string;
	contentsClassName?:string;
	width?:string;
	icon?:ReactNode
	setIsOpen: () => void;
}

// Sections
export interface SectionProps {
  children: ReactNode;
  className?: string;
}
// testi

// footer

// hero
export interface HeroSectionProps {
	pagination?: JSX.Element;
	title: string | JSX.Element;
	titleClassNames?: string;
	description: string;
	descriptionTextColor?: string;
	descriptionClassName?:string;
	heroSVG?: JSX.Element | ReactNode;
	input?: boolean;
}

//AbdulRhman-UXAnalysis-Hero-Secion
export interface UXAnalysisHeroSectionProps {  
  pagination?: JSX.Element;
  title: string;
  description: string;
  heroSVG?: JSX.Element;
  input?: boolean;
  children?: ReactNode;
}

// miscellaneous
export interface PartnerLogo {
	src?: string;
	width?: number;
	height?: number;
	children?: ReactNode;
}

export interface VideoFrameProps {
  className: string;
  sourceURL?: string;
  allowFullScreen?: boolean;
}

export interface PromotionOneProps {
	title?: string;
}

export interface GuideItemProps {
	id: string;
	question: string;
	headingSize: 'small' | 'large';
	children: ReactNode;
}


export interface TableOfContentsProps {
	questions: {id:string; question:string;}[];
}

export interface LinkCardProps {
	title: string;
	links: string[];
}

export interface TestmonailProps {
	services:string[],
}
export interface RangeSliderSectionProps {
	bgColor:string,
	textColor:string,
}
export interface WebRedesignHeroSectionProps{
	title:string;
	titleClassNames?:string;
	description:string;
	descriptionTextColor?:string;
	heroSVG:JSX.Element;
	children?:any;
	contentWidth?:string;
	descriptionClassName?:string;
}