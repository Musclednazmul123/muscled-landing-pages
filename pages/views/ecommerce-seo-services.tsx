import React from "react";
import { NextPage } from "next";
import HeroSection from "components/CROServices/HeroSection";
import PromotionSection from "components/EcommerceSEOServices/PromotionSection";
import PricingPlanSection from "components/EcommerceSEOServices/PricingPlanSection";
import PartnerSection from "components/CROServices/PartnerSection";
import SalesFunnelIcon from "components/assets/svg/SalesFunnelIcon";
import GroupPeopleIcon from "components/assets/svg/GroupPeopleIcon";
import TrophyIcon from "components/assets/svg/TrophyIcon";
import CloudComputingIcon from "components/assets/svg/CloudComputingIcon";
import TestimonialSection from "components/EcommerceSEOServices/TestimonialSection";

const Page: NextPage = () => {
  return (
    <div>
      <HeroSection
        features={[
          {
            title: "Access the data-fueled plans behind",
            renderIcon: () => <SalesFunnelIcon />,
            numbers: "$3,021,182,299",
            description: "IN CLIENT REVENUE",
          },
          {
            title: "Use the expert-led tactics behind",
            renderIcon: () => <GroupPeopleIcon />,
            numbers: "7,839,684",
            description: "IN LEADS FOR OUR CLIENTS",
          },
          {
            title: "Unlock do-it-for-me marketing with",
            renderIcon: () => <TrophyIcon />,
            numbers: "450",
            description: "DIGITAL MARKETING EXPERTS",
          },
          {
            title: "Accelerate ROI with",
            renderIcon: () => <CloudComputingIcon />,
            numbers: "1+ BILLION",
            description: "DATA POINTS FROM MARKETINGCLOUDFX",
          },
        ]}
        title="Ecommerce SEO Services: Earn More Sales With SEO Experts"
        description="Capture more online sales with ecommerce SEO services from WebFX. Access the team and tech that have helped our clients earn $3 billion in revenue, and use them to accelerate your earnings from the web. Learn more about our tech-enabled ecommerce SEO services now, or request a custom proposal for your store."
      />
      <PartnerSection />
      <PricingPlanSection />
      <PromotionSection videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      <TestimonialSection
        companyName="Company Name"
        ownerName="Owner"
        testimony="“Muscled has gone above and beyond to make me happy. So far, after a few months, I have already seen significant improvement in rankings and conversions, and they have also greatly improved the speed of my site.”"
        videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
};

export default Page;
