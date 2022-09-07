import React, { useState } from "react";
import { NextPage } from "next/";
import { Section, Testimonial } from "components/Fawwaz/Sections";
import Button from "components/Fawwaz/Button";
import {
  Hero14,
  Input,
  Buttons,
  WebsiteDesignService,
  ServicesCard,
  InputRange,
  Pricing,
  OurPartners,
  DesignSevices,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Paragraph7,
  Paragraph8,
} from "components/page14components";

const Page: NextPage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      {/* Hero Section */}
      <Hero14
        title="Get a Custom Site That's Mobile and SEO Optimized with Website Design Services"
        desc="With an award-winning design team, Muscled is a top web design
        company that builds cutting-edge, profitable websites that capture
        your brand, boost conversion rates, and help you reach your
        objectives."
        HeroIcon={WebsiteDesignService}
      >
        <Input
          placeholder="Use calculator"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          className={
            "w-[184px] bg-white h-[60px] placeholder:text-black placeholder:text-xl placeholder:font-normal py-4 px-5 rounded-xs"
          }
        />
        <Buttons
          title="Send me a quote"
          width="w-[253px]"
          height="h-[63px]"
          className="ml-[10px] text-xl font-[600]"
          onClick={() => console.log("buttons clicked")}
        />
      </Hero14>

      {/* Our Partners Section */}
      <OurPartners />

      {/* Design Sevices Section */}
      <DesignSevices />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Pricing Table Section */}
      <Section className="w-[996px] mx-auto my-21">
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

        <div className="w-full my-7">
          <Button
            textColor="text-white"
            bgColor="bg-black"
            className="mx-auto text-xl w-[234px] font-[500] h-[60px]"
          >
            See Pricing
          </Button>
        </div>
      </Section>
      {/* End Pricing Table */}

      {/* 1 Paragraph */}
      <Paragraph1 />

      {/* 2 Paragraph */}
      <Paragraph2 />

      {/* 3 Paragraph */}
      <Paragraph3 />

      {/* 4 Paragraph */}
      <Paragraph4 />

      {/* 5 Paragraph */}
      <Paragraph5 />

      {/* 6 Paragraph */}
      <Paragraph6 />

      {/* 7 Paragraph */}
      <Paragraph7 />

      {/* 8 Paragraph */}
      <Paragraph8 />

      {/* Services carte */}
      <ServicesCard />
    </div>
  );
};

export default Page;
