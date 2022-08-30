import { FC } from "react";

import { Section } from "."
import { Input } from "../Form";
import Button from "../Button";
import { HeroSectionProps } from "../component.type";
import { useRouter } from "next/router";

const Hero: FC<HeroSectionProps> = ({ title, description, heroSVG, input }) => {
	const router =useRouter()
	return (
		<Section className="custom-hero px-24 py-24 flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-4 lg:justify-between">
			<div className="max-w-[640px]">
				{/* //? Pagination -- this should be dynamic? */}
				<p className="text-white text-lg font-medium space-x-2 cursor-pointer">
					<span>Home {router.asPath.replace('/', ' > ')}</span>
					<span>Digital Marketing {router.asPath.replace('/', ' > ')}</span>
					<span>Services {router.asPath.replace('/', ' > ')}</span>
				</p>

				<h1 className="text-[36px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5">
					{title}
				</h1>

				<p className="text-white-70 leading-8 mb-8">
					{description}
				</p>

				{input && 
				
				<div className="flex flex-wrap gap-2">
					<Input
						type="text"
						placeholder="Enter Your Website Link"
						className="text-sm flex-1 md:text-lg"
					/>
					<Button bgColor="bg-black" textColor="text-white">
						<span className="text-sm md:text-lg">
							Send Proposal
						</span>
					</Button>
				</div>
				}

			</div>

			<div>
			<div className="max-w-[436px] grid grid-cols-1 gap-4">
				<div className="custom-svg-div grid grid-cols-2 gap-2 px-4 ">
					<div>SVG Icon</div>
					<div className="grid grid-cols-1 gap-2">
						<p className="custom-svg-text">Access the data-fueled plans behind</p>
						<h3>$3,021,182,299</h3>
					</div>
				</div>
				<div>09</div>
			</div>

				{/* { heroSVG } */}
			</div>
		</Section>
	);
};

export default Hero;
