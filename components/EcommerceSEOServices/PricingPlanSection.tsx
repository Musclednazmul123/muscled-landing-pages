import React from "react";
import { Hero, Section } from "../Fawwaz/Sections";
import PricingCard from "./PricingCard";
import Link from "next/link";

const PricingPlanSection = () => {
  return (
    <Section className="pt-[153px] pb-[186px]">
      <h2 className="text-center py-10 text-3xl ">
        Explore Ecommerce SEO Service Packages
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <PricingCard
          title="STANDARD PLAN"
          duration="month"
          subtitle="per month"
          headerClassName="bg-[#C4000008]"
          starClassName="fill-[#00000080]"
          price="$2,500"
          features={[
            "150 keyphrases optimized",
            "30 pages optimized",
            "6 content, outreach, UX or CRO assets per quarter",
            "8 custom dashboards",
            "Phone call, lead and revenue tracking dashboard",
          ]}
          starCount={1}
        />
        <PricingCard
          title="PREMIUM PLAN"
          duration="month"
          subtitle="per month"
          headerClassName="bg-[#C400000F]"
          starClassName="fill-[#000000B2]"
          price="$5,000"
          features={[
            "150 keyphrases optimized",
            "30 pages optimized",
            "6 content, outreach, UX or CRO assets per quarter",
            "8 custom dashboards",
            "Phone call, lead and revenue tracking dashboard",
          ]}
          starCount={2}
        />
        <PricingCard
          title="ULTIMATE PLAN"
          duration="month"
          subtitle="per month"
          headerClassName="bg-[#C4000017]"
          starClassName="fill-[#000000CC]"
          price="$8,000"
          features={[
            "150 keyphrases optimized",
            "30 pages optimized",
            "6 content, outreach, UX or CRO assets per quarter",
            "8 custom dashboards",
            "Phone call, lead and revenue tracking dashboard",
          ]}
          starCount={3}
        />
      </div>
      <div className="mt-[60px]">
        <Link href="/ecommerce-seo-services#">
          <a className="text-[#5F27BD] flex justify-center items-center underline">
            See Full Deliverables
          </a>
        </Link>
      </div>
    </Section>
  );
};

export default PricingPlanSection;
