import * as React from 'react';
import { NextPage } from 'next';
import {
  HeroSection,
  ServiceSection,
  OurPartnersSection,
  BenefitSection,
  JobPositionSection,
  PromotionSection,
  TestimonialsSections,
  PastProjectSection,
  AboutMucledSection,
  KeepInTouchSection,
  JobApplicationSction,
} from 'components/Milos/Sections';
import {
  Footer
} from 'components/Fawwaz/Sections'

const Page: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <OurPartnersSection />
      <BenefitSection />
      <JobPositionSection />
      <PromotionSection />
      <TestimonialsSections />
      <PastProjectSection />
      <AboutMucledSection />
      <KeepInTouchSection />
      <JobApplicationSction />
      <Footer />
    </>
  )
}

export default Page;
