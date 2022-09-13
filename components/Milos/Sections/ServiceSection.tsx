import React from 'react'
import {
  Card
} from '../CustomElements'

import StatisticsImage from '../../assets/1.png';
import MaintenanceImage from '../../assets/maintenance 1.png';
import NetworkImage from '../../assets/network 1.png';
import RoadImage from '../../assets/road 1.png'
import TrophyImage from '../../assets/trophy 2.png'

const cards = [
	{
		image: <img src={StatisticsImage.src} alt="image" />,
		title: "Expand your knowledge of the main campaigns.",
		description: "Collaborate with a diverse, growth-oriented clientele and a world-class digital team."
	},
	{
		image: <img src={MaintenanceImage.src} alt="image" />,
		title: "Upgrade your equipment",
		description: "Muscled provides cutting-edge hardware such as new computers and monitors."
	},
	{
		image: <img src={NetworkImage.src} alt="image" />,
		title: "Make strong connections",
		description: "Participate in virtual events, game nights, and other activities with our remote team."
	},
	{
		image: <img src={RoadImage.src} alt="image" />,
		title: "Long-term career opportunities",
		description: "Collaborate with a diverse, growth-oriented clientele and a world-class digital team."
	},
	{
		image: <img src={TrophyImage.src} alt="image" />,
		title: "Superstars of the Future",
		description: "Do you think Muscled is a good match? Apply now!"
	},
]

const ServiceSection = () => {
  return (
    <div className="mt-[193px]">
      <div className="flex flex-wrap justify-center gap-24">
        {cards.map((item, index) => {
          const { image, title, description } = item;

          return (
            <Card key={index} image={image} title={title} description={description} />
          )
        })}
      </div>
    </div>
  )
}

export default ServiceSection
