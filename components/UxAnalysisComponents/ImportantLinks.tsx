import React from "react";

import { Section } from "../Fawwaz/Sections";
import ImportantLinkCard from "../ImportantLinkCard";

const importantLinks = [
  {
    title: "User Experience Services",
    list: [
      { title: "Web Design Services", link: "" },
      { title: "Professional Website Redesign Services", link: "" },
    ],
  },
  {
    title: "Learn More",
    list: [
      { title: "The Definitive Website Accessibility Checklist", link: "" },
      {
        title:
          "Web Design vs. Web Development: Key Distinctions to Help Decide Which One You Need",
        link: "",
      },
    ],
  },
  {
    title: "Additional Resources",
    list: [
      {
        title: "9 Steps for Creating a Secure Website – Make Your Site Secure",
        link: "",
      },
    ],
  },
];
export default function ImportantLinks() {
  return (
    <Section className="grid gap-8 lg:grid-cols-3 mb-44">
      {importantLinks.map((l, index) => (
        <ImportantLinkCard title={l.title} list={l.list} key={index} />
      ))}
    </Section>
  );
}
