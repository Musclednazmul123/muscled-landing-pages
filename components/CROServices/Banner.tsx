import React, { HTMLAttributes } from "react";
import IMac24Inch from "../assets/svg/iMac24Inch";
import bgImage from "../assets/card_bg_1.png";

export type BannerProps = {
  imageSrc?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  text?: string;
} & HTMLAttributes<HTMLDivElement>;

const Banner = (props: BannerProps) => {
  const {
    className,
    text,
    buttonText,
    imageSrc,
    onButtonClick = () => {},
    ...rest
  } = props;
  
  return (
    <div
      className={`relative w-[440px] rounded-lg overflow-hidden h-[284px] ${
        className || ""
      }`}
      {...rest}
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(0deg, rgba(30, 5, 38, 0.15), rgba(30, 5, 38, 0.15)), url(${bgImage.src})`,
      }}
    >
      <div className="absolute right-0 -translate-y-1/2 top-1/2">
        <IMac24Inch />
      </div>
      <div className="px-6 pt-6 ">
        <p className="w-64 font-bold text-white text-2xl">{text}</p>

        <div className="mt-8">
          <button
            className="rounded-full bg-black text-white font-semibold py-3 px-4"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
