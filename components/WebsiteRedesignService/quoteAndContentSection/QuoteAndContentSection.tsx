import React from 'react'
import { Section } from '../../Fawwaz/Sections'
import InstantQuoteSection from "../instantQuoteSection/InstantQuoteSection";
import RedesignContentSection from "../redesignContentSection/RedesignContentSection";
import ServicesCardSection from "../servicesCardSection/ServicesCardSection";


const QuoteAndContentSection = () => {
    return (
        <div>
            <Section className="py-32 gap-10">
                {/* Quotation */}
                <InstantQuoteSection />

                {/* Content Section */}
                <RedesignContentSection />

                {/* Services Card */}
                <ServicesCardSection />
            </Section>
        </div>
    )
}

export default QuoteAndContentSection