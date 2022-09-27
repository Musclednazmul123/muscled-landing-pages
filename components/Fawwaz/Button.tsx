import React, { FC } from "react";
import { InputButtonProps } from "./component.type";

const Button: FC<InputButtonProps> = ({
	bgColor,
	textColor,
	rounded,
	children,
	className,
	textSize,
	...props
}) => (
	<button
		className={`${bgColor} ${textSize?textSize:"text-[18px]"} flex items-center justify-center gap-2 ${textColor} active:scale-[95%] ${
			className ? className : ""
		} ${rounded ? "rounded-[100%] py-2 px-2" : "rounded-[5px] py-[10px] px-[20px]"}`}
		{...props}>
		{children}
	</button>
);

export default Button;
