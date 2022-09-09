import React, { ReactNode } from "react";
import { NextPage } from "next";

interface IProps {
  children?: ReactNode;
  title: string;
  desc: string;
}

const Quotation: NextPage<IProps> = ({ title, desc, children }) => {
  return (
    <div className="bg-[#574a5b] text-white p-16">
      <h4 className="mb-4 text-white">{title}</h4>
      <p className="text-lg">{desc}</p>

      <div className="flex flex-col justify-between mt-16 h-[1045px]">
        {children}
      </div>
    </div>
  );
};

export default Quotation;