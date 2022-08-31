import React from "react";
import { FC } from "react";

interface TableRowProps {
  content: string;
}
const TabelRow: FC<TableRowProps> = (content) => {
  return (
    <>
      <div className={`flex gap-2 items-center `}>
        <div></div>
        <p className="">{content}</p>
      </div>
    </>
  );
};
