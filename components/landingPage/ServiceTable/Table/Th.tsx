import React, { FC } from "react";
export interface TableHeadChildProps {
  content: string | JSX.Element;
  className?: string;
}
const Th: FC<TableHeadChildProps> = ({ content, className }) => {
  return (
    <th
      className={`bg-[#323232] py-4 px-2 lg:py-7 lg:px-5 border-b border-black border-opacity-10 ${
        className ? className : ""
      }`}
    >
      {content}
    </th>
  );
};

export default Th;
