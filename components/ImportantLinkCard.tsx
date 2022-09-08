import React from "react";
import { FC } from "react";

import { FaListAlt } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { HiChevronDoubleRight } from "react-icons/hi";
interface TableProps {
  list: { title: string; link: string }[];
  title: string;
  bgColor?: string;
}
const ImportantLinkCard: FC<TableProps> = ({ list, title, bgColor }) => {
  return (
    <div
      className={`p-4 ${
        bgColor && bgColor.length ? `bg-${bgColor}` : `bg-[#C4000033]`
      }`}
    >
      {/* header */}
      <h4 className="text-lg font-bold">{title}</h4>
      <ul className="text-left py-2">
        {list.map((l) => {
          return (
            <li className="py-2 underline">
              <a href={l.link}>{l.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ImportantLinkCard;
