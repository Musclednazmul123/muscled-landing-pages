import React from 'react';
import { NextPage } from 'next';
import Hero from '../../components/SocialMediaServices/Hero/Hero';
import OurPartner from '@/components/landingPage/OurPartner/OurPartner';
import Pricing from '@/components/SocialMediaServices/PricingPlan/Pricing';
import Testimonial from '@/components/SocialMediaServices/Testimonials/Testimonial';
import PromotionalSection from '@/components/SocialMediaServices/Promotional Section/PromotionalSection';
import ServiceTable from '@/components/SocialMediaServices/ServiceTable/ServiceTable';
import AboutOurServiceSection from '@/components/SocialMediaServices/AboutOurService/AboutOurService';
import AdditionalServices from '@/components/SocialMediaServices/AdditionalServices/AdditionalServices';
import FaqAndTableOfContentSection from '@/components/SocialMediaServices/FaqAndTableOfContentSection';
const Page: NextPage = () => {
  return (
    <>
      <Hero />
      <OurPartner />
      <Pricing />
      <PromotionalSection />
      <Testimonial />
      <ServiceTable />
      <AdditionalServices />
      <AboutOurServiceSection />
      <FaqAndTableOfContentSection />
    </>
  );
};

export default Page;
