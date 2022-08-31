import { FC } from "react";

import { Section } from "..";

const connectTarget = [
	{
		title: "Reach out to networks that matter to your business, connect with your targets.",
		description: {
			one: "Platforms like Youtube, Facebook, Instagram and Twitter gives your business the opportunity to reach hundreds of millions of users, as well as powerful targeting options that help your business reach out to its target audience and have amazing returns on its ad spend.",
			two: "With Muscled, your company gets has the chance to take advantage of all these platforms because we cover:",
			three: "While our enterprise social media advertising service plans include a recommended number of networks, you have the choice to advertise on however many you prefer, like four platforms instead of two.",
		},
	},
];

const platforms = [
	"Facebook",
	"Instagram",
	"Twitter",
	"Pinterest",
	"Snapchat",
	"YouTube",
	"LinkedIn",
];

const ReachOut: FC = () => {
	return (
		<Section className="mt-[200px]">
			{connectTarget.map((content, key) => (
				<div key={key} className="space-y-16 justify-center">
					<h1 className="flex text-4xl text-justify">
						{content.title}
					</h1>
					<div className="text-justify mt-[70px] text-xl">
						<p className="mb-5">{content.description.one}</p>
						<p className="mb-5">{content.description.two}</p>
						<ul className="list-disc pl-8 mb-5">
							{platforms.map((platform, key) => (
								<li key={key}>{platform}</li>
							))}
						</ul>
						<p>{content.description.three}</p>
					</div>
				</div>
			))}
		</Section>
	);
};

export default ReachOut;
