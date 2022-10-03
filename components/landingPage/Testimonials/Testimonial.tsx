import React from "react";

import VideoPlayer from "../../ReactPlayerModal";
import PlayIcon from "../../playIcon";

export default function Testimonial() {
	return (
		<>
			<div className=" py-20 bg-black mt-[141px]">
				<div className="">
					<div className="lg:flex items-start justify-around ">
						<div className="lg:max-w-[560px]  pb-[76px] space-y-15">
							<p className="md:text-2xl text-xl md:leading-[36px] text-gray-50">
							"As a company, we have had a fantastic experience with all of our Muscled projects. 
							We started with one SEO and now have four SEO projects and three CMS projects!"
							</p>
							<p className="md:text-xl text-2xl font-bold leading-[30px] text-gray-50 mt-[30px]">
							Sales Director
							</p>
							<p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
								Associate in Category Development
							</p>
							<button className="md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold md:leading-[30px] text-white px-10 py-4 bg-[#C40000]  
							rounded">
								See Our Clients’ Testimonials
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
			</div>
		</>
	);
}
