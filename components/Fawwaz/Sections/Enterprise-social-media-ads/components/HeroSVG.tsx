import { FC } from "react";
import Image from "next/image";

import fanelImag from "../../../../assets/icon-sales-funnel.png";

const values = [
	{
		image: {
			src: fanelImag.src,
			alt: "SVG",
		},
		title: "Access the data-fueled plans behind",
		pricing: "$3,021,182,299",
		description: "IN CLIENT REVENUE",
	},
	{
		image: {
			src: fanelImag.src,
			alt: "SVG",
		},
		title: "Access the data-fueled plans behind",
		pricing: "$3,021,182,299",
		description: "IN CLIENT REVENUE",
	},
	{
		image: {
			src: fanelImag.src,
			alt: "SVG",
		},
		title: "Access the data-fueled plans behind",
		pricing: "$3,021,182,299",
		description: "IN CLIENT REVENUE",
	},
	{
		image: {
			src: fanelImag.src,
			alt: "SVG",
		},
		title: "Access the data-fueled plans behind",
		pricing: "$3,021,182,299",
		description: "IN CLIENT REVENUE",
	},
];

const HeroSVG: FC = () => {
	return (
		<div className="space-y-[10px]">
			{values.map((value) => (
				<div className="flex bg-black-80 py-2 w-[436px] pl-1">
					<Image
						src={value.image.src}
						alt={`${value.image.alt}`}
						width={80}
						height={80}
					/>
					\
					<div className="text-white">
						<p className="text-[16px] font-medium">{value.title}</p>
						<h1 className="text-3xl">{value.pricing}</h1>
						<span className="text-[#BBBBBB] text-[0.8em]">
							{value.description}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default HeroSVG;
