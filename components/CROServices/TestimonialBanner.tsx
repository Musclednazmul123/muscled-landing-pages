import Link from "next/link";
import React, { HTMLAttributes } from "react";

export type TestimonialBannerProps = {
  title?: string;
  starCount?: number;
  linkTitle?: string;
  linkHref?: string;
  rating?: number;
  totalRating?: number;
} & HTMLAttributes<HTMLDivElement>;

const TestimonialBanner = (props: TestimonialBannerProps) => {
  const { title, starCount, linkHref, linkTitle, rating, totalRating } = props;

  return (
    <div className="bg-[#2E1E34] py-16 px-12">
      <p className="text-4xl text-white font-medium w-[372px]">{title}</p>
      <div className="flex mt-9">
        {Array.from({ length: starCount || 0 }).map((data, index) => {
          return (
            <div className="mr-2" key={index}>
              <svg
                width="29"
                height="27"
                viewBox="0 0 29 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 0L17.7555 10.0193L28.2903 10.0193L19.7674 16.2115L23.0229 26.2307L14.5 20.0385L5.97711 26.2307L9.23257 16.2115L0.709681 10.0193L11.2445 10.0193L14.5 0Z"
                  fill="#FF7262"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="mt-9">
        <Link href={linkHref || "/"}>
          <a>
            <div className="text-[#48BBFC] flex items-center">
              {linkTitle}
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-7"
              >
                <path d="M1 1L8 8L1 15" stroke="#48BBFC" strokeWidth="2" />
              </svg>
            </div>
          </a>
        </Link>
      </div>
      <div className="text-white mt-2">
        MUSKLed Agency rating: 4.9 out of 5 with 267 rating
      </div>
    </div>
  );
};

export default TestimonialBanner;
