import React from "react";
import Button from "./Button";
import { SimpleCardProps } from "./types";

const SimpleCard = ({ itemTitle, itemPara, buttonLabel }: SimpleCardProps) => {
  return (
    <div className="w-[390px] h-[380px] bg-[#C40000] flex flex-col text-[#FFFFFF] ml-[35px] ">
      <p className="w-[310px] h-[52px] font-bold mt-[40px] mr-[40px] ml-[40px] mb-[20px] text-[20px] not-italic leading-[26px]">
        {itemTitle}
      </p>
      <p className="w-[310px] h-[104px] mr-[40px] ml-[40px] font-normal not-italic text-[20px] leading-[26px]">
        {itemPara}
      </p>
      <span className="w-[227px] h-[66px] mr-[81.5px] ml-[81.5px] mt-[58px]">
        <Button
          text={buttonLabel}
          arrow="arrowIcon"
          className="w-[227px] h-[66px] rounded-[10px] bg-[#000000] font-[600px] text-[20px] not-italic"
        />
      </span>
    </div>
  );
};

export default SimpleCard;
