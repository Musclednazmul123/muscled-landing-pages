import { FC } from "react";

import { IProps } from "types/types";

const CounterBox: FC<IProps> = ({ className, children }) => {
  return (
    <div
      className={`w-[66px] h-[78px]  flex flex-col  justify-center items-center  text-[40px]
        rounded-lg  ${className}`}
    style={{backgroundImage:"linear-gradient(180deg, #FFFFFF 0%, #CBDDFF 100%)"}}>
      {children}
    </div>
  );
};

export default CounterBox;
