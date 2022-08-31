import React from "react";
import Button from "../Button";
import { SimpleCardProps } from "./types";

const SimpleCard = ({ itemTitle, itemPara, buttonLabel }: SimpleCardProps) => {
  return (
    <div className="w-[390px] h-[380px] bg-[#C40000] flex flex-col text-[#FFFFFF] ml-[35px] ">
      <p className="w-[310px] h-[52px] font-semibold mt-[40px] mr-[40px] ml-[40px] mb-[20px]">
        {itemTitle}
      </p>
      <p className="w-[310px] h-[104px] mr-[40px] ml-[40px] ">{itemPara}</p>
      <span className="w-[227px] h-[66px] mr-[81.5px] ml-[81.5px] mt-[58px]">
        <Button text={buttonLabel} arrow="small" />
      </span>
    </div>
  );
};

export default SimpleCard;
