import { ReactNode } from "react";

interface BlockQuoteProp {
  children: ReactNode;
}

const BlockQuote = ({ children }: BlockQuoteProp) => {
  return (
    <div className="px-10 py-8 ml-16 my-8 border-l-2 h-fit border-l-[#4E01A9] bg-[#F8F2FF] w-[60%] text-[20px]">
      {children}
    </div>
  );
};

export default BlockQuote;
