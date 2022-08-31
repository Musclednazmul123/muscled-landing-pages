import React from "react";
import ReactPlayer from "react-player";
import PlayIcon from "./playIcon";

export default function Testimonial() {
	const [isplaying, setIsPlaying] = React.useState<boolean>(false);
	const [hover, setHover] = React.useState<boolean>(false);
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
						<div className="bg-gray-300 rounded-lg lg:mt-0 mt-12 lg:w-[640px] md:h-[360px] overflow-hidden h-[250px] flex items-center justify-center">
							<PlayIcon onClick={() => setIsPlaying(true)} />
						</div>
					</div>
				</div>
			</div>
			{isplaying && (
				<div className="bg-black fixed top-0 h-full w-full bg-opacity-90 flex items-center justify-center px-6">
					<div
						className=" relative px-5 overflow-visible"
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						{hover && (
							<svg
								onClick={() => setIsPlaying(false)}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className=" w-6  h-6 absolute -right-2 -top-1  cursor-pointer text-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
						<ReactPlayer
							url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							playing={true}
							controls={hover}
						/>
					</div>
				</div>
			)}
		</>
	);
}
