import { HeroCardProps } from "../types/types";
import React, { FC } from "react";
import Image from "next/image";

const HeroCard: FC<HeroCardProps> = ({ img, title, number, subtitle }) => {
  return (
    <div className="rounded-sm flex bg-black py-2 px-5 my-3">
      <div className="relative h-20 w-20 mr-1">
        <Image src={img} layout="fill" className="object-contain" />
      </div>
      <div className="flex flex-col items-start  text-white">
        <p className="text-base">{title}</p>
        <h1 className="text-3xl">{number}</h1>
        <p className="text-base">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroCard;
