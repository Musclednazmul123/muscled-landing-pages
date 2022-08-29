import React from "react";

export default function Testimonial() {
  return (
    <div className=" py-20 bg-black">
      <div className="px-5 md:px-10 lg:px-20 mx-auto container">
        <div className="lg:flex items-center justify-between lg:gap-x-[60px]">
          <div className="lg:max-w-[556px]">
            <p className="md:text-2xl text-xl leading-[36px] text-gray-50">
              "I positively recommend Muscled for ecommerce management and
              content creation." Muscled team is extremely professional and
              detailed in their work."
            </p>
            <p className="md:text-xl text-lg font-bold leading-[130%] text-gray-50 mt-[30px]">
              Associate in Category Development
            </p>
            <button className="md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold leading-[130%] text-white px-10 py-4 bg-red-700  rounded">
              See Our Clients’ Testimonials
            </button>
          </div>
          <div className="bg-gray-300 rounded-lg lg:mt-0 mt-12 lg:w-[590px] md:h-[400px] h-[250px] flex items-center justify-center">
            <div className="w-16 h-16 cursor-pointer flex items-center justify-center bg-black text-white  bg-opacity-50 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
