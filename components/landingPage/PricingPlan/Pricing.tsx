import React from "react";
import Icon from "../../assets/landingPageSVG/Icons";
export default function Pricing() {
  return (
    <div className="bg-white w-full pt-[50px]">
      <div className="pt-16 bg-[#F9F9F9]  mx-auto conatiner lg:px-0 md:px-12 px-4">
        <h2 className="md:text-4xl text-2xl font-bold md:leading-[52px] text-center">
          Ecommerce PPC Management Services
        </h2>
        <div className="container mx-auto max-w-[1240px] justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-[60px] gap-5">
          <div className="bg-white overflow-hidden max-w-[400px] border rounded-lg border-black border-opacity-70">
            <div className="inline-flex flex-col space-y-[70px] items-center justify-between py-10 bg-[#FDF7F7] rounded-bl-lg rounded-br-lg w-full">
              <div className="flex flex-col items-center justify-start">
                <Icon icon="star" customClasses="text-[#7E7B7B]" />

                <p className="md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase">
                  Bronze{" "}
                </p>
              </div>
              <p className="md:text-4xl text-2xl font-bold leading-10 text-red-700">
                $4,500
              </p>
            </div>
            <div className="px-7 py-10 space-y-[30px]">
              <div className="flex items-center ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  10 ecommerce posts / month
                </p>
              </div>
              <div className="flex items-center ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  1 ecommerce PPC network
                </p>
              </div>
              <div className="flex items-start ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  1 personal ecommerce consultation / month
                </p>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-black h-[1px] w-full bg-opacity-50" />
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
          <div className="bg-white overflow-hidden border max-w-[400px] rounded-lg border-black border-opacity-70">
            <div className="inline-flex flex-col space-y-[70px] items-center justify-between py-10 bg-[#FCF0F0] rounded-bl-lg rounded-br-lg w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex items-center gap-x-[10px]">
                  <Icon icon="star" customClasses="text-[#4C4848]" />
                  <Icon icon="star" customClasses="text-[#4C4848]" />
                </div>

                <p className="md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase">
                  Silver{" "}
                </p>
              </div>
              <p className="md:text-4xl text-2xl font-bold leading-10 text-red-700">
                $6,300
              </p>
            </div>
            <div className="px-7 py-10 space-y-[30px]">
              <div className="flex items-center ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  20 ecommerce posts / month
                </p>
              </div>
              <div className="flex items-center ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  2 ecommerce PPC network
                </p>
              </div>
              <div className="flex items-start ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  2 personal ecommerce consultation / month
                </p>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-black h-[1px] w-full bg-opacity-50" />
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
          <div className="bg-white overflow-hidden border rounded-lg max-w-[400px] border-black border-opacity-70">
            <div className="inline-flex flex-col space-y-[70px] items-center justify-between py-10 bg-[#FAE8E8] rounded-bl-lg rounded-br-lg w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex items-center gap-x-[10px]">
                  <Icon icon="star" customClasses="text-[#322E2E]" />
                  <Icon icon="star" customClasses="text-[#322E2E]" />
                  <Icon icon="star" customClasses="text-[#322E2E]" />
                </div>

                <p className="md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase">
                  Gold{" "}
                </p>
              </div>
              <p className="md:text-4xl text-2xl font-bold leading-10 text-red-700">
                $7,200
              </p>
            </div>
            <div className="px-7 py-10 space-y-[30px]">
              <div className="flex items-center ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  30 ecommerce posts / month
                </p>
              </div>
              <div className="flex items-center ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  3 ecommerce PPC network
                </p>
              </div>
              <div className="flex items-start ">
                <Icon icon="tick" customClasses="" />
                <p className="md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70">
                  4 personal ecommerce consultation / month
                </p>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-black h-[1px] w-full bg-opacity-50" />
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
    </div>
  );
}
