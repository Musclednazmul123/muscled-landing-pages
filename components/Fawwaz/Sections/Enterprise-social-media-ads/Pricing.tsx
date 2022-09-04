import React, { FC } from "react";

import { Section } from "..";
import Button from "../../Button";
import {
	Card,
	CardHeader,
	CardContent,
	IconItem,
} from "components/Fawwaz/Card";

import { AiFillStar, AiOutlineRight } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const CheckIcon: FC = () => <FaCheckCircle className="fill-black w-6 h-6" />;

const pricingCards = [
	{
		rate: "2,050",
		title: "1-2 Social Network",
		type: "basic",
		star: [AiFillStar],
		content: [
			{
				icon: <CheckIcon />,
				title: "Up to 5-10 ad campaigns",
			},
			{
				icon: <CheckIcon />,
				title: "Up to 20-40 unique ads",
			},
			{
				icon: <CheckIcon />,
				title: "Advanced AI tracking",
			},
			{
				icon: <CheckIcon />,
				title: "$10,000-$20,000 / mo. monthly ad spend",
			},
		],
	},
	{
		rate: "10,000",
		title: "1-2 Social Network",
		type: "premium",
		star: [AiFillStar, AiFillStar],
		content: [
			{
				icon: <CheckIcon />,
				title: "Up to 5-20 ad campaigns",
			},
			{
				icon: <CheckIcon />,
				title: "Up to 20-40 unique ads",
			},
			{
				icon: <CheckIcon />,
				title: "Dedicated account manager",
			},
			{
				icon: <CheckIcon />,
				title: "$100,000-$500,000 / mo. monthly ad spend",
			},
		],
	},
	{
		rate: "65,000",
		title: "1-2 Social Network",
		type: "ultimate",
		star: [AiFillStar, AiFillStar, AiFillStar],
		content: [
			{
				icon: <CheckIcon />,
				title: "Up to 30-50 ad campaigns",
			},
			{
				icon: <CheckIcon />,
				title: "Up to 120-200 unique ads",
			},
			{
				icon: <CheckIcon />,
				title: "Custom reporting dashboard",
			},
			{
				icon: <CheckIcon />,
				title: "$1M-$1.5M / mo. monthly ad spend",
			},
		],
	},
];

const Pricing: FC = () => {
	return (
		<>
			<Section>
				<div className="flex flex-wrap lg:space-x-5 gap-10 lg:gap-0 justify-center">
					{pricingCards.map((pricing, index) => (
						<Card
							key={index}
							className="max-w-[380px] w-full border-black-70 border rounded-md">
							<CardHeader
								rate={pricing.rate}
								title={pricing.title}
								type={pricing.type}
								monthly={
									<p className="font-bold text-bold-red">
										month
									</p>
								}>
								<div className="flex mb-[30px]">
									{pricing.star.map(
										(Component, key): JSX.Element => (
											<Component
												key={key}
												className={`card-icon ${index === 2 ? `fill-black-80` : index === 1 ? `fill-black-70` : `fill-black-50`}`}
											/>
										)
									)}
								</div>
							</CardHeader>
							<CardContent className="space-y-9 my-10">
								{pricing.content.map((content, key) => (
									<IconItem
										key={key}
										icon={content.icon}
										title={content.title}
										className="text-black-70 font-normal"
									/>
								))}
							</CardContent>
							<div className="px-4 pb-10 mt-4 flex items-center justify-center flex-col">
								<p className="border-t border-[#000] w-full mt-1 mb-10 text-center" />
								<p className="mb-10 text-black-80">
									$3,125 INITIAL INVESTMENT
								</p>
								<Button
									bgColor="bg-[#000]"
									textColor="text-white"
									className="py-4 px-10 text-[-0.8em]">
									Send Proposal
								</Button>
							</div>
						</Card>
					))}
				</div>
			</Section>
			<Section className="flex justify-center pt-[125px]">
				<div className="flex text-sky-500 py-2 items-center">
					<p className="text-2xl md:text-[40px] font-medium">
						See Full Deliverables
					</p>
					<AiOutlineRight className="text-2xl md:text-5xl ml-10" />
				</div>
			</Section>
		</>
	);
};

export default Pricing;
