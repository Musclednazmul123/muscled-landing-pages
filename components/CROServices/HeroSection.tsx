import React from "react";

import Section from "./Section";
import HeroInput from "./HeroInput";
import HeroButton from "../Fawwaz/Button";
import { useRouter } from "next/router";

export type HeroSectionProps = {
  title?: string;
  description?: string;
  features?: Array<{
    title?: string;
    numbers?: string;
    description?: string;
    renderIcon?: () => React.ReactNode;
  }>;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  features = [],
}) => {
  const router = useRouter();

  return (
    <Section className="py-24 flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-4 lg:justify-between">
      <div className="max-w-[640px]">
        <p className="text-white text-lg font-medium space-x-2 cursor-pointer">
          <span>Home {router.asPath.replace("/", " > ")}</span>
        </p>

        <h1 className="text-[36px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5">
          {title}
        </h1>

        <p className="text-white-70 leading-8 mb-8">{description}</p>

        <div className="flex flex-wrap gap-2">
          <HeroInput
            type="text"
            placeholder="Enter Your Website Link"
            className="text-sm flex-1 md:text-lg"
          />
          <HeroButton bgColor="bg-black" textColor="text-white">
            <span className="text-sm md:text-lg">Send Proposal</span>
          </HeroButton>
        </div>
      </div>
      <div className="">
        {features.map((f) => {
          return (
            <div className="bg-black p-3 flex rounded-md mb-2" key={f.title}>
              {f.renderIcon?.()}
              <div className="ml-2">
                <p className="text-white font-medium">{f.title}</p>
                <p className="text-white font-bold text-3xl mt-1">{f.numbers}</p>
                <p className="text-[#BBB] mt-1 font-medium">{f.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HeroSection;
