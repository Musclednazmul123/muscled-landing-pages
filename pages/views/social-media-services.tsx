import React from 'react';
import { NextPage } from 'next';
import Hero from '../../components/SocialMediaServices/Hero/Hero';
import OurPartner from '@/components/landingPage/OurPartner/OurPartner';
import Pricing from '@/components/SocialMediaServices/PricingPlan/Pricing';
import Testimonial from '@/components/SocialMediaServices/Testimonials/Testimonial';
import PromotionalSection from '@/components/landingPage/PromotionalSection/PromotionalSection';
import ServiceTable from '@/components/SocialMediaServices/ServiceTable/ServiceTable';
import AboutOurServiceSection from '@/components/SocialMediaServices/AboutOurService/AboutOurService';
import Faq from '@/components/SocialMediaServices/FAQ/FAQ';
import TableOfContext from '@/components/SocialMediaServices/TableOfContext/TableOfContext';

const Page: NextPage = () => {
  return (
    <>
      <Hero />
      <OurPartner />
      <Pricing />
      {/* <PromotionalSection /> */}
      <Testimonial />
      <ServiceTable />
      <AboutOurServiceSection />
      <div className='mt-[100px] px-5 md:px-10 lg:px-20 mx-auto container gap-[60px] lg:flex items-start pb-12 relative'>
        <div className='lg:w-[60%] mt-[20px]'>
          <Faq />
        </div>
        <div className='lg:w-[40%] sticky top-0 pt-[20px]'>
          <TableOfContext />
        </div>
      </div>
    </>
  );
};

export default Page;
