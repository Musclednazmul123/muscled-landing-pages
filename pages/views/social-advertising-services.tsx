import React from 'react'
import { NextPage } from 'next'
import { HeroSection } from '../../components/SocialAdvertisingServices/sections'
import { HeroSectionData } from '../../components/SocialAdvertisingServices/data/hero'
import PartnerSection from '../../components/SocialAdvertisingServices/sections/partner'
import ServicePackages from '../../components/SocialAdvertisingServices/sections/servicePlans'
import { CustomerMediaAdvertising } from '../../components/SocialAdvertisingServices/sections'
import ClientTestimonials from '../../components/SocialAdvertisingServices/sections/clientTestimonials'
import { BusinessAdvertisingServices } from '../../components/SocialAdvertisingServices/sections'
import MediaTable from '../../components/SocialAdvertisingServices/sections/mediaTable'

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
      <ServicePackages />
      <CustomerMediaAdvertising />
      <ClientTestimonials />
      <BusinessAdvertisingServices />
      <MediaTable />
    </>
  )
}

export default Page
