import React from "react";
import { NextPage } from "next";

import Banner from "components/CROServices/Banner";
import LearnMoreSection from "components/CROServices/LearnMoreSection";
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
import cardBg2 from "components/assets/card_bg_2.png";
import IMac24Inch from "components/assets/svg/iMac24Inch";

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
      <div className="bg-white">
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
          videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </div>
      <div>
        <ServiceTableSection />
      </div>
      <div className="bg-[#C400000F] py-24">
        <PromotionSection2 />
      </div>
      <div>
        <Section className="py-20">
          <div className="flex">
            <div className="flex-1 pr-12">
              <GuideDetailsSection />
            </div>
            <div id="toc" className="w-[440px]">
              <div className="sticky top-0">
                <TOCSection
                  links={[
                    {
                      title: "What Is Conversion Rate Optimization?",
                      to: "cro-services/#",
                    },
                    {
                      title: "Why Is CRO So Important?",
                      to: "cro-services/#",
                    },
                    {
                      title: "What Are The Advantages Of CRO Services?",
                      to: "cro-services/#",
                    },
                    {
                      title: "What Do WebFX’s CRO Services Include?",
                      to: "cro-services/#",
                    },
                    {
                      title: "Why Choose WebFX For CRO Services?",
                      to: "cro-services/#",
                    },
                    {
                      title: "AQs About Conversion Rate Optimization Services",
                      to: "cro-services/#",
                    },
                    {
                      title: "Grow Your Revenue With A Custom CRO Package",
                      to: "cro-services/#",
                    },
                  ]}
                />
                <div className="mt-[42px]">
                  <LearnMoreSection
                    links={[
                      {
                        title: "The Undeniable Benefits Of CRO",
                        to: "cro-services/#",
                      },
                      {
                        title: "What Is CRO?",
                        to: "cro-services/#",
                      },
                      {
                        title: "How To Make A CRO Plan",
                        to: "cro-services/#",
                      },
                      {
                        title: "How To Improve Your CRO Numbers",
                        to: "cro-services/#",
                      },
                      {
                        title: "25 Tips For Improving Your CRO [Guide]",
                        to: "cro-services/#",
                      },
                      {
                        title: "CRO Case Studies You Don’t Want To Miss",
                        to: "cro-services/#",
                      },
                      {
                        title: "The Questions That’ll Shape Your CRO Rate",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "6 Reasons Your Conversion Rates Are In The Gutter",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "Incredibly Tiny Changes That’ll Revolutionize Your Conversion Rates",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "Conversion Rate Marketing: Everything You Should (And Need) To Know",
                        to: "cro-services/#",
                      },
                      {
                        title: "What Is A Good Conversion Rate?",
                        to: "cro-services/#",
                      },
                      {
                        title: "Conversion Rate Testing Guide",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "PageSpeed Insights: How To Maximize Page Speed For More Conversions",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "7 Conversion Rate Optimization Strategies Every Business Should Use",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "What Is Google Optimize?",
                        to: "cro-services/#",
                      },
                      {
                        title:
                          "Conversion Rate Optimization Techniques To Use",
                        to: "cro-services/#",
                      },
                    ]}
                  />
                </div>
                <div className="mt-10">
                  <Banner
                    text="Drive more revenue for your company"
                    buttonText="Get Free Proposal"
                    bgImageSrc={cardBg2.src}
                    shouldCenterTextVertically
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <FAQSection />
            <div className="w-[440px] flex-shrink-0"></div>
          </div>
        </Section>
      </div>
      <div className="bg-[#F0F5F9]">
        <QuickLinksSection />
      </div>
    </div>
  );
};

export default CROServicesPage;
