import { FC } from "react";

import VideoPlayer from "../../ReactPlayerModal";
import PlayIcon from "../../playIcon";

const Testimonials: FC = () => {
  return (
    <>
      <div className=" py-16 bg-black">
        <div className="lg:flex items-start justify-between lg:justify-center lg:gap-x-[131px]">
          <div className="lg:max-w-[560px]  pb-[76px]">
            <p className="md:text-2xl text-xl md:leading-[36px] text-gray-50">
              "Our Muscled marketer has taken the time to learn about our
              company and our goals, and it shows in the level of service they
              provide us." Every member of the team with whom we have interacted
              has been eager to assist us in making our website, and thus our
              business, the best it can be. Muscled is a true extended version
              of our team, offering expertise in areas where we do not have
              expertise."
            </p>
            <p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
              Financial Advisor
            </p>
            <button className="md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold md:leading-[30px] text-white px-10 py-4 bg-[#C40000]  rounded">
              See Our Client's Testimonials
            </button>
          </div>
          <VideoPlayer
            Icon={PlayIcon}
            width={"540px"}
            height={"400px"}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            // thumbnail="main.png"
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
