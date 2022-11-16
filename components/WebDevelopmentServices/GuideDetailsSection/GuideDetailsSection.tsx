import React, { FC } from "react";
import Details from "./Details/Details";
import TablesOfContent from "./TablesOfContent/TablesOfContent";

const GuideDetailsSection: FC = () => {
  return (
    <div className="flex justify-around mt-16 space-x-8 relative">
      <Details />
      <TablesOfContent />
    </div>
  );
};

{
  /* <TableOfContent {...tableProps}/> */
}
export default GuideDetailsSection;
