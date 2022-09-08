import React from "react";

import { Section } from "..";
import Button from "../../Button";

const socialCards = [
	{
		title: "Ecommerce Social Media Advertising",
		description:
			"Drive traffic to your ecommerce store and start selling more online with social media ads.",
	},
	{
		title: "Enterprise Social Media Advertising",
		description:
			"Turbocharge enterprise sales with social ads (for ad budgets above $10,000 per month).",
	},
	{
		title: "D2C Social Media Advertising",
		description:
			"Attract, engage, and sell with custom social media ads for your business.",
	},
];

const SocialMediaAds: React.FC = () => {
	return (
		<>
			<Section className="flex flex-wrap mt-[135px]">
				<div className="justify-center">
					<h1 className="mb-14 text-4xl text-center">
						Social media advertising services for every business
					</h1>
					<p className="mb-7 text-xl text-center">
						MUSCLED offers custom social ad plans for ecommerce
						stores, enterprises, and direct to consumer (D2C)
						brands.
					</p>
					<p className="text-xl text-center">
						Check out the plans below, or give us a call at
						888-256-9448 to learn more!{" "}
					</p>
				</div>
			</Section>

			<Section className="mt-[150px]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
					{socialCards.map((content, key) => (
						<div
							key={key}
							className="bg-bold-red w-auto pt-5 pb-10 px-5 flex flex-wrap flex-col justify-around">
							<div className="px-6 text-accent-white">
								<p className="mt-8 text-3xl">{content.title}</p>
								<p className="my-5 text-xl">
									{content.description}
								</p>
							</div>
							<Button
								bgColor="bg-[#000]"
								textColor="text-white"
								className="mx-auto self-end">
								LEARN MORE
							</Button>
						</div>
					))}
				</div>
			</Section>
		</>
	);
};

export default SocialMediaAds;
