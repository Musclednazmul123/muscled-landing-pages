import React from "react";
import Button from "../Button";
import ReactPlayerModal from "components/ReactPlayerModal";
import PlayIcon from '@/components/playIcon';


const LandingTestimonials = () => {
	return (
		<div className="bg-black testimonial-section px-6 md:px-24 py-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
				<div className="text-accent-white">
					<p className="text-lg md:text-2xl mb-8">
                    ‘’Muscled continues to provide advanced solutions that add value to my company and my clients on a consistent basis. Muscled is worth the investment, easily outpacing the competition!"
					</p>

					<p className="font-bold text-xl md:text-2xl mb-8">Owner</p>

					<p className="font-bold text-base md:text-xl mb-14">
						Company Name
					</p>

					<Button bgColor="bg-[#C40000]" textColor="text-white">
						See Our Client's Testimonials
					</Button>
				</div>
				<div className="react-player-modal">
					<ReactPlayerModal 
						url= 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
						Icon={PlayIcon}
						width={'360'}
						height={'250'}
					/>
				</div>
			</div>
		</div>
	);
};

export default LandingTestimonials;