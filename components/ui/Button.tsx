import { Children, ReactNode } from "react";

interface ButtonProp {
  outlined?: boolean;
  sizeClass?: String;
  textColor?: String;
  bgColorClass?: string;
  borderColorClass?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  outlined = false,
  sizeClass = "p-3",
  textColor = "text-black",
  bgColorClass: bgColor,
  borderColorClass = "border-black",
  onClick = () => {},
  children,
}: ButtonProp) => {
  let buttonClass = outlined
    ? `${bgColor ? bgColor : "bg-tranparent"}  ${textColor}`
    : `${bgColor ? bgColor : "bg-black"} text-white`;
  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${sizeClass} border-[3px] ${borderColorClass} rounded font-bold outline-none`}
    >
      {children}
    </button>
  );
};

export default Button;
