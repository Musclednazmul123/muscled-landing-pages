import React from "react";
import { NextPage } from "next";

// components
import { Section } from "components/Fawwaz/Sections";
import UxAnalysisHero from "../../components/UxAnalysisHero/index";
import Partners from "../../components/UxAnalysisComponents/LogosSection";
import PricingCard from "../../components/UxAnalysisComponents/PricingCards";
import UxTesmonial from "../../components/UxAnalysisComponents/UxTestmonila";
import QuoteCalculator from "../../components/UxAnalysisComponents/ QuoteCalculator";
import GuideDetails from "../../components/UxAnalysisComponents/GuideDetails";
import ImportantLinks from "../../components/UxAnalysisComponents/ImportantLinks";
import { BiChevronRight } from "react-icons/bi";
import FAQS from "../../components/UxAnalysisComponents/FAQs";

const Page: NextPage = () => {
  return (
    <>
      <UxAnalysisHero />
      <Partners />
      <PricingCard />
      <Section className="my-20 flex justify-center">
        <h4 className="underline flex items-center flex-row text-[#C40000] font-normal opacity-70">
          <a href="">SEE FULL DELIVERABLES </a>
          <BiChevronRight className="w-10 h-10" />
        </h4>
      </Section>
      <UxTesmonial />
      <QuoteCalculator />
      <GuideDetails />
      <FAQS />
      <ImportantLinks />
    </>
  );
};
export default Page;
