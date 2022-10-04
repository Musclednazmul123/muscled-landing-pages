import React,{FC, ReactNode } from "react";

interface FrostCardProp {
  children: ReactNode;
  width?:string;
}

const FrostCard:FC<FrostCardProp> = ({ children,width="w-full" }) => {
  return (
    <div className={`rounded-lg bg-white/30 backdrop-blur-md 
    px-4 pb-7 pt-8 self-stretch  ${width}`}>
      {children}
    </div>
  );
};

export default FrostCard;
