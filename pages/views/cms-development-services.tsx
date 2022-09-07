import Hero from "../../components/Fawwaz/Sections/Hero";
import Section from "../../components/Fawwaz/Sections/Section";
import { NextPage } from "next";
import Image from "next/image";
import Rectangle from "../../components/Rectangle";
import IconSaleFunnel from "../../components/assets/icon-sales-funnel.png";
import Group from "../../components/assets/group.png";
import Trophy from "../../components/assets/icon-trophy-big-1.png";
import CloudComputing from "../../components/assets/icon-cloud-computing-1.png";
import Logo1 from "../../components/assets/logo-1.png";
import Logo2 from "../../components/assets/logo-2.png";
import Logo4 from "../../components/assets/logo-4.png";
import Logo5 from "../../components/assets/logo-5.png";
import Logo6 from "../../components/assets/logo-6.png";
import Logo7 from "../../components/assets/logo-7.png";
import Logo from "components/Fawwaz/Logo";

const Page: NextPage = () => {
  return (
    <div>
      {/* First Section */}
      {/* Left Side */}
      <div className="bg-black/[0.7] flex flex-col xl:flex-row justify-center">
        <div>
          <Hero
            title="CMS Development Services that are completely transparent"
            description="Content management systems (CMS) are a must-have for all websites, from large informational sites to e-commerce stores. The simplest way to ensure a proper web presence is to streamline and organize your website, and Muscled can assist. Our CMS development services begin at $2,200 and are completely transparent. Scroll down for more information, or contact us for a specific quote!"
            input 
          />
        </div>

        {/* Right Side */}
        <div className="max-w-[640px] xl:mt-20 -mt-24 max-h-[640px] flex flex-col justify-center">
          <div className="my-1 bg-blue-600 mx-auto">
            <Rectangle
              icon={IconSaleFunnel}
              text1={"Access the data-fueled plans behind "}
              number={"$3,021,182,299"}
              text2={"IN CLIENT REVENUE"}
            />
          </div>
          <div className="my-1 mx-auto">
            <Rectangle
              icon={Group}
              text1={"Use the expert-led tactics behind"}
              number={"7,839,684"}
              text2={"IN LEADS FOR OUR CLIENTS"}
            />
          </div>
          <div className="my-1 mx-auto">
            <Rectangle
              icon={Trophy}
              text1={"Unlock do-it-for-me marketing with"}
              number={"450"}
              text2={"DIGITAL MARKETING EXPERTS"}
            />
          </div>
          <div className="my-1 mx-auto">
            <Rectangle
              icon={CloudComputing}
              text1={"Accelerate ROI with"}
              number={"1+ BILLION"}
              text2={"DATA POINTS FROM MARKETINGCLOUDFX"}
            />
          </div>
        </div>
      </div>

      {/* Partner section */}
      <div className="mb-5 pb-5">
        <Section className="text-center pt-16">
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
    </div>
  );
};
export default Page;
