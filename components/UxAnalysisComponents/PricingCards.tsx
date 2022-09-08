import React from "react";

import { Section } from "../Fawwaz/Sections";
import Card from "./Card";

import level1 from "components/assets/level1.png";
import level2 from "components/assets/level2.png";
import level3 from "components/assets/level3.png";

const list = [
  { icon: true, text: "1 initial website user testing video" },
  { icon: true, text: "Heatmap and click stream testing on 4 pages" },
  { icon: true, text: "300+ SMEs behind campaign driving results" },
  { icon: true, text: "Online project management scheduling" },
];
const list2 = [
  { icon: true, text: "2 initial website user testing videos" },
  { icon: true, text: "Heatmap and click stream testing on 8 pages" },
  { icon: true, text: "Monthly user experience reporting" },
  { icon: true, text: "300+ SMEs behind campaign driving results" },
];
const list3 = [
  { icon: true, text: "Dedicated UX project manager" },
  {
    icon: true,
    text: "Implementation of recommendations based on business seasons",
  },
  { icon: true, text: "Creation of persona maps and customer journeys" },
  { icon: true, text: "Executive report on questionnaire" },
];
export default function PricingCard() {
  return (
    <Section>
      <h2 className="text-center py-10 text-4xl">
        Explore Site Speed Optimization Service Packages
      </h2>
      <div className="flex pt-20 space-x-5">
        <div className="relative w-[100%]">
          <Card
            subtitle="Standard Plan"
            description="$1,500 INITIAL INVESTMENT"
            title="$750"
            duration="month"
            list={list}
            className="text-red-400 w-full max-w-[400px] opacity-3	"
            type="pricing"
            height={917}
            header={1}
          />
          <div className="absolute left-[130px] top-[-60px]">
            <img className="col-span-1" src={level1.src} alt="level1-icon" />
          </div>
        </div>

        <div className="relative w-[100%]">
          <Card
            subtitle="Premium Plan"
            description="$3,000 INITIAL INVESTMENT"
            duration="month"
            title="$1,500"
            list={list2}
            className="text-red-400 w-full max-w-[400px] opacity-6"
            type="pricing"
            height={917}
            header={1}
          />
          <div className="absolute left-[130px] top-[-60px]">
            <img className="col-span-1" src={level2.src} alt="level1-icon" />
          </div>
        </div>

        <div className="relative w-[100%]">
          <Card
            subtitle="STRAILBLAZER PLAN"
            description="$3,125 INITIAL INVESTMENT"
            title="$3,000"
            duration="month"
            list={list3}
            className="text-red-400 w-full max-w-[400px] opacity-9"
            type="pricing"
            height={917}
            header={1}
          />
          <div className="absolute left-[130px] top-[-60px]">
            <img className="col-span-1" src={level3.src} alt="level1-icon" />
          </div>
        </div>
      </div>
    </Section>
  );
}
