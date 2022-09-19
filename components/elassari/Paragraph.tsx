import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  className?: string;
  title?: string;
  children: JSX.Element[];
}

const Pargraph: NextPage<IProps> = ({ className, title = "", children }) => {
  return (
    <div
      className={`flex flex-col justify-between text-xl mx-[100px] mb-[65px] w-[760px] ${className}`}
    >
      <h3 className="text-normal">{title}</h3>
      {/* @ts-ignore */}
      {children.map((item: any, idx: number) => {
        const keys = (
          title.slice(0, 50) +
          (Math.random() + idx) * 1000
        ).toString();
        return (
          <div key={keys} onClick={() => console.log(keys)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Pargraph;
