import { NextPage } from "next";

// Components
import Section from "../../components/Fawwaz/Sections/Section";
import SimpleCard from "../../components/CMSDevelopmentService/SimpleCard";
import SimpleCustomCMS from "../../components/CMSDevelopmentService/SimpleCustomCMS";
import CMSHero from "../../components/CMSDevelopmentService/CMSHero"; 
import AboutCMS from "../../components/CMSDevelopmentService/AboutCMS";
import Logo from "components/Fawwaz/Logo";
// assets
// SVG
import Logo1 from "../../components/assets/logo-1.png";
import Logo2 from "../../components/assets/logo-2.png";
import Logo4 from "../../components/assets/logo-4.png";
import Logo5 from "../../components/assets/logo-5.png";
import Logo6 from "../../components/assets/logo-6.png";

import Logo7 from "../../components/assets/logo-7.png";
import Testimonial from "components/landingPage/Testimonials/Testimonial";

const Page: NextPage = () => {
  return (
    <div>
      {/* First Section */}
      <div className="bg-black/[0.7] flex flex-col xl:flex-row">
        <div className="xl:mx-[55px]">
          <CMSHero />
        </div>
      </div>

      {/* Partner section */}
      <div className="bg-white">
        <Section className="text-center pt-8">
          <h3 className="text-black-50 text-2xl">Our Partners</h3>

          <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
            <Logo src={Logo1} width={138} height={36} />
            <Logo src={Logo2} width={178} height={25} />
            <Logo src={Logo4} width={170} height={41} />
            <Logo src={Logo5} width={163} height={42} />
            <Logo src={Logo6} width={100} height={51} />
            <Logo src={Logo7} width={147} height={46} />
          </div>
        </Section>
      </div>

      <SimpleCustomCMS />
      <Testimonial />
      <AboutCMS />

      {/* Simple Card */} 
      <div className="flex flex-col md:flex-row justify-center items-center my-14">
        <SimpleCard />
      </div>
    </div> 
  );
};
export default Page;
