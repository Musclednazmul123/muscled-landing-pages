import React from "react";
import { Services } from ".";

const ServicesCard = () => {
  return (
    <div className="flex justify-between mx-24 mb-[56px]">
      <Services
        services={[
          "Website Optimization Services",
          "SEO Speed Optimization Pricing",
          "SEO Audit",
          "Convertion Rate Optimization",
        ]}
      />

      <Services
        services={[
          "Digital Marketing Services",
          "SEO Service Packages",
          "PPC",
          "Website SEO Copywriting",
          "All Internet Marketing Services",
        ]}
      />

      <Services
        services={[
          "SEO Design Services",
          "SEO Web Design Company",
          "Web Video Production",
          "",
          "",
        ]}
      />
    </div>
  );
};

export default ServicesCard;
