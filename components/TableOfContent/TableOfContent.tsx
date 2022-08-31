import React from "react";
import { FC } from "react";

import { FaListAlt } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { HiChevronDoubleRight } from "react-icons/hi";
interface TableProps {
  list: string[];
}
const TableOfContent: FC<TableProps> = ({ list }) => {
  return (
    <>
      {/* header */}
      <div className="border-2 border-solid border-slat-500 rounded-2xl	 w-[440px]">
        <div className="bg-[#F2F2F2] text-white py-2 px-8 flex justify-between items-center">
          <h2 className="flex items-center text-lg gap-2">
            <FaListAlt size={20} />
            Table of Contents
          </h2>
        </div>

        <ul className="bg-white text-left px-8 py-2 rounded-b-2xl	">
          {list.map((e) => {
            return (
              <li className="flex items-center text-gray-800 font-light py-2">
                <HiChevronDoubleRight />
                <span className="px-2">{String(e)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default TableOfContent;
