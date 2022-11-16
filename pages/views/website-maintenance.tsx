import React from "react";
import { NextPage } from "next";
import Testimonial from "components/Harsh/Sections/Testimonial";
import Hero from "../../components/Harsh/Sections/Hero";
import Pricing from "../../components/Harsh/Sections/Pricing";
import OurPartner from "../../components/Harsh/Sections/OurPartner";
import Promotion from "../../components/Harsh/Sections/Promotion";
import ServicePlan from "../../components/Harsh/Sections/ServicePlans";
import DetailsAndTableofContents from "../../components/Harsh/Sections/DetailsAndTableofContents";
import ImportantLinks from "../../components/Harsh/Sections/ImportantLinks";

const Page: NextPage = () => {
  return (
    <>
      <Hero />
      <OurPartner />
      <Pricing />
      <Promotion />
      <Testimonial />
      <ServicePlan />
      <DetailsAndTableofContents />
      <ImportantLinks />
    </>
  );
};

export default Page;
