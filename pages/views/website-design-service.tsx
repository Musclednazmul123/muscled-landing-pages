import React from "react";
import { NextPage } from "next/";

import { Section, Testimonial, Footer, Hero } from "components/Fawwaz/Sections";
import Button from "components/Fawwaz/Button";
import { InputRange, Pricing } from "components";
import Logo from "components/Fawwaz/Logo";
import image from "components/assets/image-14.png";
import { Card } from "components/Fawwaz/Card";
import VideoFrame from "components/Fawwaz/VideoFrame";

import WebsiteDesignService from "components/assets/svg/WebsiteDesignService";
import logo from "components/assets/logo/logo1.png";

const Page: NextPage = () => {
  return (
    <div>
      <div className="min-h-[890px] bg-black-70 px-3 lg:px-0">
        <Hero
          title="Get a Custom Site That's Mobile and SEO Optimized with Website Design Services"
          description="With an award-winning design team, Muscled is a top web design company that builds cutting-edge, profitable websites that capture your brand, boost conversion rates, and help you reach your objectives."
          heroSVG={<WebsiteDesignService className="w-96 md:w-auto" />}
          input
        />
      </div>

      <Section className="pt-16 text-center">
        <h3 className="text-2xl text-black-50">Our Partners</h3>

        <div className="flex flex-wrap justify-between gap-6 pt-5 pb-12">
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
        </div>
      </Section>

      <Section className="flex flex-wrap md:flex-nowrap h-[652px] gap-24 py-3 mt-1 md:justify-center xl:justify-start bg-[#F5F5F5]">
        <div className="w-[652px] h-[280px]">
          <p className="text-lg ">
            Your website is the first point of contact customers have with your
            company in the modern digital environment.
          </p>
          <p className="mt-8 text-lg">
            Because of this, web design accounts for about 95% of a user's first
            impression. Web Design Services can significantly affect your
            company's bottom line for the same reason.
          </p>
          <p className="mt-8 text-lg">
            For this reason, more businesses are not just reviewing the layout
            of their websites, but also teaming up with Muscled, a web design
            company that has helped its clients generate more than $3 billion in
            income over the course of its 25+ years in business and billions of
            data points.
          </p>
          <p className="mt-8 text-lg">
            With more than 50 web design awards under our belts, we are
            convinced that we can create a custom website that generates sales
            for your particular company. With MarketingCloudFX, you will have
            the platform for tracking (and accelerating) the return on
            investment of your new site (ROI).
          </p>
        </div>

        <div className="w-full md:w-[480px] h-[280px]">
          <div className="bg-gradient-to-r relative min-w-[200px] w-full max-w-[480px] h-[280px] mx-auto bg-white-gray md:mx-0">
            <VideoFrame className="absolute w-full h-full" />
          </div>
          <Card className="bg-[#3E5661] flex flex-col w-[480px] h-[270px] mt-4 mx-auto md:mx-0 rounded-md">
            <h4 className="p-6 pb-0 text-white">
              Looking for custom plans and pricing? Request a proposal to
              receive yours.
            </h4>
            <div className="flex flex-row items-center justify-between pl-6 ">
              <Button bgColor="bg-white" textColor="text-black">
                Get Free Proposal
              </Button>
              <div>
                <img src={image.src} alt={image.src} />
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Testimonial />

      {/* Pricing Table */}
      <Section className="w-[996px] mx-auto my-20">
        <Pricing
          title={"Get a Free Quote Now Making use of our web design calculator"}
          desc={`For a free, immediate quote, enter your needs into the sliders below and then click the "See Pricing" button. You'll get an overall range outlining how much it may cost to have such a website carried up because we\'ll give you both low and high end estimates for each service category.`}
        >
          <InputRange inputText="10 - 50" inputTitle="Amount of pages" />
          <InputRange
            inputTitle="Design"
            inputText="Simple yet appealing"
            width={310}
            left={"15%"}
          />
          <InputRange
            inputText="5 - 10"
            inputTitle="Pages in a copywriting project"
          />
          <InputRange inputTitle="SEO " inputText="30 - 50" />
          <InputRange inputTitle="Adaptive Design" inputText="Yes" left="40%" />
          <InputRange inputTitle="Integration of databases" inputText="Basic" />
          <InputRange inputTitle="Ecommerce capabilities" inputText="Simple" />
          <InputRange inputTitle="CMS" inputText="Standard" left="23%" />
        </Pricing>

        <div className="w-full my-5">
          <Button
            textColor="text-white"
            bgColor="bg-black"
            className="mx-auto text-xl"
          >
            See Pricing
          </Button>
        </div>
      </Section>
      {/* End Pricing Table */}
    </div>
  );
};

export default Page;
