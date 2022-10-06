import React from "react";

import VideoPlayer from "../ReactPlayerModal";
import playIconRed from "./playIconRed";
import thumbnail2 from "../../public/thumbnail2.png";

export default function Testimonial() {
  return (
    <>
      <div className=" py-20 bg-black h-[626px]">
        <div className="px-5 md:px-10 lg:px-20 mx-auto container items-center">
          <div className="lg:flex items-start justify-between lg:justify-center lg:gap-x-[131px]">
            <div className="lg:min-w-[560px]  pb-[76px] flex flex-col space-y-[60px] justify-center">
              <div className="flex flex-col gap-y-[30px]">
              <p className="md:text-2xl text-xl md:leading-[36px] text-[#F9F9F9] w-full leading-[36px]">
              “Muscled has gone above and beyond to make me happy. So far, after a few months, I have already 
              seen significant improvement in rankings and conversions, and they have
               also greatly improved the speed of my site.”
              </p>
              <p className="md:text-2xl font-bold text-[#F9F9F9]">Owner</p>
              <p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50">
                Company Name
              </p>
              </div>
              <button className="md:text-xl text-lg hover:bg-opacity-80 font-semibold 
              md:leading-[30px] text-white px-10 py-4
               bg-[#C40000] rounded w-fit">
                See Our Clients’ Testimonials
              </button>
            </div>
            <div className="flex justify-center items-center w-[540px] h-[400px]">
              <VideoPlayer
                Icon={playIconRed}
                width="540px"
                height="400px"
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                thumbnail={thumbnail2.src}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
