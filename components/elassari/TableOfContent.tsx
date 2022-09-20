import React, { FC, ReactNode, useState } from "react";
import ListBullet from "./ListBullet";

interface IProps {
  IconContent?: ReactNode;
  content: string[];
  IconTable: ReactNode;
}

const TableOfContent: FC<IProps> = ({ IconContent, content, IconTable }) => {
  const [table, setTable] = useState(true);

  return (
    <div
      style={{ height: table ? 520 : 55 }}
      className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full overflow-hidden lg:max-w-[440px] border border-gray-400 rounded-md"
    >
      <div
        className="bg-[#F2F2F2] rounded-md p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setTable(!table)}
      >
        <h2 className="flex items-center gap-2 text-lg">
          <ListBullet className="h-8 w-8 bg-gray-300 p-[2px] rounded-md" />
          Table of Contents
        </h2>
        <div className={`flex w-6 h-6 ${!table && "rotate-180"}`}>
          {IconContent}
        </div>
      </div>
      <ul className={`px-6 `}>
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
