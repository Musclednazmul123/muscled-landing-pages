import React from "react";
import { HeroCardProps } from "../../types/types";
// components
import HeroCard from "../HeroCard";
import Hero from "./Hero";
// images
import sales from "/components/assets/icon-sales.png";
import group from "/components/assets/icon-group-people1 1.png";
import cloud from "/components/assets/icon-cloud-computing 1.png";
import tropy from "/components/assets/icon-trophy-big 1.png";
const HeroCards: HeroCardProps[] = [
  {
    img: sales,
    number: "$3,021,182,299",
    subtitle: "IN CLIENT REVENUE",
    title: "Access the data-fueled plans behind",
  },
  {
    img: group,
    number: "7,839,684",
    subtitle: "IN LEADS FOR OUR CLIENTS",
    title: "Use the expert-led tactics behind",
  },
  {
    img: cloud,
    number: "450",
    subtitle: "DIGITAL MARKETING EXPERTS",
    title: "Unlock do-it-for-me marketing with",
  },
  {
    img: tropy,
    number: "1+ BILLION",
    subtitle: "DATA POINTS FROM MARKETINGCLOUDFX",
    title: "Accelerate ROI with",
  },
];

function UxAnalysisHero() {
  return (
    <section className="min-h-[890px] bg-black-70 px-3 lg:px-0">
      <Hero
        title="Website User Experience Analysis Services for SMBs"
        description="Website User Experience Analysis Services for SMBs
        Are you looking for ways to increase your revenue? The great user experience (UX) of a website is the key to the increase in client satisfaction, sales, and revenue. Muscled can enable that with a tailored, in-depth UX analysis report. By putting a website analysis into practice, you not only enhance the website-visitor experience but also develop brand loyalty and collaborate with a talented group of web designers.
        "
        input
      >
        {HeroCards.map((card) => {
          return (
            <HeroCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              number={card.number}
              img={card.img}
            />
          );
        })}
      </Hero>
    </section>
  );
}
export default UxAnalysisHero;
