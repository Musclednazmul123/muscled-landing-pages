import React, { FC } from "react";
import { WebDevCounterProps } from "../../../../../WebDevInterfaces/WebDevInterfaces";

const WebsiteDevCounter: FC<WebDevCounterProps> = ({ num }) => {
  let output: number[] = [];
  let sNumber: string = num.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }

  return (
    <div className="flex space-x-[10px]">
      {output.map((digit, index) => {
        return (
          <div
            className="py-3 px-4 bg-white text-[#C40000] text-2xl
 leading-[100%] font-semibold rounded-lg"
            key={index}
          >
            {digit}
          </div>
        );
      })}
    </div>
  );
};

export default WebsiteDevCounter;
