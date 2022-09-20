import { FC } from "react";

import { IProps } from "types/types";

const CounterBox: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={`w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center bg-gradient-to-r from-[#FFFFFF] to-[#CBDDFF] text-2xl rounded-md mt-2 mb-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default CounterBox;
