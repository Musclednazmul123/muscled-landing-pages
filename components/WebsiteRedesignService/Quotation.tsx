import React, { ReactNode } from "react";
import { NextPage } from "next";
import Button from "components/Fawwaz/Button";

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
      <div className="flex  mt-16 justify-end">
        <Button
          textColor="text-white"
          bgColor="bg-black"
          className=" text-xl w-full lg:w-3/5 font-[500] h-[60px]"
        >
          See Pricing
        </Button>
      </div>
    </div>
  );
};

export default Quotation;