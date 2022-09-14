import React from "react";
import Section from "components/Fawwaz/Sections/Section";
import TextHeading from "./TextHeading";
import TextList from "./TextList";
import FaqSection from "./FaqSection";

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

const listFive = [
  "Create personalized ads for your e-commerce store to market directly to customers.",
  "Use advanced targeting to reach a highly targeted audience of ready-to-buy customers.",
  "Avoid wasting social ad spend and impressions by targeting broadly.",
  "Direct marketing to your email list, previous customers, and friends of previous customers",
  "Increase brand awareness by having social media users share your ads.",
];

const listSix = [
  " Online stores",
  "Consumer products",
  "Goods for the consumer",
  "Companies involved in food and nutrition",
  "B2C specialty companies",
];

const FaqData = {
  title: "How much do ecommerce PPC services cost?",
  description: `Typically, ecommerce PPC plans cost $400 to $5000, it could also be 10
  to 20% of your monthly ad spend. The price varies, depending on
  several factors like your intended ad spend or the PPC agency’s
  pricing.`,
};

const FaqData2 = {
  title: "What are ecommerce PPC services?",
  description: ` Ecommerce PPC services are for advertising on pay-per-click ad
  networks, like Google Ads, Bing, Microsoft Advertising, Facebook, and
  many more. You are to expect the development, management, and
  monitoring of your ad campaigns.`,
};
const TextSection = () => {
  return (
    <Section className=" text-[20px] pt-[10px] leading-[30px] text-[#000000]/[0.7]">
      <TextHeading
        title={`Muscled direct-to-consumer social media advertising services — what do our
        plans include?`}
      />
      <p className="pt-[40px] leading-[30px] font-normal text-[#000000]/[0.7] w-[760px]">
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
        especially beneficial for B2C businesses.
        <br />
        <br />
        Custom audiences can be created using social pixels or customer lists.
        <br />
        <br />
        Targeting by keyword, interest, and user intent
        <br />
        <br />
        Targeting at school, profession, and workplace
        <br />
        <br />
        Targeting by company size, industry, job title, and so on
        <br />
        <br />
        Device selection
        <br />
        <br />
        Demographic profiling
        <br />
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
      <TextHeading title="The Advantages of Direct-to-Consumer Social Media Advertising" />
      D2C social advertising has numerous advantages for businesses that sell
      directly to consumers. <br />
      <br />
      You can use D2C social ads to:
      <TextList list={listFive} />
      If you want to get better results — and spend every penny on advertising
      to customers who want to buy from you — social media ads are the way to
      go.
      <TextHeading title="Who should use direct-to-consumer social advertising?" />
      Not sure if direct-to-consumer social advertising is a good idea?
      <br />
      D2C social media ads are ideal for the following companies:
      <TextList list={listSix} />
      Want to learn more and speak with a professional about whether D2C social
      advertising is right for your company?
      <br />
      <br />
      Contact Muscled and connect with one of our social experts!
      <br />
      <br />
      Launch your D2C social ads right away!
      <br />
      <br />
      Are you ready to begin with direct to consumer social media advertising?
      <br />
      <br />
      Muscled can assist! We have over 25 years of experience developing
      successful social ad campaigns for hundreds of satisfied customers. In
      addition, we are a Meta Business Partner. You can be convinced that we
      understand what it takes to get your company the ROI it deserves.
      <br />
      Contact our social media experts today. We're excited to provide social
      media advertising services to help your D2C business grow!
      <TextHeading title="FAQs about ecommerce PPC management services." />
      <FaqSection {...FaqData2} />
      <FaqSection {...FaqData} />
    </Section>
  );
};
export default TextSection;
