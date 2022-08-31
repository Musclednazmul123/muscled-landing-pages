import React, { FC } from 'react'
import DynamicSection from '../components/DynamicSection'
import { HeroSectionProps } from '../components/component.type'

const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  features,
  input,
  className
}) => {
  return (
    <DynamicSection className="flex-col md:flex-row">
      <div className="flex flex-col basis-1/2 text-white justify-between">
        <h2 className="text-6xl font-bold text-white">{title}</h2>
        <p className="text-left ">{description}</p>
      </div>
    </DynamicSection>
  )
}
export default HeroSection
