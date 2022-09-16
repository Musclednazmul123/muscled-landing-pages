import React from "react";

import { Section } from "..";

const lastCards = [
	{
		title: "Social Media Services",
		lists: [
			"Social Media Design",
			"Social Media Management",
			"Social Media Pricing",
			"Facebook Advertising Services",
			"Instagram Advertising Services",
		],
	},
	{
		title: "SEO Services",
		lists: ["SEO Services", "Enterprise SEO Pricing", "Local SEO Pricing"],
	},
	{
		title: "Other WebFX Services",
		lists: [
			"Enterprise Marketing Agency",
			"Account-Based Marketing",
			"Web Design",
			"Web Video Production",
			"Voice Search Optimization",
		],
	},
];

const LastCards: React.FC = () => {
	return (
		<Section className="mt-36 mb-28">
			<div className="flex flex-wrap gap-10 md:gap-20 justify-around px-5">
				{lastCards.map((content, key) => (
					<div
						key={key}
						className="w-auto min-h-[363px] bg-red-3 p-8 space-y-7 min-w-[320px] text-black-70">
						<p className="font-medium text-2xl">{content.title}</p>
						<ul className="space-y-7">
							{content.lists.map((list, key) => (
								<React.Fragment key={key}>
									<li className="underline">{list}</li>
								</React.Fragment>
							))}
						</ul>
					</div>
				))}
			</div>
		</Section>
	);
};

export default LastCards;