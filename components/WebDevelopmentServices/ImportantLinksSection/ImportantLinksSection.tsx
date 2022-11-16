import React, { FC } from "react";
import ImportantLinkItem from "./ImportantLinkItem/ImportantLinkItem";
import { ImportantLinkItemData } from "../WebDevInterfaces/WebDevInterfaces";

let ImportantLinksData: ImportantLinkItemData[] = [
  {
    heading: "Web Design Services",
    listItems: [
      "Web Design",
      "Website Redesign",
      "Landing Page Design",
      "Rapid Web Design",
      "Enterprise Web Development Services",
      "Web Development Consulting Services",
    ],
  },
  {
    heading: "Digital Marketing\nSite Services",
    listItems: [
      "SEO",
      "Website Copywriting",
      "PPC Management",
      "Content Marketing",
      "All Internet Marketing Services",
    ],
  },
  {
    heading: "Learn More",
    listItems: [
      "Web Design Cost Calculator",
      "Why Is Web Design Important?",
      "How Much Should a Website Cost?",
      "Why Does Responsive Design Matter?",
    ],
  },
];

const ImportantLinksSection: FC = () => {
  return (
    <div className="flex space-x-6 pl-[70px] mt-[120px]">
      {ImportantLinksData.map((itemData, index) => {
        return <ImportantLinkItem {...itemData} key={index} />;
      })}
    </div>
  );
};

export default ImportantLinksSection;
