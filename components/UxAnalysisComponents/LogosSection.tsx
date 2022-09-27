import React from "react";
import Partner from "../Fawwaz/PartnerLogo/Partner";
import Logo from "../Fawwaz/Logo";
import { Section } from "../Fawwaz/Sections";
import Icons from "../assets/landingPageSVG/Icons";
// images
import PartnerOne from '@/components/assets/svg/partner/PartnerOne';
import PartnerTwo from '@/components/assets/svg/partner/PartnerTwo';
import PartnerThree from '@/components/assets/svg/partner/PartnerThree';
import PartnerFour from '@/components/assets/svg/partner/PartnerFour';
import PartnerFive from '@/components/assets/svg/partner/PartnerFive';
import PartnerSix from '@/components/assets/svg/partner/PartnerSix';
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
