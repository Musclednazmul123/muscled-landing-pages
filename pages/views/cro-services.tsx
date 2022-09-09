import React from "react";
import { NextPage } from "next";

import HeroSection from "components/CROServices/HeroSection";
import SalesFunnelIcon from "components/assets/svg/SalesFunnelIcon";
import GroupPeopleIcon from "components/assets/svg/GroupPeopleIcon";
import TrophyIcon from "components/assets/svg/TrophyIcon";
import CloudComputingIcon from "components/assets/svg/CloudComputingIcon";

const CROServicesPage: NextPage = () => {
  return (
    <div>
      <div className="bg-black-70">
        <HeroSection
          features={[
            {
              title: "Access the data-fueled plans behind",
              renderIcon: () => <SalesFunnelIcon />,
              numbers: "$3,021,182,299",
              description: "IN CLIENT REVENUE",
            },
            {
              title: "Use the expert-led tactics behind",
              renderIcon: () => <GroupPeopleIcon />,
              numbers: "7,839,684",
              description: "IN LEADS FOR OUR CLIENTS",
            },
            {
              title: "Unlock do-it-for-me marketing with",
              renderIcon: () => <TrophyIcon />,
              numbers: "450",
              description: "DIGITAL MARKETING EXPERTS",
            },
            {
              title: "Accelerate ROI with",
              renderIcon: () => <CloudComputingIcon />,
              numbers: "1+ BILLION",
              description: "DATA POINTS FROM MARKETINGCLOUDFX",
            },
          ]}
          title="Revenue-Generating Conversion Rate Optimization Services"
          description="All the traffic in the world is meaningless unless it converts into paying customers, sales, or clients. Optimizing your conversion rate is an important aspect of digital marketing that we at Muscled know very well. Our CRO pricing is completely transparent — you always know where your money is going and how it is helping your site generate revenue for you."
        />
      </div>
    </div>
  );
};

export default CROServicesPage;
