import React, { FC } from "react";
import Image from "next/image";

const measures: string[] = ["Leads", "Transactions", "Calls", "Revenue"];

const DevIdeaMachinesCard: FC = () => {
  return (
    <div className="flex w-[638px] h-[568px] bg-[#6E0000] rounded-lg justify-evenly pl-2 relative z-50 items-center">
      <div className="flex flex-col text-white w-[294px] space-y-8 justify-center">
        <div className="w-[288px]">
          <p className="font-bold text-3xl leading-[45px]">
            Measuring the metrics that affect your bottom line.
          </p>
        </div>

        <div>
          <p className="font-normal text-base leading-[24px] -mt-3">
            Are you interested in custom reporting that is specific to your
            unique business needs? Powered by MarketingCloudFX, WebFX creates
            custom reports based on the metrics that matter most to your
            company.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-y-6 ">
          {measures.map((measure, index) => {
            return (
              <div className="flex space-x-2" key={index}>
                <div>
                  <Image src="/tick.png" width="22" height="22"></Image>
                </div>
                <div>
                  <p className="text-base leading-[24px]">{measure}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="bg-white text-base flex rounded-lg justify-center max-w-[172px]  
          min-h-[56px] text-[#8E0000] font-[500] items-center "
        >
          Learn More
          <div className="ml-2 mt-2">
            <Image src="/devIdeaMachinesArrow.png" width="24" height="24" />
          </div>
        </button>
      </div>

      <div className="w-[68px] h-[68px] bg-[#7C0101] absolute -z-10 rounded-[50%] left-[46px] top-[22px]"></div>
      <div className="w-[478px] h-[478px] bg-[#7C0101] absolute -z-10 rounded-[50%] left-[160px] top-[2px]"></div>

      <div className="w-[264px]">
        <Image src="/ctaImage.png" width="264" height="264" />
      </div>
    </div>
  );
};

export default DevIdeaMachinesCard;
