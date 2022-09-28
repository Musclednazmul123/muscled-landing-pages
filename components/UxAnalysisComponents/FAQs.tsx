import React from "react";
import { Section } from "../Fawwaz/Sections";

import star from "components/assets/stars.png";

export default function FAQS() {
  return (
    <Section className=" my-10 mt-[80px] py-10 pl-[80px]">
      <div className="flex flex-col justify-center p-6 w-[633px] 
      min-h-[343px] bg-[#251F1F] rounded-2xl space-y-6">
        <h2 className="text-white font-bold  w-[442px] text-[36px] leading-[50px]">
          For verified ratings of our marketing services, please read our:
        </h2>
        <img className=" w-fit" src={star.src} alt="" />
        <p className="text-[#207DE9] ">
          Industry-leading 1,020 testimonials
        </p>
      </div>
    </Section>
  );
}
