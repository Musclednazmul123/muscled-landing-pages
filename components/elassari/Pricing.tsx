import React, { ReactNode, useState } from "react";
import { NextPage } from "next";

interface IProps {
  children?: ReactNode;
  title: string;
  desc: string;
}

const Pricing: NextPage<IProps> = ({ title, desc, children }) => {
  return (
    <div className="bg-[#1F1818] pb-[150px] p-10 rounded-md text-white ">
      <h4 className="mb-4 text-white">{title}</h4>
      <p className="text-lg">{desc}</p>

      <div className="space-y-24 mt-16  w-full">
        
            {children}
        
      </div>
    </div>
  );
};

export default Pricing;
