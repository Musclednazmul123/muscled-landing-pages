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
