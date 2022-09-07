import Hero from "../../components/Fawwaz/Sections/Hero";
import Section from "../../components/Fawwaz/Sections/Section";
import { NextPage } from "next";
import Rectangle from "../../components/Rectangle";
import Range from "../../components/Range";
import Button from "../../components/Fawwaz/Button";
// assets
// SVG
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
import VideoFrame from "components/Fawwaz/VideoFrame";

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

      {/* Section Third */}
      <div className="w-full bg-[#c40000]/[0.06] py-[40px] px-[5px] xl:py-[80px] xl:px-[100px] font-sans">
        <h1 className="text-center text-4xl font-bold pb-7">
          Simple Custom Content Management Systems
        </h1>

        <p className="xl:text-center text-left font-sans text-md xl:text-xl">
          Do you want to make it easier to manage the content on your website?
          For managing their websites, various web development companies use
          content management systems as customized web applications. Muscled
          improves CMS support by including:
        </p>
        <div className="mt-7">
          <ul className="text-center font-sans text-md xl:text-xl p-5">
            <li className="list-disc pb-4 md:pb-0">
              CMS pricing packages that are customized to help you get started
              on a project while staying within your budget.
            </li>
            <li className="list-disc pb-4 md:pb-0">
              Web integration of various CMS platforms, such as transactional,
              e-commerce, and content-based CMS.
            </li>
            <li className="list-disc pb-4 md:pb-0">
              A team of CMS web developers and SEO experts who can provide
              dependable and adaptable services to increase ROI.
            </li>
          </ul>
        </div>

        <div className="font-sans text-md xl:text-xl xl:text-center text-left mt-7">
          <p className="pb-7 ">
            Your company can get the CMS it requires with our custom content
            management systems. Our experienced team can deliver exactly what
            you need and on time, whether you need a custom content management
            system or a CMS platform like WordPress or Joomla
          </p>
          <p>
            Are you ready to speak with a strategist right now? We'd love to
            hear from you!
          </p>
        </div>

        {/* Range Component */}
        <div className="mt-10 bg-[#2e1e34cc]/[0.8] py-[40px] px-[5px] xl:py-[40px] xl:px-[100px]">
          <div className="text-white font-sans text-left">
            <h1 className="xl:text-[40px] text-[36px] leading-tight">
              Request an Instant Quote using Our Website Design Calculator
            </h1>
            <p className="text-[18px] text-md  mt-5 font-normal">
              To get a free, instant quote, use the sliders below to indicate
              your needs, then click the "See Pricing" button. We'll show you
              both low and high-ended estimates for each service category, so
              you'll have an overall range of how much it might cost to build
              such a website.
            </p>
          </div>
          <div>
            <Range />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
