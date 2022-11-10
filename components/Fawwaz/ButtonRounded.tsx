import React, { FC } from "react";
import { RoundedBtnProps } from "./component.type";

const ButtonRounded: FC<RoundedBtnProps> = ({
  bgColor,
  textColor,
  textSize,
  children,
  roundedFull,
  textWeight,
  className,
  padding,
  ...props
}) => (
  <button
    className={`${bgColor} lg:${
      textSize ? textSize : "text-sm"
    }  ${textWeight} ${className} flex items-center justify-center gap-2 ${textColor} active:scale-[95%] ${
      roundedFull
        ? `rounded-full ${padding?padding:"py-1 px-2"}`
        : `rounded-[5px] ${padding?padding:"py-[10px] px-[20px]"}`
    }`}
    {...props}
  >
    {children}
  </button>
);

export default ButtonRounded;
