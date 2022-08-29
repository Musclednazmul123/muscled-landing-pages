import React from "react";
import { NextPage } from "next";

import Testimonial from "components/kelvin/sections/Testimonial";
import Hero from "components/kelvin/sections/Hero";
import Partner from "components/kelvin/sections/Partner";
import Pricing from "components/kelvin/sections/Pricing";
import Advert from "components/kelvin/sections/Advert";
import Services from "components/kelvin/sections/Services";
import Benefits from "components/kelvin/sections/Benefits";
import AdvPricing from "components/kelvin/sections/AdvPricing";
import Consultation from "components/kelvin/sections/Consultation";
import Mediamanagement from "components/kelvin/sections/Mediamanagement";
import ServiceCards from "components/kelvin/sections/ServiceCards";

const Page: NextPage = () => {
  return (
    <div>
      <Hero />

      <Partner />

      {/* pricing card section */}
      <Pricing />

      <Advert />

      <Testimonial />

      {/* advertisment services section */}
      <Services />

      {/* benefits section */}
      <Benefits />

      {/* open advertisment pricing section */}
      <AdvPricing />

      {/* standard consultation and reporting plans */}
      <Consultation />

      {/* socila media and management solution section */}
      <Mediamanagement />

      {/* services card section */}
      <ServiceCards />
    </div>
  );
};

export default Page;
