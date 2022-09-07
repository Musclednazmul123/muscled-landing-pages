import React from "react";
import SimpleCard from "./SimpleCard";
import { AdditionalSocailMediaProps } from "./types";

const AdditionalSocailMedia = ({
  AdditionalSocailMediaMetaData,
}: AdditionalSocailMediaProps) => {
  return (
    <div className="w-50 bg-[#C40000]/[.06] h-[754px] mt-[120px] flex flex-col items-center justify-center">
      <p className="mt-[80px] ml-[220px] mr-[220px] mb-[40px] font-semibold text-[40px] text-center text-[#000000]/[0.8]">
        {AdditionalSocailMediaMetaData?.heading}
      </p>
      <p className="text-[20px] mb-[40px]">
        {AdditionalSocailMediaMetaData?.para}
      </p>
      <div className="flex flex-row ">
        {AdditionalSocailMediaMetaData.items.map((item: any) => (
          <SimpleCard
            itemTitle={item.itemTitle}
            itemPara={item.itemPara}
            buttonLabel={item.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default AdditionalSocailMedia;
