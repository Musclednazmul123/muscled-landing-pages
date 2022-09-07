import React from "react";
import { SVGProps } from "../../types/types";
import { Logo1, Logo2, Logo4, Logo5, Logo6, Logo7 } from ".";

const OurPartners = () => {
  return (
    <div className="w-full px-25 flex flex-col justify-between py-[calc(100px/2)] text-center bg-[#fff] h-[220px]">
      <h3 className="text-2xl text-black-50">Our Partners</h3>

      <div className="flex flex-wrap justify-between">
        {[Logo1, Logo2, Logo4, Logo5, Logo6, Logo7].map(
          (Logo: React.FC<SVGProps>, idx: number) => (
            <Logo key={idx} />
          )
        )}
      </div>
    </div>
  );
};

export default OurPartners;
