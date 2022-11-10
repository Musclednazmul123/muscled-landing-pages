import { FC } from "react";

import { Section } from "../Sections";
import Button from "../Button";
import ReactPlayerModal from "components/ReactPlayerModal";

import PlayIcon from "../../Icons/PlayIcon";

 interface TestimonialProps{
marginTop?:string,
}

const Testimonial: FC<TestimonialProps> = ({
	
}) => {
	return (
		<div className={`bg-black`}>
			<Section className="flex flex-wrap justify-center items-center py-20 px-3 gap-32">
				<div className="max-w-[560px] text-accent-white">
					<p className="text-xl md:text-2xl mb-8">
						“Muscled has gone above and beyond to make me happy. So
						far, after a few months, I have already seen significant
						improvement in rankings and conversions, and they have
						also greatly improved the speed of my site.”
					</p>

          <p className="mb-8 text-xl font-bold md:text-2xl">Owner</p>

          <p className="text-base font-bold md:text-xl mb-14">Company Name</p>

					<Button bgColor="bg-[#C40000]" textColor="text-white">
						See Our Client's Testimonials
					</Button>
				</div>
				<ReactPlayerModal
					url="https://www.youtube.com/embed/D0UnqGm_miA"
					thumbnail="https://www.youtube.com/embed/D0UnqGm_miA"
					Icon={PlayIcon}
					width="500px"
					height="400px"
				/>
			</Section>
		</div>
	);
};

export default Testimonial;