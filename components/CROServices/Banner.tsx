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
      className={`relative w-[440px] rounded-lg overflow-hidden h-[284px] ${
        className || ""
      }`}
      {...rest}
    >
      <div
        className={`px-6 pt-6 z-50 absolute left-0 top-0 bottom-0 ${
          shouldCenterTextVertically && "flex flex-col justify-center"
        }`}
      >
        <p className="w-64 font-bold text-white text-2xl">{text}</p>

        <div className="mt-8">
          <button
            className="rounded-full bg-black text-white font-semibold py-3 px-4 text-sm"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
      {bgImageSrc && (
        <div className="absolute inset-0">
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
