import React from "react";
import { Section } from "../Fawwaz/Sections";
import cardBg2 from "../assets/card_bg_2.png";
import GuideDetailsSection from "./GuideDetailsSection";
import TOCSection from "./TOCSection";
import LearnMoreSection from "./LearnMoreSection";
import Banner from "./Banner";
import FAQSection from "./FAQSection";

const BottomSection = () => {
  return (
    <div>
      <Section className="py-20">
        <div className="flex">
          <div className="flex-1 pr-12">
            <GuideDetailsSection />
          </div>
          <div id="toc" className="w-[440px]">
            <div className="sticky top-10">
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
                      title: "What Is Google Optimize?",
                      to: "cro-services/#",
                    },
                    {
                      title: "Conversion Rate Optimization Techniques To Use",
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
  );
};

export default BottomSection;
