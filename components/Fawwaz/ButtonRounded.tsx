import React, { FC } from "react";
import { RoundedBtnProps } from "./component.type";

const ButtonRounded: FC<RoundedBtnProps> = ({
	bgColor,
	textColor,
    textSize,
	children,
    roundedFull,
	...props
}) => (
	<button
		className={`${bgColor} lg:${textSize} text-sm flex items-center justify-center gap-2 ${textColor} active:scale-[95%] ${roundedFull ? "rounded-full py-1 px-2" : "rounded-[5px] py-[10px] px-[20px]"}`}
		{...props}>
		{children}
	</button>
);

export default ButtonRounded;