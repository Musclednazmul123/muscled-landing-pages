import { FC } from "react";

import { Section } from "../Sections";
import Button from "../Button";
import VideoFrame from "../../Fawwaz/VideoFrame";
import { TestmonailProps } from "../component.type";


const TestimonailReuseable: FC<TestmonailProps> = ({p1, p2}) => {
	return (
		<div className="bg-black">
			<Section className="flex flex-wrap justify-center py-20 px-3 gap-32">
				<div className="max-w-[560px] text-accent-white">
					<p className="text-xl md:text-2xl mb-8">
						“{p1}”
					</p>
                    <br />
                    <p className="text-xl md:text-2xl mb-8">
						“{p2}”
					</p>

					<p className="font-bold text-xl md:text-2xl mb-8">Owner</p>

					<p className="font-bold text-base md:text-xl mb-14">
						Company Name
					</p>

					<Button bgColor="bg-[#C40000]" textColor="text-white">
						See Our Client's Testimonials
					</Button>
				</div>
				<div className="w-[500px] min-h-[400px] h-full bg-white-gray relative">
					<VideoFrame className="w-full h-full absolute" allowFullScreen />
				</div>
			</Section>
		</div>
	);
};

export default TestimonailReuseable;
