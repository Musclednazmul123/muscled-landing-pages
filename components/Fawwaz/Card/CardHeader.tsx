import { FC } from "react";
import { CardHeaderProps } from "../component.type";

const CardHeader: FC<CardHeaderProps> = ({
  title,
  rate,
  type,
  children,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`bg-[#c40000]/0.03 flex flex-col items-center justify-center py-10 ${
        type === "premium"
          ? "bg-red-6"
          : type === "ultimate"
          ? "bg-red-9"
          : "bg-red-3"
      }
	  `}
    >
      {children}
      <h4 className="mt-4 mb-[25.5px] font-bold text-[24px] not-italic leading-[31.2px] text-[#000000]/[0.8] uppercase">
        {title}
      </h4>
      <h1 className="mb-2 text-center">
        <span className="text-[#C40000] text-[40px] font-bold">${rate}</span>
        {description ? (
          <div className="text-[20px] font-normal pt-[25.5px] w-[320px] leading-[26px] text-center text-[#000000]/[0.7]">
            {description}
          </div>
        ) : (
          <span className="block text-black text-opacity-50">per month</span>
        )}
      </h1>
    </div>
  );
};

export default CardHeader;
