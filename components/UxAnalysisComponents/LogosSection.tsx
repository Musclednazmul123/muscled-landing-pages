import React from "react";

import Logo from "../Fawwaz/Logo";
import { Section } from "../Fawwaz/Sections";

// images
import Logo1 from "components/assets/logo/Logo1.png";
import Logo2 from "components/assets/logo/logo1.png";
import Logo3 from "components/assets/logo/Logo4.png";
import Logo4 from "components/assets/logo/Logo5.png";
import Logo5 from "components/assets/logo/Logo6.png";
import Logo6 from "components/assets/logo/Logo7.png";

function Partners() {
  return (
    <Section className="text-center pt-16 max-w-[1440px]">
      <h3 className="text-black-50 text-2xl">Our Partners</h3>

      <div className="pt-5 flex flex-wrap justify-between pb-12 gap-5">
        <Logo src={Logo1} width={138} height={36} />
        <Logo src={Logo2} width={184} height={34} />
        <Logo src={Logo3} width={170} height={41} />
        <Logo src={Logo4} width={154} height={34} />
        <Logo src={Logo5} width={100} height={51} />
        <Logo src={Logo6} width={154} height={34} />
      </div>
    </Section>
  );
}

export default Partners;
