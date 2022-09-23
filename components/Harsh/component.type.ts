import { ReactNode } from "react"

export interface InputButtonProps {
  bgColor: string
  textColor: string
  children?: ReactNode
  className?: string
  rounded?: boolean
}

export interface ServiceContent {
  children?: ReactNode
  className?: string
}
export interface VideoFrameProps {
  className: string
  sourceURL?: string
  allowFullScreen?: boolean
}

export interface CardHeaderProps {
	children: ReactNode;
	className?: string;
	title: string;
	rate: string;
	type?: "basic" | "premium" | "ultimate";
}

export interface HeroSectionProps {
	pagination?: JSX.Element;
	title: string;
	description: string;
	heroSVG?: JSX.Element;
}

// Form
export interface InputProps {
  type: string
  placeholder: string
  className?: string
}
