import React, { FC } from 'react'
import DynamicSection from '../components/DynamicSection'
import Input from '../components/heroSection/input'
import Button from '../components/heroSection/button'

import { HeroSectionProps } from '../components/component.type'
import { FeatureData } from '../data/hero'
import Feature from '../components/heroSection/feature'
import { useRouter } from 'next/router'

const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  features,
  input,
  className
}) => {
  const router = useRouter()

  const DisplayFeatures = () => {
    return FeatureData.map((item, key) => {
      return (
        <Feature
          topSubHeading={item.topSubHeading}
          heading={item.Heading}
          bottomSubHeading={item.bottomSubHeading}
          icon={item.icon}
          key={key}
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col md:flex-row md:h-[75vh] gap-y-4 md:gap-y-0">
      <div className="flex flex-col basis-[50%] text-white justify-around">
        <span>Home {router.asPath.replace('/', ' > ')}</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  font-bold text-white">
          {title}
        </h2>
        <p className="text-left mt-2 md:mt-0">{description}</p>
        <div className="flex flex-col md:flex-row w-full justify-between mt-2 md:mt-0">
          <Input
            placeholder="Enter your website link"
            type="text"
            className="basis-3/5 h-12 border-gray-500 border-[1px]"
          />
          <Button
            text="Send Proposal"
            className="basis-2/5 md:ml-2 mt-2 md:mt-0 h-12"
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
