import { ReactNode } from "react";

interface FrostCardProp {
  children: ReactNode;
}

const FrostCard = ({ children }: FrostCardProp) => {
  return (
    <div className="rounded-lg bg-white/30 backdrop-blur-md px-4 pb-7 pt-8 self-stretch w-full">
      {children}
    </div>
  );
};

export default FrostCard;
