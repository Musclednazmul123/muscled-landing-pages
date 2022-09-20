import React from 'react';
import { NextPage } from "next";
import HeroSection from '@/components/Rainmaker/HeroSection';
import Partners from '@/components/Rainmaker/Partners';
import PromotionSection from '@/components/Rainmaker/PromotionSection';
import FeaturedSection from '@/components/Rainmaker/FeaturedSection';
import ResultPromotion from '@/components/Rainmaker/ResultPromotion';
import GuidesSection from '@/components/Rainmaker/GuidesSection';
import BenefitsSection from '@/components/Rainmaker/BenefitsSection';
const MuscledWebsiteRainmaker:NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <PromotionSection />
      <FeaturedSection />
      <ResultPromotion />
      <GuidesSection />
      <BenefitsSection />
    </div>
  );
};
export default MuscledWebsiteRainmaker;
