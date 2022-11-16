import React from "react";
import { Section } from "../../Fawwaz/Sections";
import InstantQuoteSection from "../instantQuoteSection/InstantQuoteSection";
import RangeSlider from "./sliderComponent/RangeSliderSection";
import RedesignContentSection from "../redesignContentSection/RedesignContentSection";
import ServicesCardSection from "../servicesCardSection/ServicesCardSection";

const QuoteAndContentSection = () => {
  return (
    <div>
      <Section className="py-32 gap-10">
        {/* Quotation */}
        <RangeSlider bgColor="bg-[#574A5B]" textColor="text-white" />

        {/* Content Section */}
        <RedesignContentSection />

        {/* Services Card */}
        <ServicesCardSection />
      </Section>
    </div>
  );
};

export default QuoteAndContentSection;
