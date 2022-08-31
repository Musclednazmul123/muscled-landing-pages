import React from 'react'
import { NextPage } from 'next'
import { HeroSection } from '../../components/SocialAdvertisingServices/sections'
import { HeroSectionData } from '../../components/SocialAdvertisingServices/data/hero'
import PartnerSection from '../../components/SocialAdvertisingServices/sections/partner'

const Page: NextPage = () => {
  // console.log(HeroSectionData)
  return (
    <>
      <div className="bg-neutral-700 p-4 md:p-8 lg:p-16">
        <HeroSection
          title={HeroSectionData.title}
          description={HeroSectionData.description}
        />
      </div>
      <PartnerSection />
    </>
  )
}

export default Page
