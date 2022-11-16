import React, { FC } from "react";
import {
  RectangleLeft,
  RectangleRight,
  Ellipse,
  Muscled,
  CheckIcon,
} from "./CardShapes";
import { IconItem } from "@/components/Fawwaz/Card";

const GuideDetailsCard: FC = () => {
  return (
    <div className="w-full bg-[#2E112B] min-h-[359px] relative mt-5 mb-10">
      <div className="absolute top-0 left-0 ">
        <RectangleLeft />
      </div>
      <div className="absolute top-[19px] left-[439px] ">
        <Ellipse />
      </div>
      <div className="absolute  top-[153.78px] left-[550px] ">
        <RectangleRight />
      </div>

      <div className="relative flex  items-center h-full gap-x-[120px]">
        <div className="flex flex-col max-w-[312px] gap-y-[10px] pl-4">
          <h1 className="text-[36px] text-white font-normal">Why work With</h1>
          <Muscled />
        </div>
        <div className="flex flex-col gap-y-[29px] w-fit">
          <IconItem
            icon={<CheckIcon />}
            title="Custom design"
            className="w-full items-center text-white gap-[25px] text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="Adittional functionality"
            className="w-full items-center text-white gap-[25px] text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="Advanced optimization"
            className="w-full items-center text-white gap-[25px] text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GuideDetailsCard;
