import React from "react";
import Hero14 from "./paragraph/Hero14";
import WebsiteDesignService from "./WebsiteDesignService";
import Input from "./Input";
import Buttons from "./Buttons";
import { NextPage } from "next";

interface IProps {
  value: string | number;
  onChange?: (e: any) => void;
}

const Hero: NextPage<IProps> = ({ value, onChange }) => {
  return (
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
        onChange={onChange}
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
  );
};

export default Hero;
