import React, { FC, HTMLProps } from "react";

export type HeroInputProps = {} & HTMLProps<HTMLInputElement>;

const HeroInput: FC<HeroInputProps> = (props) => {

const {className, ...rest} = props

  return (
    <input
      className={`border border-[#828282] px-4 py-3 rounded-md outline-none ${className}`}
      {...rest}
    />
  );
};

export default HeroInput;
