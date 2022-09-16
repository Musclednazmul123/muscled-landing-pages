import React, { HTMLAttributes } from "react";

export type BannerProps = {
  imageSrc?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  bgImageSrc?: string;
  shouldCenterTextVertically?: boolean;
  renderRightImage?: () => React.ReactNode;
  text?: string;
} & HTMLAttributes<HTMLDivElement>;

const Banner = (props: BannerProps) => {
  const {
    className,
    text,
    buttonText,
    imageSrc,
    bgImageSrc,
    onButtonClick = () => {},
    renderRightImage,
    shouldCenterTextVertically,
    ...rest
  } = props;

  return (
    <div
      className={`relative w-[440px] rounded-[5px] overflow-hidden h-[250px] ${
        className || ""
      }`}
      {...rest}
    >
      <div
        className={`p-5 z-10 absolute left-0 top-0 bottom-0 ${
          shouldCenterTextVertically && "flex flex-col justify-center"
        }`}
      >
        <div className="flex flex-col h-full">
          <p className="w-[260px] font-bold text-white text-[20px] flex-1 leading-[30px]">
            {text}
          </p>

          <div>
            <button
              className="rounded-[5px] text-[20px] bg-black text-white font-semibold py-[15px] px-5 "
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      {bgImageSrc && (
        <div className="absolute inset-0">
          <div className="inset-0 bg-[rgba(0,0,0,0.2)] absolute"></div>
          <img src={bgImageSrc} className="w-full bg-cover" />
        </div>
      )}
      <div className="absolute right-0 -translate-y-1/2 top-1/2">
        {renderRightImage?.()}
      </div>
    </div>
  );
};

export default Banner;
