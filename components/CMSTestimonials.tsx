import React from "react";
import ReactPlayerModal from "../components/ReactPlayerModal";

const CMSTestimonials = () => {
  return (
    <div>
      <div className=" py-20 bg-black">
        <div className="px-5 md:px-10 lg:px-20 mx-auto container">
          <div className="lg:flex items-start justify-between lg:justify-center lg:gap-x-[60px]">
            <div className="lg:max-w-[580px]  pb-[76px]">
              <p className="md:text-2xl text-xl md:leading-[36px] text-gray-50">
                "As a company, we have had a fantastic experience with all of
                our Muscled projects. We started with one SEO and now have four
                SEO projects and three CMS projects!"
              </p>
              <p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
                Sales Director
              </p>
              <p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
                Company Name
              </p>
              <button className="md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold md:leading-[30px] text-white px-10 py-4 bg-red-700  rounded">
                See Our Clients’ Testimonials
              </button>
            </div>
            <ReactPlayerModal
              Icon={playIcon}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              thumbnail="main.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSTestimonials;
