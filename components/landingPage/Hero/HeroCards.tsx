import React,{FC} from 'react'
import Icon from "../../assets/landingPageSVG/Icons";

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
  
  interface heroCardsProps{
    className:string
  }


const HeroCards:FC<heroCardsProps> = ({className}) => {
  return (
    <div className={`${className}`}>
					{cardData.map((card, index) => {
						return (
							<div className="bg-black bg-opacity-80 rounded-sm flex md:flex-row flex-col items-center py-3 pl-3 pr-5">
								<Icon customClasses="md:w-auto md:h-auto" icon={card.icon} />
								<div className="md:ml-1.5 md:mt-0 mt-2 md:gap-y-0 space-y-1">
									<p className="text-base  md:text-left text-center font-medium leading-[20.8px] text-white">
										{card.pTag}
									</p>
									<p className="md:text-3xl md:text-left text-center text-xl font-bold md:leading-[41.6px] text-white">
										{card.numbers}
									</p>
									<p className="text-base md:text-left text-center font-medium md:leading-[20.8px] text-gray-400 uppercase w-fit">
										{card.subHeading}
									</p>
								</div>
							</div>
						);
					})}
				</div>
  )
}

export default HeroCards