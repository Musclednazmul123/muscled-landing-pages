import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "../Fawwaz/Sections";
import TestimonialBanner from "./TestimonialBanner";
import Logo from "../Fawwaz/Logo";

const FAQSection = () => {
  return (
    <Section className=" pt-16">
      <div>
        <p className="text-4xl font-bold mb-12">
          FAQ's about Conversion Rate Optimization Services
        </p>
        <p className="text-lg mb-8">
          Are you interested in learning more about conversion rate optimization
          services for your company? View our Frequently Asked Questions:
        </p>
        <p className="text-2xl font-bold mb-3">
          What exactly is conversion rate optimization?
        </p>
        <p className="text-lg mb-8">
          Conversion rate optimization services test and improve elements on
          your website to improve conversions, such as product purchases or
          guide downloads. Audience research, heatmaps, visitor recordings, and
          experiment implementation are all common CRO services.
        </p>
        <p className="text-2xl font-bold mb-3">
          What are the prices for conversion rate optimization services?
        </p>
        <p className="text-lg mb-8">
          The cost of conversion rate optimization services is determined by
          several factors, including the number of tests conducted and the CRO
          agency with which you collaborate. CRO services are typically priced
          between $800 and $10,000 per month. Request a custom quote for the
          most accurate pricing.
        </p>
        <p className="text-2xl font-bold mb-3">We achieve results</p>
        <p className="text-lg mb-8">
          We are committed to delivering results that have a genuine impact on
          our clients' most important objectives. We've generated over 7.8
          million leads and $3 billion in revenue for our clients over the last
          five years.
        </p>
        <p className="text-2xl font-bold mb-3">
          Grow your revenue with a custom CRO package
        </p>
        <p className="text-lg mb-8">
          WebFX is a leader in conversion analysis and website conversion rate
          optimization services. We work with clients across the country, and in
          many industries, and we know what works. So if you’re ready to
          maximize your website’s potential, our conversion rate optimization
          company can help. <br />
          <br /> Call us at <span className="font-bold">888-601-5359</span> or
          request a free quote to get started!
        </p>
        <TestimonialBanner
          title="For verified ratings of our marketing services, please read our:"
          starCount={5}
          linkTitle="Industry-leading 1,020 Testimnials"
          totalRating={267}
          rating={4.9}
        />
      </div>
    </Section>
  );
};

export default FAQSection;
