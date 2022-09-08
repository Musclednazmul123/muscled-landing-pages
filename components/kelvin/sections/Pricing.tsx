import React from "react";
import Card from "components/kelvin/Card";
import Star from "components/assets/svg/Star";

import { Section } from "../../Fawwaz/Sections";

const Pricing = () => {
  const list1 = [
    { icon: true, text: "Up to 4 unique ads" },
    { icon: true, text: "Up to 2 advertising campaigns" },
    { icon: true, text: "Up to 4 monthly advertising copy tweaks" },
  ];
  const list2 = [
    { icon: true, text: "Up to 6 unique ads" },
    { icon: true, text: "Up to 3 advertising campaigns" },
    { icon: true, text: "Up to 6 monthly advertising copy tweaks" },
  ];
  const list3 = [
    { icon: true, text: "Up to 8 unique ads" },
    { icon: true, text: "Up to 4 advertising campaigns" },
    { icon: true, text: "Up to 8 monthly advertising copy tweaks" },
  ];

  return (
    <Section>
      <h2 className="text-center py-10 text-3xl">
        Explore Social Media Advertising Service Packages
      </h2>
      <div className="flex py-2 space-x-5">
        <Card
          subtitle="1 SOCIAL NETWORK"
          duration="month"
          highlight="Standard consultation & reporting plan"
          description="$950 INITIAL INVESTMENT"
          title="15% of ad spend"
          list={list1}
          starIcons={<Star opacity={1} className="fill-black/50" />}
          headerBgColor="bg-[#C40000]/[3%]"
        />
        <Card
          subtitle="2 SOCIAL NETWORKS"
          duration="month"
          highlight="Standard consultation & reporting plan"
          description="$1,350 INITIAL INVESTMENT"
          title="15% of ad spend"
          list={list2}
          starIcons={
            <>
              <Star opacity={1} className="fill-black-70" />
              <Star opacity={1} className="fill-black-70" />
            </>
          }
          headerBgColor="bg-[#C40000]/[6%]"
        />
        <Card
          subtitle="3 SOCIAL NETWORKS"
          duration="month"
          highlight="Standard consultation & reporting plan"
          description="$1,650 INITIAL INVESTMENT"
          title="15% of ad spend"
          list={list3}
          starIcons={
            <>
              <Star opacity={1} className="fill-black-80" />
              <Star opacity={1} className="fill-black-80" />
              <Star opacity={1} className="fill-black-80" />
            </>
          }
          headerBgColor="bg-[#C40000]/[9%]"
        />
      </div>
    </Section>
  );
};

export default Pricing;
