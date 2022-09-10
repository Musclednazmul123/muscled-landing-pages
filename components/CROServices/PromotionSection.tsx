import React from "react";
import { Hero, Section } from "../Fawwaz/Sections";
import Card from "../Card";
import { NextPage } from "next";
import Banner from "./Banner";

const PromotionSection: NextPage = () => {
  return (
    <div className="p-3 ">
      <div className="flex flex-wrap gap-10 justify-center py-20">
        <div className="max-w-[760px] space-y-7">
          <h2 className="text-4xl">
            Maximize your site’s perfomance with conversion rate optimization
            services
          </h2>
          <p className="md:text-xl">
            Conversion rate optimization services can help you improve the
            performance of your website. <br />
            <br /> The driving force behind increased revenue is having your
            viewers perform a desired action once they land on your pages.
            Muscled recognizes that increasing client conversions is essential
            for success, which is why our CRO services include: <br />
            <br /> Analysis of the usage, conversion rate, copy, and aesthetic
            appeal of a website to identify areas for improvement.
            <br /> A skilled Internet marketing team that analyzes your data in
            order to make informed decisions and recommendations. Based on the
            findings, you can take concrete actions to maximize the conversion
            potential of your traffic.
            <br />
            <br />
            Muscled is a trusted partner for companies looking for website
            conversion rate optimization services, with a client recommendation
            score that exceeds the industry average of 488 %.
            <br />
            <br />
            Are you ready to start optimizing your website's conversion rate?
            Contact us online to speak with an expert.
          </p>
        </div>
        <Banner
          text="Looking for custom plans and pricing? Request a proposal to receive yours"
          buttonText="Get Free Proposal"
        />
      </div>
    </div>
  );
};

export default PromotionSection;
