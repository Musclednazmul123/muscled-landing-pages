import React from "react";
import { Hero, Section } from "../Fawwaz/Sections";
import Card from "../Card";
import { NextPage } from "next";

const PricingPlanSection: NextPage = () => {
  return (
    <Section>
      <h2 className="text-center py-10 text-3xl">
        Explore Social Media Advertising Service Packages
      </h2>
      <div className="flex py-2 space-x-5">
        <Card
          subtitle="AGGRESSIVE PLAN"
          height={780}
          duration="month"
          highlight="Strategy & reporting included"
          description="$3,00 INITIAL INVESTMENT"
          title="$1,500"
          list={[
            { icon: true, text: "4 initial website user testing videos" },
            { icon: true, text: "Heatmap and click stream testing on 8 pages" },
            { icon: true, text: "Shopping cart abandonment testing" },
          ]}
          className="text-red-500 w-full max-w-[400px]"
          starIcon={1}
          type="pricing"
        />
        <Card
          subtitle="MARKET LEADER PLAN"
          height={780}
          duration="month"
          highlight="Strategy & reporting included"
          description="$6,000 INITIAL INVESTMENT"
          title="$3,500"
          list={[
            { icon: true, text: "6 initial website user testing videos" },
            {
              icon: true,
              text: "Heatmap and click stream testing on 16 pages",
            },
            { icon: true, text: "Landing page creation" },
          ]}
          className="text-red-400 w-full max-w-[400px]"
          starIcon={2}
          type="pricing"
        />
        <Card
          subtitle="ENTERPRISE"
          height={780}
          duration="month"
          highlight="Strategy & reporting included"
          description="$8K STARTS AT MONTH 1"
          title="$8,500"
          list={[
            { icon: true, text: "6 initial website user testing videos" },
            {
              icon: true,
              text: "Heatmap and click stream testing on 16 pages",
            },
            { icon: true, text: "Custom UX design and development projects" },
          ]}
          className="text-red-400 w-full max-w-[400px]"
          starIcon={3}
          type="pricing"
        />
      </div>
    </Section>
  );
};

export default PricingPlanSection;
