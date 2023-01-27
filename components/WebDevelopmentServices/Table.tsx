import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tableContentProps } from "./WebDevInterfaces/WebDevInterfaces";

const Table: FC<tableContentProps> = ({
  tableTitle,
  tableIcon,
  tableWidth,
  subSection,
  List,
}) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div
      className={`flex flex-col rounded-lg ${
        tableWidth || "w-[400px]"
      } border-[#BDBDBD] border-[1px]
     border-t-0`}
    >
      <div className="flex rounded-t-lg rounded-r-lg space-x-4 bg-[#BDBDBD] pt-[16px] pb-[16px] pl-[28px] ">
        <div className="self-end pt-[6px]">{tableIcon}</div>
        <div>
          <p className="text-[20px] text-#333333 font-[500]">{tableTitle}</p>
        </div>
        <div
          className={`cursor-pointer transition-transform ${
            isOpen ? "rotate-0" : "-rotate-180"
          } `}
          onClick={() => {
            setOpen((state) => !state);
          }}
        >
          <Image src="/arrowDown.png" width="12" height="6" />
        </div>
      </div>

      <div
        className={`bg-[#BDBDBD33] pt-5 pb-5 pl-3 rounded-l-lg 
rounded-b-lg ${subSection ? "block" : "hidden"}`}
      >
        <Link href={`${subSection?.link}`}>
          <a className="text-xl text-[#13C47F] font-[500] underline">
            {subSection?.title}
          </a>
        </Link>
      </div>

      <div
        className={`${
          isOpen ? "h-fit opacity-1" : "h-0 opacity-0"
        } transition-all duration-200 ease-linear`}
      >
        {List}
      </div>
    </div>
  );
};

export default Table;
