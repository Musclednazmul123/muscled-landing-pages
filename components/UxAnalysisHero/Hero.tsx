import React,{ FC } from "react";

import Section  from "../Fawwaz/Sections/Section";
import { Input } from "../Fawwaz/Form";
import Button from "../Fawwaz/Button";
import { UXAnalysisHeroSectionProps } from "../Fawwaz/component.type";
import { useRouter } from "next/router";


const Hero: FC<UXAnalysisHeroSectionProps> = ({
  title,
  description,
  heroSVG,
  children,
  input,
}) => {
  const router = useRouter();
  return (
    <Section className="py-[100px] flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-4 lg:justify-between">
      <div className="w-[720px]">
        {/* //? Pagination -- this should be dynamic? */}
        <p className="text-white text-lg font-medium space-x-2 cursor-pointer">
          <span>Home {router.asPath.replace("/", " > ")}</span>
        </p>

        <h1 className="text-[56px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5">
          {title}
        </h1>

        <p className="text-white-70 mb-14 text-xl leading-[30px]">{description}</p>

        {input && (
          <div className="flex flex-wrap gap-2">
            <Input
              type="text"
              placeholder="Enter Your Website Link"
              className="text-xl flex-1 md:text-lg h-[60px]"
            />
            <Button bgColor="bg-black" textColor="text-white">
              <span className="text-sm md:text-xl">Send Proposal</span>
            </Button>
          </div>
        )}
      </div>

      <div className="self-center">{heroSVG || children}</div>
    </Section>
  );
};

export default Hero;