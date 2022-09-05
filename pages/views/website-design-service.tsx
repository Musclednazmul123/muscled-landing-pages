import React from "react";
import { NextPage } from "next/";

import { Section, Hero } from "components/Fawwaz/Sections";
import Logo from "components/Fawwaz/Logo";

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
    </div>
  );
};

export default Page;
