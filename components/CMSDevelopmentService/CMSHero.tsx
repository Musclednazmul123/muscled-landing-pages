import { FC } from "react";
import { useRouter } from "next/router";
import { Input } from "../Fawwaz/Form";

import Rectangle from "./Rectangle"; 

import IconSaleFunnel from "../../components/assets/icon-sales-funnel.png";
import Group from "../../components/assets/group.png";
import Trophy from "../../components/assets/icon-trophy-big-1.png";
import CloudComputing from "../../components/assets/icon-cloud-computing-1.png";

const CMSHero: FC = () => {
  const router = useRouter();

  return (
    <div>
      <div className="bg-black/[0.7] flex flex-col xl:flex-row">
        <div className="xl:mx-[55px]">
      <div className="py-24 flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-4 lg:justify-between">
        <div className="max-w-[720px]">
          <p className="text-white text-lg font-medium space-x-2 cursor-pointer">
            <span>Home {router.asPath.replace("/", " > ")}</span>
          </p>

          <h1 className="text-[36px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5">
            CMS Development Services that are completely transparent
          </h1>

          <p className="text-white-70 text-[19px] font-sans leading-8 mb-8">
            Content management systems (CMS) are a must-have for all websites,
            from large informational sites to e-commerce stores. The simplest
            way to ensure a proper web presence is to streamline and organize
            your website, and{" "}
            <span className="text-white font-bold"> Muscled</span> can assist.
            Our CMS development services begin at $2,200 and are completely
            transparent. Scroll down for more information, or contact us for a
            specific quote!
          </p>

          <div className="flex flex-wrap gap-2">
            <Input 
              type="text"
              placeholder="Enter Your Website Link"
              className="text-sm md:text-lg xl:h-[60px] h-[40px] xl:w-[470px] w-[287px]"
            />
            <button className="bg-black text-white font-poppins xl:py-[15px] py-[10px] px-[20px] xl:px-[45px]
             rounded-md text-xl font-bold">
              Send Proposal
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="xl:ml-12 mx-auto w-[436px]">
          <div className="max-w-[640px] max-h-[640px] flex flex-col justify-center">
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
    </div>
    </div>
    </div>
  );
};

export default CMSHero;
