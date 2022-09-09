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
import Questions from '../../components/SocialAdvertisingServices/sections/questions'

const Page: NextPage = () => {
  // console.log(HeroSectionData)
  return (
    <>
      {/* Section 1 - Hero Section */}
      <div className="bg-neutral-700 p-4 md:p-8 lg:p-16">
        <HeroSection
          title={HeroSectionData.title}
          description={HeroSectionData.description}
        />
      </div>

      {/* Section 2 - Our Partners Section  */}
      <PartnerSection />

      {/* Section 3 - Pricing Plan Section  */}
      <ServicePackages />

      {/* Section 4 - Promotion Section  */}
      <CustomerMediaAdvertising />

      {/* Section 5 - Testimonial Section  */}
      <ClientTestimonials />

      {/* Section 6 - Social media Advertising Services  */}
      <BusinessAdvertisingServices />

      {/* Section 7 - Service Table Section, Guide Details  */}
      <MediaTable />

      {/* Section 8 - Table of Contents and Faqs  */}
      <Questions />
    </>
  )
}

export default Page
