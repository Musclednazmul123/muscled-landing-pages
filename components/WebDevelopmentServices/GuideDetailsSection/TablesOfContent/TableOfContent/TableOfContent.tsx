import React, { FC } from "react";
import Table from "../../../Table";
import TableList from "../Tablelist";
import Image from "next/image";
import { tableContentProps } from "../../../../WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";

const tableIcon: JSX.Element = (
  <Image src="/tableIcon.png" width="20" height="20" />
);

const items = [
  "WebFX: Cutting-edge web development from an experienced team",
  "Web development philosophy",
  "How our web developers create",
  "Our developers are idea machines",
  "The scope of our developers’ skills",
  "Developing industry",
  "Get your ideal web development solution today",
];

const TableOfContentData: tableContentProps = {
  tableTitle: "Table of content",
  tableIcon,
  tableWidth: "w-[400px]",
  List: (
    <TableList
      list={items}
      fontSize="text-[14px]"
      className="pr-4 pl-7  py-6"
    />
  ),
};

const TableOfContent: FC = () => {
  return (
    <div>
      <Table {...TableOfContentData} />
    </div>
  );
};

export default TableOfContent;
