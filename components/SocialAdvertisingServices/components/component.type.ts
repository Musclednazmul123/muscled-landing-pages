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
