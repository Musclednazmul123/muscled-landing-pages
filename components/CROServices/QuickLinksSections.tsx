import React from "react";
import QuickLinks from "./QuickLinks";
import { Hero, Section } from "../Fawwaz/Sections";

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
                to: "",
              },
              {
                title: "Ecommerce SEO Management",
                to: "",
              },
              {
                title: "Enterprise SEO Services",
                to: "",
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
                to: "",
              },
              {
                title: "Programmatic Advertising",
                to: "",
              },
              {
                title: "Google Local Services Ads Management",
                to: "",
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
                to: "",
              },
              {
                title: "Website Redesign",
                to: "",
              },
              {
                title: "Landing Page Design",
                to: "",
              },
            ]}
          />
        </div>
      </Section>
    </div>
  );
};

export default QuickLinksSections;
