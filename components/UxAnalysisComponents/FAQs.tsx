import React from "react";
import { Section } from "../Fawwaz/Sections";

import star from "components/assets/stars.png";

export default function FAQS() {
  return (
    <Section className="w-[633px] my-10 py-10">
      <div className="p-6 bg-black rounded-2xl">
        <h2 className="text-white font-bold py-3">
          For verified ratings of our marketing services, please read our:
        </h2>
        <img className="py-3" src={star.src} alt="" />
        <p className="text-[#207DE9] py-3">
          Industry-leading 1,020 testimonials
        </p>
      </div>
    </Section>
  );
}
