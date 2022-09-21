import { InputRange, Pricing } from "components/elassari";
import Button from "components/Fawwaz/Button";
import { Section } from "components/Fawwaz/Sections";
import React from "react";

const PriceTable = () => {
  return (
    <Section className="w-[996px] mx-auto my-[84px]">
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
  );
};

export default PriceTable;
