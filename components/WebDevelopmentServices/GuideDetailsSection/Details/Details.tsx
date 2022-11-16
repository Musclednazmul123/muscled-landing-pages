import React, { FC } from "react";
import WebDevExp from "./WebDevExp/WebDevExp";
import OurWebDevPhilosphy from "./OurWebDevPhilosphy/OurWebDevPhilosphy";
import DevIdeaMachines from "./DevIdeaMachines/DevIdeaMachines";
import ScopeOfDevSkills from "./ScopeOfDevSkills/ScopeOfDevSkills";
import DevelopingIndustrySol from "./DevelopingIndustrySol/DevelopingIndustrySol";
import IdealWebDevSol from "./IdealWebDevSol/IdealWebDevSol";

const Details: FC = () => {
  return (
    <div className="flex flex-col w-[636px] space-y-[60px]">
      <WebDevExp />
      <OurWebDevPhilosphy />
      <DevIdeaMachines />
      <ScopeOfDevSkills />
      <DevelopingIndustrySol />
      <IdealWebDevSol />
    </div>
  );
};

export default Details;
