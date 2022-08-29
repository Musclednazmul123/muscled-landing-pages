import React from "react";
import Icon from "../../assets/landingPageSVG/Icons";
export default function Pricing() {
  return (
    <div className="py-16 bg-[#F9F9F9] mt-[50px] mx-auto conatiner lg:px-0 md:px-12 px-4">
      <h2 className="md:text-4xl text-2xl font-bold leading-[130%] text-center">
        Ecommerce PPC Management Services
      </h2>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-[60px] gap-5">
        <div className="bg-white border rounded-lg border-black border-opacity-70">
          <div className="inline-flex flex-col space-y-10 items-center justify-between py-10 bg-red-700 bg-opacity-5 rounded-bl-lg rounded-br-lg w-full">
            <div className="flex flex-col items-center justify-start">
              <Icon icon="star" customClasses="" />

              <p className="md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase">
                Bronze{" "}
              </p>
            </div>
            <p className="md:text-4xl text-2xl font-bold leading-10 text-red-700">$4,500</p>
          </div>
          <div className="px-7 py-10 space-y-[30px]">
            <div className="flex items-center ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                10 ecommerce posts / month
              </p>
            </div>
            <div className="flex items-center ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                1 ecommerce PPC network
              </p>
            </div>
            <div className="flex items-start ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                1 personal ecommerce consultation / month
              </p>
            </div>
          </div>
          <div className="px-5">
            <hr className="bg-black" />
          </div>
          <div className="py-10 flex flex-col items-center justify-center">
            <p className="w-80 md:text-xl text-lg  leading-relaxed text-center text-black text-opacity-70">
              Includes strategy and competitive data analysis
            </p>
            <button className="mt-10 md:text-xl text-lg font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white">
              Send Proposal
            </button>
          </div>
        </div>
        <div className="bg-white border rounded-lg border-black border-opacity-70">
          <div className="inline-flex flex-col space-y-10 items-center justify-between py-10 bg-red-700 bg-opacity-5 rounded-bl-lg rounded-br-lg w-full">
            <div className="flex flex-col items-center justify-start">
              <div className="flex items-center gap-x-[10px]">
                <Icon icon="star" customClasses="" />
                <Icon icon="star" customClasses="" />
              </div>

              <p className="md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase">
                Silver{" "}
              </p>
            </div>
            <p className="md:text-4xl text-2xl font-bold leading-10 text-red-700">$6,300</p>
          </div>
          <div className="px-7 py-10 space-y-[30px]">
            <div className="flex items-center ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                20 ecommerce posts / month
              </p>
            </div>
            <div className="flex items-center ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                2 ecommerce PPC network
              </p>
            </div>
            <div className="flex items-start ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                2 personal ecommerce consultation / month
              </p>
            </div>
          </div>
          <div className="px-5">
            <hr className="bg-black" />
          </div>
          <div className="py-10 flex flex-col items-center justify-center">
            <p className="w-80 md:text-xl text-lg  leading-relaxed text-center text-black text-opacity-70">
              Includes strategy and competitive data analysis
            </p>
            <button className="mt-10 md:text-xl text-lg font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white">
              Send Proposal
            </button>
          </div>
        </div>
        <div className="bg-white border rounded-lg border-black border-opacity-70">
          <div className="inline-flex flex-col space-y-10 items-center justify-between py-10 bg-red-700 bg-opacity-5 rounded-bl-lg rounded-br-lg w-full">
            <div className="flex flex-col items-center justify-start">
              <div className="flex items-center gap-x-[10px]">
                <Icon icon="star" customClasses="" />
                <Icon icon="star" customClasses="" />
                <Icon icon="star" customClasses="" />
              </div>

              <p className="md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase">
                Gold{" "}
              </p>
            </div>
            <p className="md:text-4xl text-2xl font-bold leading-10 text-red-700">$7,200</p>
          </div>
          <div className="px-7 py-10 space-y-[30px]">
            <div className="flex items-center ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                30 ecommerce posts / month
              </p>
            </div>
            <div className="flex items-center ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                3 ecommerce PPC network
              </p>
            </div>
            <div className="flex items-start ">
              <Icon icon="tick" customClasses="" />
              <p className="md:text-xl text-lg leading-[130%] ml-[15px] text-black text-opacity-70">
                4 personal ecommerce consultation / month
              </p>
            </div>
          </div>
          <div className="px-5">
            <hr className="bg-black" />
          </div>
          <div className="py-10 flex flex-col items-center justify-center">
            <p className="w-80 md:text-xl text-lg  leading-relaxed text-center text-black text-opacity-70">
              Includes strategy and competitive data analysis
            </p>
            <button className="mt-10 md:text-xl text-lg font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white">
              Send Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
