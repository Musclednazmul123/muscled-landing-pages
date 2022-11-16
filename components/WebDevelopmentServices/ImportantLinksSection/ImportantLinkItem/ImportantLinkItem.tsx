import React, { FC } from "react";
import { ImportantLinkItemData } from "../../WebDevInterfaces/WebDevInterfaces";
import Link from "next/link";

const ImportantLinkItem: FC<ImportantLinkItemData> = ({
  heading,
  listItems,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col w-[400px] space-y-[21px] ${
        bgColor ? bgColor : "bg-[#C4000012]"
      } pt-3 pr-[46px] pb-[68px] pl-6 rounded-lg`}
    >
      <div>
        <p className="text-2xl leading-[39px] font-[500] text-[#141010] whitespace-pre">
          {heading}
        </p>
      </div>

      {listItems.map((item, index) => {
        return (
          <div key={index}>
            <p className="font-normal text-lg text-[#141010] leading-[29.25px]">
              <Link href="/">
                <a>{item}</a>
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ImportantLinkItem;
