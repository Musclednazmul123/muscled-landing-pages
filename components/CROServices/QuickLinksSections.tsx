import React from "react";
import QuickLinks from "./QuickLinks";
import { Section } from "../Fawwaz/Sections";

const QuickLinksSections = () => {
  return (
    <div className="bg-[#F0F5F9]">
      <Section className="py-[104px] grid grid-cols-3 gap-7">
        <div>
          <QuickLinks
            title="SEO"
            links={[
              {
                title: "SEO Campaign Management",
                to: "/cro-services#",
              },
              {
                title: "Ecommerce SEO Management",
                to: "/cro-services#",
              },
              {
                title: "Enterprise SEO Services",
                to: "/cro-services#",
              },
            ]}
          />
        </div>
        <div>
          <QuickLinks
            title="PPC"
            links={[
              {
                title: "PPC Management",
                to: "/cro-services#",
              },
              {
                title: "Programmatic Advertising",
                to: "/cro-services#",
              },
              {
                title: "Google Local Services Ads Management",
                to: "/cro-services#",
              },
            ]}
          />
        </div>
        <div>
          <QuickLinks
            title="Web Design"
            links={[
              {
                title: "Web Design",
                to: "/cro-services#",
              },
              {
                title: "Website Redesign",
                to: "/cro-services#",
              },
              {
                title: "Landing Page Design",
                to: "/cro-services#",
              },
            ]}
          />
        </div>
      </Section>
    </div>
  );
};

export default QuickLinksSections;
