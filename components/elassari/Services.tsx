import { NextPage } from "next";
import React from "react";

interface IProps {
  services: string[];
  bgColor?: string;
}

const CardServices: NextPage<IProps> = ({ services, bgColor }) => {
  return (
    <div
      style={{ background: bgColor || "#FFFFFF" }}
      className="flex flex-col w-[390px] mx-[20px] h-[360px] my-3 justify-between p-[30px] rounded-md"
    >
      {services.map((item: string, idx: number) => {
        return idx == 0 ? (
          <h4 key={idx}>{item}</h4>
        ) : (
          <p className="text-xl" key={idx}>
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default CardServices;
