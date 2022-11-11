import React from "react";
import banner7 from "../assets/banner_7.png";
import comp1 from "../../components/assets/comp_1.png";
import Typography from "./Typography";

export type BigBannerProps = {
  title?: string;
  subtitle?: string;
};

const Check = () => (
  <svg
    width="24"
    height="23"
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M21.2752 0.90561C18.1114 3.64386 15.4346 6.25049 12.984 9.65136C11.9032 11.1514 10.7014 12.9169 9.91573 14.5837C9.46723 15.4676 8.65873 16.8487 8.3831 18.1766C6.8756 16.7741 5.25635 15.1822 3.5996 13.9354C2.41873 13.047 -0.982523 14.8582 0.401977 15.9C2.88335 17.7664 4.94698 20.091 7.36048 22.0406C8.36998 22.8551 10.6072 21.0862 11.133 20.3441C12.8587 17.8991 13.0946 14.9104 14.3524 12.2434C16.2727 8.16448 19.6785 4.81386 23.0411 1.90424C25.269 -0.17364 22.968 -0.55689 21.2786 0.90561"
      fill="#37B34A"
    />
  </svg>
);

const BigBanner = (props: BigBannerProps) => {
  return (
    <div className="h-[794px] relative rounded-[10px] overflow-hidden">
      <img src={comp1.src} className="w-[230px] absolute right-0 bottom-56 z-10 mr-12" />
      <div className="absolute inset-0 z-10 px-10 py-[60px] w-[400px] flex flex-col">
        <Typography.Heading className="text-white mb-10">
          {props.title}
        </Typography.Heading>
        <Typography.Body className="text-white">
          {props.subtitle}
        </Typography.Body>

        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="flex">
            <Check />
            <Typography.Body className="ml-3 text-white">Leads</Typography.Body>
          </div>
          <div className="flex">
            <Check />
            <Typography.Body className="ml-3 text-white">
              Transactions
            </Typography.Body>
          </div>
          <div className="flex">
            <Check />
            <Typography.Body className="ml-3 text-white">Calls</Typography.Body>
          </div>
          <div className="flex">
            <Check />
            <Typography.Body className="ml-3 text-white">
              Revenue
            </Typography.Body>
          </div>
        </div>
        <div className="mt-auto">
          <button className="items-center bg-black rounded-[5px] overflow-hidden leading-[30px] text-[20px] font-semibold flex text-white px-10 py-[15px]">
            Learn More
            <svg
              className="ml-[10px]"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-4.9682e-06 13.7143L5.71428 8L-5.96731e-06 2.28571L1.14285 6.99382e-07L9.14285 8L1.14285 16L-4.9682e-06 13.7143Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#2E1E34E5]"></div>
        <img src={`${(banner7.src)}`} className="h-full bg-cover" />
      </div>
    </div>
  );
};

export default BigBanner;
