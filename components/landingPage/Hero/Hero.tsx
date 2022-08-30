import React from "react";
import Icon from "../../assets/landingPageSVG/Icons";
function Hero() {
	const cardData = [
		{
			icon: "funnel",
			pTag: "Access the data-fueled plans behind",
			numbers: "$3,021,182,299",
			subHeading: "IN CLIENT REVENUE",
		},
		{
			icon: "people",
			pTag: "Use the expert-led tactics behind",
			numbers: "7,839,684",
			subHeading: "IN LEADS FOR OUR CLIENTS",
		},
		{
			icon: "trophy",
			pTag: "Unlock do-it-for-me marketing with",
			numbers: "450",
			subHeading: "DIGITAL MARKETING EXPERTS",
		},
		{
			icon: "roi",
			pTag: "Accelerate ROI with",
			numbers: "1+ BILLION",
			subHeading: "DATA POINTS FROM MARKETINGCLOUDFX",
		},
	];
	return (
		<div className="bg-black bg-opacity-70">
			<div className="xl:py-[100px] md:py-20 py-4  px-5 md:px-10 lg:px-20 mx-auto container  xl:flex items-center justify-between">
				<div className="max-w-[720px]">
					<p className="md:text-lg text-base font-medium  xl:text-left text-center leading-[100%] text-white">
						Home {">"} WEB DEVELOPMENT {">"} SERVICES
					</p>
					<h1 className="lg:text-6xl md:text-5xl text-2xl xl:text-left text-center font-bold leading-[130%] text-white mt-[30px]">
						Ecommerce PPC <br /> Management Services: <br />
						Give your ROAS a Workout!
					</h1>
					<p className="md:text-xl text-lg  xl:text-left text-center leading-[150%] text-white mt-5">
						People are now shopping online, and pay-per-click (PPC) ads can help
						you catch up. Muscled PPC Management Services will allow your store
						to use Google and Bing to get traffic and make sales. Why not see
						how much we can help you by requesting a free ecommerce PPC proposal
						today?{" "}
					</p>
					<div className="mt-[30px] xl:flex hidden">
						<input
							className="text-xl leading-[150%] focus:outline-none py-[15px] px-5 text-black placeholder-text-black placeholder-opacity-50 rounded bg-white max-w-[480px] w-full"
							placeholder="Enter Your Website Link"
						/>
						<button className="text-xl whitespace-nowrap font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white">
							Send Proposal
						</button>
					</div>
				</div>
				<div className="space-y-[10px] xm:mt-0 mt-12 xl:ml-[84px]">
					{cardData.map((card, index) => {
						return (
							<div className="bg-black bg-opacity-80 rounded-sm flex md:flex-row flex-col items-center py-3 pl-3 pr-10">
								<Icon customClasses="md:w-auto md:h-auto" icon={card.icon} />
								<div className="md:ml-1.5 md:mt-0 mt-2 md:gap-y-0 space-y-1">
									<p className="text-base  md:text-left text-center font-medium leading-[130%] text-white">
										{card.pTag}
									</p>
									<p className="md:text-3xl md:text-left text-center text-xl font-bold leading-[130%] text-white">
										{card.numbers}
									</p>
									<p className="text-base md:text-left text-center font-medium leading-[130%] text-gray-400 uppercase">
										{card.subHeading}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="mt-[30px] xl:hidden block ">
					<input
						className="text-xl leading-[150%] focus:outline-none py-[15px] px-5 text-black placeholder-text-black placeholder-opacity-50 rounded bg-white xl:max-w-[480px] w-full"
						placeholder="Enter Your Website Link"
					/>
					<button className="text-xl xl:mt-0 mt-4 xl:w-auto w-full font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black  rounded text-white">
						Send Proposal
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
