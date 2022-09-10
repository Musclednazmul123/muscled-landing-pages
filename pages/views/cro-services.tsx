import React from "react";
import { NextPage } from "next";

import Banner from "components/CROServices/Banner";
import HeroSection from "components/CROServices/HeroSection";
import FAQSection from "components/CROServices/FAQSection";
import PromotionSection2 from "components/CROServices/PromotionSection2";
import PromotionSection from "components/CROServices/PromotionSection";
import GuideDetailsSection from "components/CROServices/GuideDetailsSection";
import QuickLinksSection from "components/CROServices/QuickLinksSections";
import PartnerSection from "components/CROServices/PartnerSection";
import TOCSection from "components/CROServices/TOCSection";
import TestimonialSection from "components/CROServices/TestimonialSection";
import PricingPlanSection from "components/CROServices/PricingPlanSection";
import ServiceTableSection from "components/CROServices/ServiceTableSection";
import SalesFunnelIcon from "components/assets/svg/SalesFunnelIcon";
import GroupPeopleIcon from "components/assets/svg/GroupPeopleIcon";
import TrophyIcon from "components/assets/svg/TrophyIcon";
import { Table, Th, Td, TableOfContent } from "components/Fawwaz/Table";
import CloudComputingIcon from "components/assets/svg/CloudComputingIcon";
import { Section } from "components/Fawwaz/Sections";
import Button from "components/Fawwaz/Button";
import Card from "components/Card";

const CROServicesPage: NextPage = () => {
  return (
    <div>
      <div className="bg-black-70">
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
          title="Revenue-Generating Conversion Rate Optimization Services"
          description="All the traffic in the world is meaningless unless it converts into paying customers, sales, or clients. Optimizing your conversion rate is an important aspect of digital marketing that we at Muscled know very well. Our CRO pricing is completely transparent — you always know where your money is going and how it is helping your site generate revenue for you."
        />
      </div>
      <div>
        <PartnerSection />
      </div>
      <div>
        <PricingPlanSection />
      </div>
      <div>
        <PromotionSection />
      </div>
      <div className="bg-black text-white">
        <TestimonialSection
          testimony='"Muscled continues to provide advanced solutions that add value to my
          company and my clients on a consistent basis. Muscled is worth the
          investment, easily outpacing the competition!"'
          ownerName="Owner"
          companyName="Company Name"
        />
      </div>
      <div>
        <ServiceTableSection />
      </div>
      <div className="bg-[#C400000F] py-24">
        <PromotionSection2 />
      </div>
      <div>
        <Section className="py-20 flex">
          <div className="flex-1 pr-12">
            <GuideDetailsSection />
            <FAQSection />
          </div>
          <div className="w-[440px]">
            <TOCSection
              links={[
                {
                  title: "What Is Conversion Rate Optimization?",
                  to: "/",
                },
                {
                  title: "Why Is CRO So Important?",
                  to: "/",
                },
                {
                  title: "What Are The Advantages Of CRO Services?",
                  to: "/",
                },
                {
                  title: "What Do WebFX’s CRO Services Include?",
                  to: "/",
                },
                {
                  title: "Why Choose WebFX For CRO Services?",
                  to: "/",
                },
                {
                  title: "AQs About Conversion Rate Optimization Services",
                  to: "/",
                },
                {
                  title: "Grow Your Revenue With A Custom CRO Package",
                  to: "/",
                },
              ]}
            />
          </div>
        </Section>
      </div>
      <div></div>
      <div>
        <QuickLinksSection />
      </div>
    </div>
  );
};

export default CROServicesPage;
