import React, { FC } from "react";
import { default as TOC } from "./TableOfContent/TableOfContent";
import RelatedResources from "./RelatedResources/RelatedResources";
import AdditionalReading from "./AdditionalReading/AdditionalReading";
import PromotionCard from "./PromotionCard/PromotionCard";

const TablesOfContent: FC = () => {
  return (
    <div className="sticky top-8 flex flex-col w-[400px] space-y-[80px] self-start">
      <TOC />
      <RelatedResources />
      <AdditionalReading />
      <PromotionCard />
    </div>
  );
};

export default TablesOfContent;
