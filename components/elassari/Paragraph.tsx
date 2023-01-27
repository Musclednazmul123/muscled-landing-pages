import { NextPage } from "next";
import React from "react";

interface IProps {
  className?: string;
  title?: string;
  children: JSX.Element[];
}

const Pargraph: NextPage<IProps> = ({ className, title = "", children }) => {
  return (
    <div
      className={`flex items-start flex-col justify-between text-xl mb-[65px] w-[760px] ${className}`}
    >
      <h3 className="text-[40px] leading-[52px]">{title}</h3>
      {children.map((item: any, idx: number) => {
        const keys = (
          title.slice(0, 50) +
          (Math.random() + idx) * 1000
        ).toString();
        return (
          <div className="text-xl leading-[30px]" key={keys} onClick={() => console.log(keys)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Pargraph;
