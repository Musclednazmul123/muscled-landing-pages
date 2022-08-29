import React from "react";
import Hero from "./Hero/Hero";
import OurPartner from "./OurPartner/OurPartner";
import Pricing from "./PricingPlan/Pricing";
import Testimonial from "./Testimonail/Testimonial";
import PromotionalSection from "./PromotionalSection/PromotionalSection";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <OurPartner />
      <Pricing />
      <Testimonial />
      <PromotionalSection />
    </>
  );
}
