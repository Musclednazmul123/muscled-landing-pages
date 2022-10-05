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
  const getPath = () => {
    let path = router.asPath
    console.log(path)
    path = path.replace('/', ' > ')
    path = path.replace('-', ' ')
    path = path.replace('-', ' ')
    return path
  }

  return (
    <DynamicSection className="flex-col md:flex-row  2xl:h-[75vh] justify-between">
      <div className="flex flex-col xl:basis-[60%] text-white justify-center ">
        <span className="uppercase mb-[30px]">Home {getPath()}</span>
        <div className="">
          {/* text-2xl lg:text-3xl xl:text-5xl */}
          <p className="my-2 font-bold text-white text-[56px] whitespace-pre-line leading-[73px]">
            {title}
          </p>
          <p className="text-left text-[20px] font-light mt-[20px] leading-8">
            {description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center mt-[30px]">
          <Input
            placeholder="Enter your website link"
            type="text"
            className="basis-[70%] h-[60px] w-[480px] border-gray-500 border-[1px]"
          />
          <Button
            text="Send Proposal"
            className="basis-[30%] ml-[10px] md:mt-0 h-[60px] w-[226px]"
          />
        </div>
      </div>
      {/* <div className="flex basis-[10%]"></div> */}
      <div className="flex flex-col items-center justify-center basis-[37%] max-h-[454px] ml-[80px] self-center">
        {DisplayFeatures()}
      </div>
    </DynamicSection>
  )
}
export default HeroSection
