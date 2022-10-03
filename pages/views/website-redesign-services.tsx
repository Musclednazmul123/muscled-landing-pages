import React from "react";
import { NextPage } from "next";

// components
import HeroSection from '../../components/WebsiteRedesignService/heroSection';
import RevenueSection from '../../components/WebsiteRedesignService/revenueSection/RevenueSection'
import TestimonialSection from "../../components/WebsiteRedesignService/testimonailSection/TestimonialSection";
import RedesignCalculatorSection from "../../components/WebsiteRedesignService/redesignCalculatorSection/RedesignCalculatorSection";
import QuoteAndContentSection from "../../components/WebsiteRedesignService/quoteAndContentSection/QuoteAndContentSection";



const Page: NextPage = () => {

    return (
        <>
            {/* Hero Section */}
            <HeroSection />
            {/* Grow your revenue */}
            <RevenueSection />
            {/* Testimonial */}
            <TestimonialSection />
            {/* Website Redesign Calculator */}
            <RedesignCalculatorSection />
            {/* Quotation & Content Section */}
            <QuoteAndContentSection />

        </>
    );
};

export default Page;
