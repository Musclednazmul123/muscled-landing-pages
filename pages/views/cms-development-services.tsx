import Hero from "../../components/Fawwaz/Sections/Hero";
import { NextPage } from "next";
import Image from "next/image";
import Rectangle from "../../components/Rectangle";
import IconSaleFunnel from "../../components/assets/icon-sales-funnel.png";
import Group from "../../components/assets/group.png";
import Trophy from "../../components/assets/icon-trophy-big-1.png";
import CloudComputing from "../../components/assets/icon-cloud-computing-1.png";

const Page: NextPage = () => {
  return (
    <div>
      {/* First Section */}
      {/* Left Side */}
      <div className="bg-black/[0.7] flex justify-center">
        <div>
          <Hero
            title="CMS Development Services that are completely transparent"
            description="Content management systems (CMS) are a must-have for all websites, from large informational sites to e-commerce stores. The simplest way to ensure a proper web presence is to streamline and organize your website, and Muscled can assist. Our CMS development services begin at $2,200 and are completely transparent. Scroll down for more information, or contact us for a specific quote!"
            input
          />
        </div>

        {/* Right Side */}
        <div className="max-w-[640px] mt-20 max-h-[640px] flex flex-col  justify-center">
          <div className="my-1">
            <Rectangle
              icon={IconSaleFunnel}
              text1={"Access the data-fueled plans behind "}
              number={"$3,021,182,299"}
              text2={"IN CLIENT REVENUE"}
            />
          </div>
          <div className="my-1">
            <Rectangle
              icon={Group}
              text1={"Use the expert-led tactics behind"}
              number={"7,839,684"}
              text2={"IN LEADS FOR OUR CLIENTS"}
            />
          </div>
          <div className="my-1">
            <Rectangle
              icon={Trophy}
              text1={"Unlock do-it-for-me marketing with"}
              number={"450"}
              text2={"DIGITAL MARKETING EXPERTS"}
            />
          </div>
          <div className="my-1">
            <Rectangle
              icon={CloudComputing}
              text1={"Accelerate ROI with"}
              number={"1+ BILLION"}
              text2={"DATA POINTS FROM MARKETINGCLOUDFX"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
