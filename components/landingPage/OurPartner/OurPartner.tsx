import React from "react";
import Icon from "../../assets/landingPageSVG/Icons";
export default function OurPartner() {
  const logo = [
    {
      icon: "logo",
    },
    {
      icon: "logo",
    },
    {
      icon: "logo",
    },
    {
      icon: "logo",
    },
    {
      icon: "logo",
    },
    {
      icon: "logo",
    },
  ];
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold leading-loose text-black text-opacity-50">
        Our Partners
      </h2>
      <div className="mt-5">
        <div className="flex items-center flex-wrap justify-center gap-x-[70px] gap-y-4">
          {logo.map((logo, index) => {
            return <Icon customClasses="" icon={logo.icon} />;
          })}
        </div>
      </div>
    </div>
  );
}
