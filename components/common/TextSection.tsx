import React from "react";
import Section from "components/Fawwaz/Sections/Section";
import TextHeading from "./TextHeading";
import TextList from "./TextList";

const listOne = [
  "A dedicated account manager for social media",
  "A comprehensive audit of social advertising accounts",
  "Strategy recommendations and consulting on a custom basis",
  "Social and creative growth",
  "Management and optimization are ongoing.",
  "Extensive reporting ",
  "Access to MarketingCloudFX — our proprietary ROI tracking software",
  "And a lot more!",
];

const listTwo = [
  "3dcart",
  "BigCommerce",
  "WooCommerce",
  "Shopify",
  "CDK Global",
  "Magento",
  "PrestaShop",
  "OpenCart",
];

const listThree = [
  "Text advertisements",
  "Image advertisements",
  "Video advertisements",
  "Advertisements for remarketing",
  "And even more!",
];

const listFour = [
  "Produce leads and sales",
  "Emphasize special offers and promotions.",
  `Encourage
    post-event participation`,
  "Invite event responses",
  " And even more!",
];
const TextSection = () => {
  return (
    <Section className=" text-[20px] pt-[10px] leading-[30px] text-[#000000]/[0.7]">
      <TextHeading
        title={`Muscled direct-to-consumer social media advertising services — what do our
        plans include?`}
      />
      <p className="pt-[40px] leading-[30px] font-normal text-[#000000]/[0.7]">
        We've broken down our custom D2C social ad deliverables in the table
        above. All of our plans are customized to support D2C brands in higher
        exposure, engagement, leads, and sales through top social channels
        <br />
        <br />. When you choose Muscled as your D2C social media partner, you
        will receive the following benefits:
        <br />
        <br />
        <TextList list={listOne} />
        You'll also have access to advanced ad targeting options, which are
        especially beneficial for B2C businesses
        <br />
        <br />. Custom audiences can be created using social pixels or customer
        lists.
        <br />
        <br />
        Targeting by keyword, interest, and user intent <br />
        <br />
        Targeting at school, profession, and workplace
        <br />
        <br /> Targeting by company size, industry, job title, and so on
        <br />
        <br /> Device selection <br />
        <br />
        Demographic profiling <br />
        <br />
        D2C e-commerce brands will also benefit from easier integration with
        platforms such as:
        <br />
        <br />
        <TextList list={listTwo} />
        Our customized deliverables and pricing options will help your D2C
        company achieve the best results possible. But don't just take our word
        for it; read the testimonials from Muscled satisfied customers.
        <br />
        <br />
        Like what you've seen so far? Contact us to begin developing your D2C
        social ad strategy!
      </p>
      <TextHeading title="D2C brands' social media advertisement types" />
      Direct-to-consumer to consumer social media ads come in a variety of
      formats, including:
      <br />
      <TextList list={listThree} />
      You can tailor your ad objectives based on your D2C business goals to:
      <br />
      <TextList list={listFour} />
      Your ad type and format selection can have a significant impact on the
      overall success of your campaigns. If you're unsure where to begin, we
      recommend contacting a professional social media agency such as Muscled .
      <br />
      <br />
      We've developed and managed social ad campaigns for hundreds of D2C
      businesses like yours in our 20+ years of experience. And we know what it
      takes to help you achieve your social media objectives.
      <br />
      <br /> Contact our social experts online to learn how we can help your D2C
      brand grow!
    </Section>
  );
};
export default TextSection;
