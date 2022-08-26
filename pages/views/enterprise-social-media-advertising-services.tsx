import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "../../components/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "../../components/assets/logo/logo1.png";
import { Card, CardHeader } from "components/Fawwaz/Card";

import { AiFillStar } from "react-icons/ai";

const Page: NextPage = () => {
	const list = [
		{ icon: true, text: "15 hours quarterly" },
		{ icon: true, text: "$1,800 monthly investment" },
		{ icon: true, text: "Best for websites under 250 pages" },
	];
	const list2 = [
		{ icon: true, text: "25 hours quarterly" },
		{ icon: true, text: "$3,600 monthly investment" },
		{ icon: true, text: "Best for websites under 250 pages" },
	];
	const list3 = [
		{ icon: true, text: "35 hours quarterly" },
		{ icon: true, text: "$4,800 monthly investment" },
		{ icon: true, text: "Best for websites under 250 pages" },
	];

	return (
		<div>
			{/* First Section */}
			<div className=" bg-black-70 px-3 lg:px-0">
				<Hero
					title="Enterprise Social Media Advertising Services:
                    Drive Your Brand’s Growth"
					description="Muscled’s Social Media Advertising can boost your brand beyond its limits.  Reach out on Facebook, Twitter, Instagram, and other top social media Platforms with Muscled to garner followers, boost sales, and get an amazing return on your investment. Request a free consultation today to see how we can help you and your brand go to the next level."
					heroSVG={<SEOMarketingSVG className="w-80 lg:w-full" />}
					input
				/>
			</div>
			{/* Our partner section */}
			<Section className="text-center pt-16">
				<h3 className="text-black-50 text-2xl">Our Partners</h3>

				<div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
				</div>
			</Section>

			{/* pricing card section */}
			<Section>
				<div className="flex py-2 space-x-5">
					{/* <Card subtitle="1 SOCIAL NETWORK" height={780} duration='month' highlight='Standard consultation & reporting plan' description="$950 INITIAL INVESTMENT" title="15% of ad spend" list={list} className="text-red-400 w-full max-w-[400px] bg-red-6" starIcon={1} type='pricing' />
				<Card subtitle="2 SOCIAL NETWORKS" height={780} duration='month'  highlight='Standard consultation & reporting plan' description="$1,350 INITIAL INVESTMENT"  title="15% of ad spend" list={list2} className="text-red-400 w-full max-w-[400px] bg-red-9" starIcon={2} type='pricing' />
				<Card subtitle="3 SOCIAL NETWORKS" height={780} duration='month'  highlight='Standard consultation & reporting plan' description="$1,650 INITIAL INVESTMENT" title="15% of ad spend" list={list3} className="text-red-400 w-full max-w-[400px] bg-red-12" starIcon={3} type='pricing' /> */}
					<Card className="max-w-[400px] w-full border-black-70 border rounded-md">
						<CardHeader
							rate="2,050"
							title="1-2 SOCIAL NETWORKS"
							monthly={
								<p className="font-bold text-bold-red">month</p>
							}>
							<div className="flex">
								<AiFillStar className="card-icon fill-black-50" />
							</div>
						</CardHeader>
					</Card>
					<Card className="max-w-[400px] w-full border-black-70 border rounded-md">
						<CardHeader
							rate="10,000"
							title="2-4 SOCIAL NETWORKS"
							type="premium"
							monthly={
								<p className="font-bold text-bold-red">month</p>
							}>
							<div className="flex">
								<AiFillStar className="card-icon fill-black-70" />
								<AiFillStar className="card-icon fill-black-70" />
							</div>
						</CardHeader>
					</Card>
					<Card className="max-w-[400px] w-full border-black-70 border rounded-md">
						<CardHeader
							rate="65,000"
							title="3-7 SOCIAL NETWORKS"
							type="ultimate"
							monthly={
								<p className="font-bold text-bold-red">month</p>
							}>
							<div className="flex">
								<AiFillStar className="card-icon fill-black-80" />
								<AiFillStar className="card-icon fill-black-80" />
								<AiFillStar className="card-icon fill-black-80" />
							</div>
						</CardHeader>
					</Card>
				</div>
			</Section>
		</div>
	);
};

export default Page;
