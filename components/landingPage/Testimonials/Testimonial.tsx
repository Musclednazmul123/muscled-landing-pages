import React from "react";

import VideoPlayer from "../../ReactPlayerModal";
import PlayIcon from "../../playIcon";

export default function Testimonial() {
	return (
		<>
			<div className=" py-20 bg-black">
				<div className="px-5 md:px-10 lg:px-20 mx-auto container">
					<div className="lg:flex items-start justify-between lg:justify-center lg:gap-x-[60px]">
						<div className="lg:max-w-[580px]  pb-[76px]">
							<p className="md:text-2xl text-xl md:leading-[36px] text-gray-50">
								"I positively recommend Muscled for ecommerce management and
								content creation." Muscled team is extremely professional and
								detailed in their work."
							</p>
							<p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
								Associate in Category Development
							</p>
							<button className="md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold md:leading-[30px] text-white px-10 py-4 bg-red-700  rounded">
								See Our Clients’ Testimonials
							</button>
						</div>
						<VideoPlayer
							Icon={PlayIcon}
							// width={"500px"}
							// height={"500px"}
							url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							// thumbnail="main.png"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
