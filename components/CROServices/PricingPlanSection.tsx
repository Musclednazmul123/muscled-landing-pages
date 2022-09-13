import React from "react";
import { Hero, Section } from "../Fawwaz/Sections";
import PricingCard from "./PricingCard";
import { NextPage } from "next";

const PricingPlanSection: NextPage = () => {
  return (
    <Section>
      <h2 className="text-center py-10 text-3xl">
        Explore Social Media Advertising Service Packages
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <PricingCard
          title="AGGRESSIVE PLAN"
          duration="month"
          subtitle="Strategy & reporting included"
          description="$3,00 INITIAL INVESTMENT"
          price="$1,500"
          features={[
            "4 initial website user testing videos",
            "Heatmap and click stream testing on 8 pages",
            "Shopping cart abandonment testing",
          ]}
          starCount={1}
        />
         <PricingCard
          title="MARKET LEADER PLAN"
          duration="month"
          subtitle="Strategy & reporting included"
          description="$6,000 INITIAL INVESTMENT"
          price="$3,500"
          features={[
            "6 initial website user testing videos",
            "Heatmap and click stream testing on 16 pages",
            "Landing page creation",
          ]}
          starCount={2}
        />
         <PricingCard
          title="ENTERPRISE"
          duration="month"
          subtitle="Strategy & reporting included"
          description="$8K starts at month 1"
          price="$8,500"
          features={[
            "6 initial website user testing videos",
            "Heatmap and click stream testing on 8 pages",
            "Custom UX design and development projects",
          ]}
          starCount={3}
        />
      </div>
    </Section>
  );
};

export default PricingPlanSection;
