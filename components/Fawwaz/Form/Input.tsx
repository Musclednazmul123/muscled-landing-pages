import { FC } from "react";
import { InputProps } from "../component.type";

const Input: FC<InputProps> = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      className={` px-4 rounded-md outline-none ${className ? className : ""}`}
      {...props}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
