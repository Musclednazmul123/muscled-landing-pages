import { ReactNode } from 'react'

export interface DynamicSectionProps {
  children: ReactNode
  className?: string
}

export interface HeroSectionProps {
  title: string
  description: string
  features?: ReactNode
  input?: boolean
  className?: string
}

export interface HeroFeatures {
  topSubHeading: string
  heading: string
  bottomSubHeading: string
  icon?: string
  className?: string
}

export interface HeroInput {
  className?: string
  type: string
  placeholder: string
}

export interface HeroButton {
  className?: string
  text: string
  textColor?: string
  backgroundColor?: string
}

export interface logoProps {
  src: string
  className?: string
}

export interface Card {
  stars: number
  packageName: string
  packagePrice: number
  features: string[]
  includes: string
  bgColor?: string
  className?: string
}

export interface ServicePackages {
  children?: ReactNode
  className?: string
}

export interface ServiceCard {
  heading: string
  subHeading: string
  buttonText: string
  className?: string
}

export interface tableRow {
  feature: string
  aggressive: string
  marketLeader: string
  enterprise: string
  isHead?: boolean
  className?: string
}

export interface secondTableRow {
  feature: string
  pixel: boolean
  catalogs: boolean
  isHead: boolean
}

export interface ListType {
  content: string[]
  className?: string
}
