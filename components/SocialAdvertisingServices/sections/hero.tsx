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
    <DynamicSection className="flex-col md:flex-row space-y-4 md:space-y-0 2xl:h-[75vh] justify-between">
      <div className="flex flex-col xl:basis-[60%] text-white justify-around ">
        <span>Home {router.asPath.replace('/', ' > ')}</span>
        <div className="space-y-8 mb-4">
          {/* text-2xl lg:text-3xl xl:text-5xl */}
          <h2 className="my-2 font-bold text-white text-[56px]">{title}</h2>
          <p className="text-left text-[20px] font-light mt-2 md:mt-0">
            {description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between mt-2 md:mt-0">
          <Input
            placeholder="Enter your website link"
            type="text"
            className="basis-[70%] h-16 border-gray-500 border-[1px]"
          />
          <Button
            text="Send Proposal"
            className="basis-[30%] md:ml-2 mt-2 md:mt-0 h-16"
            link="social-advertising-services"
          />
        </div>
      </div>
      {/* <div className="flex basis-[10%]"></div> */}
      <div className="flex flex-col items-center justify-center basis-[37%] max-h-[454px] self-center">
        {DisplayFeatures()}
      </div>
    </DynamicSection>
  )
}
export default HeroSection
