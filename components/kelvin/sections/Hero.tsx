import React from "react";
import SocialMediaAdSVG from "../../assets/svg/SocialMediaAdSVG";

import { Hero } from "../../Fawwaz/Sections";

const Hero_ = () => {
  return (
    <div className=" bg-black-70 px-3 lg:px-0">
      <Hero
        title="Services for Paid Social Media Advertising That Deliver Results"
        description=" Muscled is a leading social media marketing company that specializes in driving significant business development through social media services. Whether you want to improve your brand's presence on social media or generate targeted leads through social media advertising, our social media advertising services can help."
        heroSVG={<SocialMediaAdSVG className="w-80 lg:w-full" />}
        input
      />
    </div>
  );
};

export default Hero_;
