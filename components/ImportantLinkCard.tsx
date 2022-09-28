import React from "react";
import { FC } from "react";

interface TableProps {
  list: { title: string; link: string }[];
  title: string;
  bgColor?: string;
}
const ImportantLinkCard: FC<TableProps> = ({ list, title, bgColor}) => {
  return (
    <div
      className={`p-4 flex flex-col space-y-[31px] w-[385px] min-h-[344px] pr-14   ${
        bgColor && bgColor.length ? `bg-${bgColor}` : `bg-[#C4000033]`
      }`}
    >
      {/* header */}
      <h4 className="text-2xl font-bold text-[#494949]">{title}</h4>
      <ul className="flex flex-col space-y-14">
        {list.map((l) => {
          return (
            <li className="underline text-xl leading-[31.01px]">
              <a href={l.link}>{l.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ImportantLinkCard;
