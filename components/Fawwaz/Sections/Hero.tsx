import React,{ FC } from "react";

import { Section } from ".";
import { Input } from "../Form";
import Button from "../Button";
import { HeroSectionProps } from "../component.type";
import { useRouter } from "next/router";

const Hero: FC<HeroSectionProps> = ({
	title,
	titleClassNames,
	description,
	descriptionTextColor,
	heroSVG,
	input,
}) => {
	const router = useRouter();
	return (
		<Section className="py-24 flex flex-wrap h-auto mx-auto justify-center xl:justify-between items-center space-y-8 lg:space-y-0 gap-4">
			<div className="flex flex-col max-w-[640px] items-center xl:items-start">
				{/* //? Pagination -- this should be dynamic? */}
				<p className="text-white text-lg font-medium space-x-2 cursor-pointer">
					<span>Home {router.asPath.replace("/", " > ")}</span>
				</p>

				<h1 className={`${titleClassNames ? titleClassNames : "text-[36px] leading-normal lg:text-[56px] lg:leading-72"} text-white mt-8 mb-5`}>
					{title}
				</h1>

				<p
					className={`${
						descriptionTextColor
							? descriptionTextColor
							: "text-white-70"
					} leading-8 mb-8`}>
					{description}
				</p>

				{input && (
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
				)}
			</div>

			<div>{heroSVG}</div>
		</Section>
	);
				}
	export default Hero;