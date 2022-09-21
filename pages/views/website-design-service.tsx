import React, { useState } from "react";
import { NextPage } from "next/";
import { Testimonial } from "components/Fawwaz/Sections";
import {
  BlogArticle,
  Hero,
  PriceTable,
  ServicesCard,
  DesignSevices,
  OurPartners,
} from "components/elassari";

const Page: NextPage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      {/* Hero Section */}
      <Hero value={value} onChange={(e: any) => setValue(e.target.value)} />

      {/* Our Partners Section */}
      <OurPartners />

      {/* Design Sevices Section */}
      <DesignSevices />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Pricing Table Section */}
      <PriceTable />

      {/* Blog Article */}
      <BlogArticle />

      {/* Services carte */}
      <ServicesCard />
    </div>
  );
};

export default Page;
