import React,{ FC } from "react";

import  Section  from "../Fawwaz/Sections/Section"
import { Input } from "../Fawwaz/Form";
import Button from "../Fawwaz/Button";
import { HeroSectionProps } from "../Fawwaz/component.type";
import ExtractRoutes from "../ExtractRoutes";
import FunnelSVG from "../../components/assets/svg/FunnelSVG";
import UserSVG from "../../components/assets/svg/UserSVG";
import TrophySVG from "../../components/assets/svg/TrophySVG";
import CloudComputingSVG from "../../components/assets/svg/CloudComputingSVG";

const Hero: FC<HeroSectionProps> = ({ title, description, heroSVG, input }) => {
	return (
        <div className=" bg-black-70 px-3 lg:px-0">
		<Section className="py-24 flex flex-wrap h-auto mx-auto justify-center items-center space-y-24 lg:space-y-0 gap-x-[57px] lg:justify-between">
			<div className="max-w-[640px]">
				{/* //? Pagination -- this should be dynamic? */}
				<ExtractRoutes />

				<h1 className="hero-title text-[56px] leading-normal lg:text-[56px] lg:leading-72 text-white mt-8 mb-5">
					{title}
				</h1>

				<p className="hero-description text-2xl md:text-2xl leading-[36px] my-7">
					{/* {description} */}
					Landing pages play a crucial role in the marketing and advertising of your business. At <span className="highlight">Muscled</span> we can provide you with a professionally designed landing page that will have a greater impact in your sales, boost your lead quality and increase your revenue.
				</p>

				{input && 
				
				<div className="flex flex-wrap gap-2">
					<Input
						type="text"
						placeholder="Enter Your Website Link"
						className="text-sm flex-1 md:text-lg h-[60px]"
					/>
					<Button bgColor="bg-black" textColor="text-white">
						<span className="text-sm md:text-lg">
							Send Proposal
						</span>
					</Button>
				</div>
				}

			</div>

			<div className="max-w-[436px] grid grid-cols-1 gap-4">

				<div className="custom-svg-div py-2.5 grid grid-cols-4 grid-flow-row-dense px-4">
					<div className="pt-2">
						<FunnelSVG />
					</div>
					<div className="grid grid-cols-1 col-span-3">
						<p className="svg-text-small">Access the data-fueled plans behind</p>
						<h4 className="svg-text-large">$3,021,182,299</h4>
						<p className="svg-text-small" style={{color: "#BBBBBB"}}>IN CLIENT REVENUE</p>
					</div>
				</div>
				<div className="custom-svg-div py-2.5 grid grid-cols-4 grid-flow-row-dense px-4 ">
					<div>
						<UserSVG />
					</div>
					<div className="grid grid-cols-1 col-span-3">
						<p className="svg-text-small">Use the expert-led tactics behind</p>
						<h4 className="svg-text-large">7,839,684</h4>
						<p className="svg-text-small" style={{color: "#BBBBBB"}}>IN LEADS FOR OUR CLIENTS</p>
					</div>
				</div>
				<div className="custom-svg-div py-2.5 grid grid-cols-4 grid-flow-row-dense px-4 ">
					<div className="pt-2">
						<TrophySVG />
					</div>
					<div className="grid grid-cols-1 col-span-3">
						<p className="svg-text-small">Unlock do-it-for-me marketing with</p>
						<h4 className="svg-text-large">450</h4>
						<p className="svg-text-small" style={{color: "#BBBBBB"}}>DIGITAL MARKETING EXPERTS</p>
					</div>
				</div>
				<div className="custom-svg-div py-2.5 grid grid-cols-4 grid-flow-row-dense px-4 ">
					<div className="pt-2">
						<CloudComputingSVG />
					</div>
					<div className="grid grid-cols-1 col-span-3">
						<p className="svg-text-small">Accelerate ROI with</p>
						<h4 className="svg-text-large">1+ BILLION</h4>
						<p className="svg-text-small" style={{color: "#BBBBBB"}}>DATA POINTS FROM MARKETINGCLOUDFX</p>
					</div>
				</div>
			</div>

				{/* { heroSVG } */}
		</Section>
        </div>
	);
};

export default Hero;