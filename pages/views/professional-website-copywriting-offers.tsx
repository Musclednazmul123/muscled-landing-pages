import React from 'react';
import { NextPage } from 'next';
import Hero from '../../components/ProfessionalWebsiteCopywritingOffers/Hero';
import OurPartner from '@/components/landingPage/OurPartner/OurPartner';
import Pricing from '@/components/ProfessionalWebsiteCopywritingOffers/PricingPlan';
import Testimonial from '@/components/ProfessionalWebsiteCopywritingOffers/Testimonials';
import PromotionalSection from '@/components/ProfessionalWebsiteCopywritingOffers/PromotionSection';
import WebsiteCopywriterServices from '@/components/ProfessionalWebsiteCopywritingOffers/WebsiteCopywriterServices';
import CopywritingServicesTables from '@/components/ProfessionalWebsiteCopywritingOffers/CopyWritingServicesTables';
import GuideDetailSection from '@/components/ProfessionalWebsiteCopywritingOffers/GuideDetailSection';
const Page: NextPage = () => {
  return (
    <>
      <Hero />
      <OurPartner />
      <Pricing />
      <PromotionalSection />
      <Testimonial />
      <WebsiteCopywriterServices />
      <CopywritingServicesTables />
      <GuideDetailSection />
    </>
  );
};

export default Page;
