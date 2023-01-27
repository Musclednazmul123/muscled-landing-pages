import React from "react";
import { Section } from "../Fawwaz/Sections";
import Icons from "../assets/landingPageSVG/Icons";

function Partners() {
  return (
    <div className="bg-white">
    <Section className="text-center pt-16 bg-inherit">
      <h3 className="text-black-50 text-2xl">Our Partners</h3>

      <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6 ">
      <Icons icon="logo1" />
					<Icons icon="logo2" />
					<Icons icon="logo3" />
					<Icons icon="logo4" />
					<Icons icon="logo5" />
					<Icons icon="logo6" />
                    

      </div>
    </Section>
    </div>
  );
}

export default Partners;
