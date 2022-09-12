import { NextPage } from "next";

// Components
import Section from "../../components/Fawwaz/Sections/Section";
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import SimpleCustomCMS from "../../components/SimpleCustomCMS";
import CMSHero from "../../components/CMSHero";
import AboutCMS from "../../components/AboutCMS";
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
          <CMSHero
            title="CMS Development Services that are completely transparent"
            description="Content management systems (CMS) are a must-have for all websites, from large informational sites to e-commerce stores. The simplest way to ensure a proper web presence is to streamline and organize your website, and Muscled can assist. Our CMS development services begin at $2,200 and are completely transparent. Scroll down for more information, or contact us for a specific quote!"
            input
          />
        </div>
      </div>

      {/* Partner section */}
      <div className="bg-white">
        <Section className="text-center pt-8">
          <h3 className="text-black-50 text-2xl">Our Partners</h3>

          <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
            <Logo src={Logo1} width={154} height={42} />
            <Logo src={Logo2} width={154} height={42} />
            <Logo src={Logo4} width={154} height={42} />
            <Logo src={Logo5} width={154} height={42} />
            <Logo src={Logo6} width={154} height={42} />
            <Logo src={Logo7} width={154} height={42} />
          </div>
        </Section>
      </div>

      <SimpleCustomCMS />
      <Testimonial />
      <AboutCMS />
      

      {/* Simple Card */} 
      <div className="flex flex-col md:flex-row justify-center items-center  ">
        <SimpleCard
          heading="Web Design Services"
          items1="Web Design"
          items2="Website Redesign"
          items3="Landing Page Design"
          items4="Rapid Web Design"
        />
        <SimpleCard
          heading="Web Marketing Services"
          items1="SEO"
          items2="Website Copywriting"
          items3="PPC Management"
          items4="Content Maketing"
          items5="All Internet Marketing Services"
        />
        <SimpleCard 
          heading="Learn More About CMS Development"
          items1="The Complete guide to Redesigning Your Website "
          items2="How to know which CMS to use"
        />
      </div>
    </div>
  );
};
export default Page;
