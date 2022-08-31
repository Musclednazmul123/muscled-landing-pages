import React, { FC } from 'react'
import DynamicSection from '../components/DynamicSection'
import Input from '../components/heroSection/input'
import Button from '../components/heroSection/button'

import { HeroSectionProps } from '../components/component.type'
import { FeatureData } from '../data/hero'
import Feature from '../components/heroSection/feature'

const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  features,
  input,
  className
}) => {
  console.log(FeatureData)
  const DisplayFeatures = () => {
    return FeatureData.map((item) => {
      return (
        <Feature
          topSubHeading={item.topSubHeading}
          heading={item.Heading}
          bottomSubHeading={item.bottomSubHeading}
          icon={item.icon}
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col md:flex-row md:h-[75vh] gap-y-4 md:gap-y-0">
      <div className="flex flex-col basis-[50%] text-white justify-around">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
          {title}
        </h2>
        <p className="text-left mt-2 md:mt-0">{description}</p>
        <div className="flex flex-col md:flex-row w-full justify-between mt-2 md:mt-0">
          <Input
            placeholder="Enter your website link"
            type="text"
            className="basis-3/4"
          />
          <Button
            text="Send Proposal"
            className="basis-1/4 md:ml-2 mt-2 md:mt-0"
          />
        </div>
      </div>
      <div className="flex basis-[10%]"></div>
      <div className="flex flex-col gap-y-4 items-center justify-center basis-[40%]">
        {DisplayFeatures()}
      </div>
    </DynamicSection>
  )
}
export default HeroSection
