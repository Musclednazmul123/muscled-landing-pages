import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "../Fawwaz/Sections";
import Brand1 from "../assets/svg/Brand1";
import Brand2 from "../assets/svg/Brand2";
import Brand3 from "../assets/svg/Brand3";
import Brand4 from "../assets/svg/Brand4";
import Brand5 from "../assets/svg/Brand5";
import Brand6 from "../assets/svg/Brand6";

const PartnerSection: NextPage = () => {
  return (
    <Section className="text-center py-[50px]">
      <h3 className="text-black-50 text-2xl mb-[20px]">Our Partners</h3>

      <div className="grid grid-cols-6 gap-[75.6] ">
        <div className="flex justify-center">
          <Brand1 />
        </div>
        <div className="flex justify-center">
          <Brand2 />
        </div>
        <div className="flex justify-center">
          <Brand3 />
        </div>
        <div className="flex justify-center">
          <Brand4 />
        </div>
        <div className="flex justify-center">
          <Brand5 />
        </div>
        <div className="flex justify-center">
          <Brand6 />
        </div>
      </div>
    </Section>
  );
};

export default PartnerSection;
