import React, { useState } from "react";

import { Section } from "..";
import { TableOfContent } from "../../Table";
import { IconItem } from "components/Fawwaz/Card";

import { AiOutlineRight, AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

import {
	learnMore,
	What,
	So,
	Example,
	builtIdentity,
	How,
	generateSales,
	earnCustomer,
	improveBussiness,
	increase,
	Why,
	onePartner,
	allrounderTeam,
	PartnerAgency,
	PartnerList,
	FAQs,
	moreFollower,
} from "./const/content";

const contentsOfTOC = [
	"What Do Our Enterprise Social Media Advertising Services Include? Just About Everything.",
	"How Does Enterprise Social Media Advertising Help Your Business?",
	"Why Do Brands Choose WebFX For Enterprise Social Media Advertising?",
	"FAQs About Enterprise Social Media Advertising Services",
	"Attract More Followers And Sales With Enterprise Social Media Advertising Services",
];

const Contents: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<Section className="pt-32 md:grid grid-cols-1 lg:grid-cols-5 gap-3 relative">
			<div className="lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px]">
				<div className="sticky top-0">
					<TableOfContent
						bgColor="bg-[#FAE8E8]"
						titleColor="text-black"
						titleIconColor="fill-black"
						isOpen={isOpen}
						setIsOpen={() => setIsOpen((prev) => !prev)}
						contents={contentsOfTOC.map((content, key) => (
							<IconItem
								key={key}
								title={content}
								icon={<BsDot />}
								className="text-sky-500 mb-5 w-full"
							/>
						))}
					/>

					<div className="mt-16">
						<h1 className="mb-5">
							Learn more about social media advertising
						</h1>
						<ul className="text-[15px] underline decoration-1">
							{learnMore.map((item, key) => (
								<li key={key} className="py-2">
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className="lg:order-1 lg:col-span-3 ml-0 my-10 lg:ml-10 lg:my-0">
				<div>
					{What.map((content, key) => (
						<div key={key}>
							<h1 className="text-[40px] mb-16">
								{content.title}
							</h1>
							<div className="text-xl">
								<p>{content.description.one}</p>
								<p>{content.description.two}</p>
								<ul className="my-8 ml-10 list-disc">
									{So.map((item, key) => (
										<li key={key}>{item}</li>
									))}
								</ul>
								<p className="my-8">
									{content.description.three}
								</p>
								<p>{content.description.four}</p>
								<ul className="my-8 ml-10 list-disc">
									{Example.map((item, key) => (
										<li key={key}>{item}</li>
									))}
								</ul>
								<p>{content.description.five}</p>
							</div>
						</div>
					))}

					<img
						src="https://picsum.photos/200"
						alt=""
						className="w-[760px] h-[525px] mt-[132px] mb-[60px]"
					/>

					{How.map((content, key) => (
						<div key={key}>
							<h1 className="text-[40px] mb-[70px]">
								{content.title}
							</h1>
							<p className="text-xl">{content.description}</p>
						</div>
					))}

					{builtIdentity.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							<p className="my-4">{content.description.one}</p>
							<p className="my-4">{content.description.two}</p>
							<p className="my-4">{content.description.three}</p>
						</div>
					))}

					{generateSales.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							<p className="my-4">{content.description.one}</p>
							<p className="my-4">{content.description.two}</p>
							<p className="my-4">{content.description.three}</p>
							<p className="my-4">{content.description.four}</p>
						</div>
					))}

					{earnCustomer.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							<p className="my-4">{content.description.one}</p>
							<p className="my-4">{content.description.two}</p>
							<p className="my-4">{content.description.three}</p>
						</div>
					))}

					{improveBussiness.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							<p className="my-4">{content.description.one}</p>
							<p className="my-4">{content.description.two}</p>
							<p className="my-4">{content.description.three}</p>
						</div>
					))}

					{increase.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							<p className="my-4">{content.description.one}</p>
							<p className="my-4">{content.description.two}</p>
							<p className="my-4">{content.description.three}</p>
						</div>
					))}

					<img
						src="https://picsum.photos/210"
						alt=""
						className="w-[760px] h-[525px] mt-[60px] mb-[60px]"
					/>

					{Why.map((content, key) => (
						<div key={key}>
							<h1 className="text-[40px] mb-16">
								{content.title}
							</h1>
							<p className="text-xl">{content.description}</p>
						</div>
					))}

					{onePartner.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							<p className="my-4">{content.description.one}</p>
							<p className="my-4">{content.description.two}</p>
							<p className="my-4">{content.description.three}</p>
							<p className="my-4">{content.description.four}</p>
							<p className="my-4">{content.description.five}</p>
						</div>
					))}

					{allrounderTeam.map((content, key) => (
						<div key={key} className="text-xl">
							<h1 className="my-12">{content.title}</h1>
							{content.description.map((val, key) => (
								<p key={key} className="my-4">
									{val}
								</p>
							))}
						</div>
					))}

					<div className="text-xl">
						<h1 className="my-12">{PartnerAgency.title}</h1>
						<p className="pt-14 pb-20">
							{PartnerAgency.description.one}
						</p>
						<p className="my-4">{PartnerAgency.description.two}</p>
						<p className="my-4">
							{PartnerAgency.description.three}
						</p>
						<ul className="my-4 ml-10 list-disc">
							{PartnerList.map((item, key) => (
								<li key={key}>{item}</li>
							))}
						</ul>
						<p className="my-4">{PartnerAgency.description.four}</p>
					</div>

					{FAQs.map((content, key) => (
						<div key={key}>
							<h1 className="text-[40px] mt-20 mb-16">
								{content.title}
							</h1>
							<div className="text-xl">
								<p className="my-4">
									{content.description.one}
								</p>
								<h1 className="my-12">
									{content.description.two}
								</h1>
								<p className="my-4">
									{content.description.three}
								</p>
								<h1 className="my-12">
									{content.description.four}
								</h1>
								<p className="my-4">
									{content.description.five}
								</p>
							</div>
						</div>
					))}

					{moreFollower.map((content, key) => (
						<div key={key}>
							<h1 className="text-[40px] mt-20 mb-16">
								{content.title}
							</h1>
							<div className="text-xl">
								<p className="my-4">
									{content.description.one}
								</p>
								<p className="my-4">
									{content.description.two}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-28 max-w-[650px] w-auto bg-sky-800 text-white p-12 space-y-5">
					<p className="font-bold text-3xl">
						For verified ratings of our marketing services,please
						read our:
					</p>
					<div className="flex">
						<AiFillStar className="fill-yellow-400 text-3xl" />
						<AiFillStar className="fill-yellow-400 text-3xl" />
						<AiFillStar className="fill-yellow-400 text-3xl" />
						<AiFillStar className="fill-yellow-400 text-3xl" />
						<AiFillStar className="fill-yellow-400 text-3xl" />
					</div>
					<div className="text-[#D2D2D2] font-medium flex items-center">
						<p>INDUSTRY-LEADING 863 TESTIMONIALS</p>
						<AiOutlineRight className="ml-8" />
					</div>
					<p className="text-[#D2D2D2] font-normal">
						MUSCLED Agency Rating 4.9 out of 5 with 267 ratings
					</p>
				</div>
			</div>
		</Section>
	);
};

export default Contents;
