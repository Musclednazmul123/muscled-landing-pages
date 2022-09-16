import React from "react";
import GuideDetailsSection from "./GuideDetailsSection";
import TOCSections from "../CROServices/TOCSection";
import FAQSection from "./FAQSection";
import { Section } from "../Fawwaz/Sections";

const BottomSection = () => {
  return (
    <div className="mt-60 mb-[111px]">
      <Section>
        <div className="flex">
          <div className="flex-1 mr-10">
            <GuideDetailsSection />
          </div>
          <div className="flex-shrink-0 w-[440px] ">
            <div className="sticky top-0">
              <TOCSections
                links={[
                  {
                    title: "What do our ecommerce SEO services include?",
                    to: "/ecommerce-seo-services#",
                  },
                  {
                    title: "Inside our ecommerce SEO services",
                    to: "/ecommerce-seo-services#",
                  },
                  {
                    title:
                      "Why choose Muscled for your ecommerce SEO services?",
                    to: "/ecommerce-seo-services#",
                  },
                  {
                    title: "Why do ecommerce businesses need SEO?",
                    to: "/ecommerce-seo-services#",
                  },
                  {
                    title: "Ecommerce SEO perks",
                    to: "/ecommerce-seo-services#",
                  },
                  {
                    title: "FAQ on SEO for e-commerce websites",
                    to: "/ecommerce-seo-services#",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-[60px]">
          <div className="flex-1 mr-10">
            <FAQSection />
          </div>
          <div className="flex-shrink-0 w-[440px] "></div>
        </div>
      </Section>
    </div>
  );
};

export default BottomSection;
