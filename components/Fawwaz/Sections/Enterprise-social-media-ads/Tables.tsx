import React from 'react'

import { Section } from '..';

import { Table, Th, Td } from "../../Table"
import Button from '../../Button';

import { AiFillPhone } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

interface ITableBody {
	title: {
		type: "unique" | "content";
		content:
			| String
			| {
					bold: String;
					desc: String;
			  };
	};
	description: String[] | JSX.Element[];
}

const tableHeader = [
	"Features",
	"1-2 Social networks",
	"1-3 Social networks",
	"2-4 Social networks",
	"3-7 Social networks",
];

const descTableBody = [
	<FaCheck className="fill-green-500 mx-auto" />,
	<FaCheck className="fill-green-500 mx-auto" />,
	<FaCheck className="fill-green-500 mx-auto" />,
	<FaCheck className="fill-green-500 mx-auto" />,
];

const tableBody: ITableBody[] = [
	{
		title: {
			type: "content",
			content: "Number of Unique Ads Across All Campaigns ",
		},
		description: [
			"Up to 20-40",
			"up to 40-60",
			"up to 60-80",
			"up to 60-80",
		],
	},
	{
		title: {
			type: "content",
			content: "Number of Advertising Campaigns",
		},
		description: [
			"Up to 5-10 across all networks",
			"up to 10-15 across all networks",
			"up to 15-20 across all networks",
			"up to 15-20 across all networks",
		],
	},
	{
		title: {
			type: "content",
			content: "Ad Spend Range",
		},
		description: [
			"$10,000-$20,000 / mo.",
			"$20,001 – $100,000 / mo.",
			"$100,001 – $500,000 / mo.",
			"$500,001 – $1M / mo.",
		],
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Network Included:",
				desc: "Facebook, Twitter, Pinterest, Instagram, LinkedIn, Snapchat (Geofilters), YouTube",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Dedicated Social Media Advertising Account Manager Additional support from social team members with expertise on each network included",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Access to MarketingCloudFX AI Tracking Tools",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Targeting Opportunities",
				desc: "Dependent on networks",
			},
		},
		description: [<span />, <span />, <span />, <span />],
	},
	{
		title: {
			type: "content",
			content: "Custom Audiences using social pixels or customer lists",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Keyword, interest, user intent targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "School/Profession/Workplace targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Company size, Industry, Job Title, etc. targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Device targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Demographic targeting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Social ad account audit, recommendations, and consultation",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Social Advertising Strategy and Consultation",
				desc: "Campaign structure recommendations Recommended # of campaigns Budget allocation recommendations Audience recommendations and creation Development of campaign goals",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Social Advertising Creative Development and Consultation",
				desc: "Ad creative development (copy, headlines, creative, CTAs) Up to 4 unique ads for each campaign + copy adjustment based on audience Initial ad creative includes two rounds of revisions",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "For Facebook and Instagram ads only",
				desc: "Ecommerce website catalog setup (up to 10 hours)",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Ecommerce website catalog setup For non Facebook or Instagram ads",
		},
		description: [
			"$125 / hour or custom quote",
			"$125 / hour or custom quote",
			"$125 / hour or custom quote",
			"$125 / hour or custom quote",
		],
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "One-Time Social Reporting Custom Development",
				desc: "Custom report including KPIs, trend data, ad performance,high-level overviews Customized to show data and metrics applicable to different client needs Interactive reporting tables and charts Establish frequency (up to daily dashboard available)",
			},
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Ongoing ad account management",
		},
		description: [
			"Monthly & quarterly",
			"Monthly & quarterly",
			"Monthly & quarterly",
			"Monthly & quarterly",
		],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing account monitoring of social ad comments and engagement",
		},
		description: ["Daily", "Daily", "Daily", "Daily"],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing analysis of audience performance and optimization",
		},
		description: ["Monthly", "Monthly", "Monthly", "Monthly"],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing creative analysis and optimization (pausing ads, minor tweaks, small changes)",
		},
		description: ["Weekly", "Weekly", "Weekly", "Weekly"],
	},
	{
		title: {
			type: "content",
			content:
				"Ongoing creative analysis and optimization (pausing ads, minor tweaks, small changes)",
		},
		description: ["Quarterly", "Quarterly", "Quarterly", "Quarterly"],
	},
	{
		title: {
			type: "content",
			content: "Creative development and optimization (as needed)",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "1 round of revisions to client-provided creative",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content:
				"Additional revisions/enhancements to client-provided creative",
		},
		description: [
			"$125 / hour",
			"$125 / hour",
			"$125 / hour",
			"$125 / hour",
		],
	},
	{
		title: {
			type: "content",
			content: "Monthly, quarterly & annual reporting",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "content",
			content: "Reporting dashboard accessible at preferred frequency",
		},
		description: descTableBody,
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Add On:",
				desc: "Creative asset package (10 custom graphics)",
			},
		},
		description: [
			"$1,050 / package",
			"$1,050 / package",
			"$1,050 / package",
			"$1,050 / package",
		],
	},
	{
		title: {
			type: "unique",
			content: {
				bold: "Add On:",
				desc: "Additional campaigns (includes up to 4 ads per campaign)",
			},
		},
		description: [
			"$300 / campaign",
			"$300 / campaign",
			"$300 / campaign",
			"$300 / campaign",
		],
	},
	{
		title: {
			type: "content",
			content: "Ongoing Monthly Campaign Investment",
		},
		description: [
			"$2,050 or 15% of ad spend, whichever is higher",
			"$3,500 or 12.5% of ad spend, whichever is higher",
			"$10,000 or 9.5% of ad spend, whichever is higher",
			"$38,000 or 7.5% of ad spend, whichever is higher",
		],
	},
];

const Tables: React.FC = () => {
  return (
    <Section className="mt-[200px]">
				<h1 className="text-4xl text-center mb-40">
					MUSCLED Enterprise Social Media Advertising Pricing
				</h1>
				<div className="relative overflow-x-scroll">
					<Table>
						<thead>
							<tr>
								{tableHeader.map((content, key) => (
									<>
										{!key ? (
											<Th
												key={key}
												content={content}
												className="py-14 text-white text-left text-2xl rounded-tl-xl"
											/>
										) : (
											<Td
												key={key}
												content={content}
												className={`py-14 px-14 font-bold text-center text-2xl ${
													key ===
													tableHeader.length - 1
														? "rounded-tr-xl"
														: ""
												}`}
												type={
													key === 1 || key === 3
														? "basic"
														: "premium"
												}
											/>
										)}
									</>
								))}
							</tr>
						</thead>
						<tbody>
							{tableBody.map((body, key) => (
								<tr key={key} className="text-center">
									{body.title.type === "content" ? (
										<Th
											className="text-left text-white font-normal"
											content={body.title.content}
										/>
									) : (
										<Th
											className="text-left text-white font-normal"
											content={
												<>
													<div className="font-bold">
														{
															body.title.content
																.bold
														}
													</div>
													<div>
														{
															body.title.content
																.desc
														}
													</div>
												</>
											}
										/>
									)}
									{body.description.map((content, key) => (
										<Td
											className="px-14 py-11 text-black-80"
											key={key}
											content={content}
											type={
												key === 0 || key === 2
													? "basic"
													: "premium"
											}
										/>
									))}
								</tr>
							))}
							<tr className="text-center">
								<Th
									className="text-white text-left font-normal rounded-bl-xl"
									content={
										<>
											<p>
												Give Us a Call if You Need
												Information
											</p>
											<div className="flex gap-2 items-center mt-2 cursor-pointer">
												<AiFillPhone className="fill-sky-500" />
												<p className="text-sky-500 font-bold">
													888-601-5359
												</p>
											</div>
										</>
									}
								/>
								<Td
									type="basic"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="premium"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="basic"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
								<Td
									type="premium"
									className="rounded-br-xl"
									content={
										<Button
											bgColor="bg-black"
											textColor="text-white"
											className="mx-auto">
											Get Started
										</Button>
									}
								/>
							</tr>
						</tbody>
					</Table>
				</div>
			</Section>
  )
}

export default Tables