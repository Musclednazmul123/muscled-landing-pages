import React, { FC } from "react";
import GuideDetailsSection from "./GuideDetailsSection";
import TableOfContentsSection from "./TableOfContentsSection";

const GuideDetailsAndTOC: FC = () => {
  return (
    <div className="flex mt-11 justify-center gap-x-10">
      <GuideDetailsSection />
      <TableOfContentsSection />
    </div>
  );
};

export default GuideDetailsAndTOC;
