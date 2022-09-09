import React, { FC, ReactNode } from "react";

import { FaListAlt } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";

interface IProps {
  IconContent?: ReactNode;
  content: string[];
  IconTable: ReactNode;
  height?: number;
}

const TableOfContent: FC<IProps> = ({
  IconContent,
  content,
  IconTable,
  height,
}) => {
  return (
    <div
      className="order-1 col-span-1 h-fit lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[440px] border rounded-md"
    >
      {/* @ts-ignore */}
      <div className="bg-[#F2F2F2] rounded-md p-4 flex justify-between items-center">
        <h2 className="flex items-center gap-2 text-lg">
          <FaListAlt size={20} />
          Table of Contents
        </h2>
        <div className="flex w-6 h-6">{IconContent}</div>
      </div>
      <ul className="px-6">
        {content.map((item: string, idx: number) => (
          <div key={idx} className="flex items-center px-3 my-3">
            <div className="flex w-4 h-4 mr-2">{IconTable}</div> <li>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;