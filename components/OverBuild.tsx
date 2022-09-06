import React from "react";
import Button from "./Fawwaz/Button";

import { ArrowRightIcon } from "@heroicons/react/outline";

const OverBuild = () => {
  return (
    <div className="bg-[#673704] h-[396px] flex py-16 px-9 justify-between">
      <div className="flex flex-col justify-between">
        <h4 className="text-4xl text-white">
          We don’t want to tell you about the work we do, we want to SHOW you.
        </h4>
        <Button textColor="text-black" bgColor="bg-white" className="w-[70%]">
          <p>View Our Portfolio</p> <ArrowRightIcon className="h-6" />
        </Button>
      </div>

      <div className="flex flex-col justify-between ml-4 text-center">
        <h4 className="text-white">We’ve over biuld</h4>
        <div className="flex">
          {["1", "5", "0", "0"].map((item: string) => (
            <div
              key={item}
              className="bg-white w-[65px] h-[90px] flex justify-center items-center mx-1 text-5xl font-extrabold"
            >
              {item}
            </div>
          ))}
        </div>
        <h4 className="text-white">WEBSITES</h4>
        <h6 className="text-white">in a variety of industries.</h6>
      </div>
    </div>
  );
};

export default OverBuild;
