import React from 'react'
import { Section } from "."
import { Logo } from "../CustomElements"
import logo1 from "../../assets/logo/logo1.png"
import logo2 from "../../assets/logo/logo2.png"
import logo4 from "../../assets/logo/logo4.png"
import logo5 from "../../assets/logo/logo5.png"
import logo6 from "../../assets/logo/logo6.png"
import logo7 from "../../assets/logo/logo7.png"

const OurPartnersSection = () => {
	return (
    <div className="min-h-[202px] bg-white mt-[35px]">
      <Section className="text-center pt-[50px]">
        <h3 className="text-black-50 text-2xl">Our Partners</h3>

        <div className="pt-5 flex flex-wrap justify-between pb-[58px] gap-6">
          <Logo src={logo1.src} width={138} height={36} />
          <Logo src={logo2.src} width={154} height={34} />
          <Logo src={logo4.src} width={170} height={41} />
          <Logo src={logo5.src} width={163} height={42} />
          <Logo src={logo6.src} width={100} height={51} />
          <Logo src={logo7.src} width={147} height={46} />
        </div>
    </Section>
    </div>
	);
};

export default OurPartnersSection;
