import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "../Fawwaz/Sections";
import Logo from "../Fawwaz/Logo";
import logo from "../assets/logos/logo1.png";

const PartnerSection: NextPage = () => {
  return (
    <Section className="text-center pt-16">
      <h3 className="text-black-50 text-2xl mb-4">Our Partners</h3>

      <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
        <Logo src={logo.src} width={154} height={34} />
        <Logo src={logo.src} width={154} height={34} />
        <Logo src={logo.src} width={154} height={34} />
        <Logo src={logo.src} width={154} height={34} />
        <Logo src={logo.src} width={154} height={34} />
      </div>
    </Section>
  );
};

export default PartnerSection
