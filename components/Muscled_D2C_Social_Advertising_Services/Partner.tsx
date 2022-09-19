import React from "react";
import Logo from "../Fawwaz/Logo";

interface PropsLogos {
  blurDataURL: string;
  height: number;
  src: string;
  width: number;
}
interface PropsPartnerSection {
  noOfLogos: PropsLogos[];
}
const PartnerLogoSection = ({ noOfLogos }: PropsPartnerSection) => {
  return (
    <section className="text-center pt-16 pl-16 pr-16 pb-5 bg-white w-full flex flex-col content-evenly  ">
      <h3 className="text-black-50 text-2xl">Our Partners</h3>

      <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
        {noOfLogos.map((item: { src: string }) => (
          <Logo src={item.src} width={154} height={34} />
        ))}
      </div>
    </section>
  );
};

export default PartnerLogoSection;
