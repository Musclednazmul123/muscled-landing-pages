import React, { Fragment } from "react";

import { Section } from "..";

import { Table, Th, Td } from "../../Table";
import Button from "../../Button";

import { PhoneIcon } from "@heroicons/react/solid";

import { tableHeader, tableBody, tableFooter } from "./const/table";

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
								<Fragment key={key}>
									{!key ? (
										<Th
											content={content}
											className="py-14 min-w-[310px] text-white text-left text-2xl rounded-tl-xl"
										/>
									) : (
										<Td
											content={content}
											className={`py-14 px-14 min-w-[310px] font-bold text-center text-2xl ${
												key === tableHeader.length - 1
													? "rounded-tr-xl"
													: ""
											}`}
											type={
												key % 2 !== 0
													? "basic"
													: "premium"
											}
										/>
									)}
								</Fragment>
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
													{body.title.content.bold}
												</div>
												<div>
													{body.title.content.desc}
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
											key % 2 === 0
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
											<PhoneIcon className="fill-sky-500 w-6 h-6 rotate-[260deg]" />
											<p className="text-sky-500 font-bold">
												888-601-5359
											</p>
										</div>
									</>
								}
							/>
							{
								tableFooter.map((val, key) => (
									<Td
										key={key}
										type={key % 2 === 0 ? "basic" : "premium"}
										content={
											<Button
												bgColor="bg-black"
												textColor="text-white"
												className="mx-auto">
												Get Started
											</Button>
										}
									/>
								))
							}
						</tr>
					</tbody>
				</Table>
			</div>
		</Section>
	);
};

export default Tables;
