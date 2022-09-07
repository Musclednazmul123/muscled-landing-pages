import React, { ReactNode, useState } from "react";
import { NextPage } from "next";

interface IProps {
  children?: ReactNode;
  title: string;
  desc: string;
}

const Pricing: NextPage<IProps> = ({ title, desc, children }) => {
  return (
    <div className="bg-black h-[1395px] rounded-md text-white p-10">
      <h4 className="mb-4 text-white">{title}</h4>
      <p className="text-lg">{desc}</p>

      <div className="flex flex-col justify-between mt-16 h-[1045px]">
        {children}
      </div>
    </div>
  );
};

export default Pricing;
