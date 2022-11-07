import React,{FC} from 'react'
import Icon from "../../assets/landingPageSVG/Icons";
import {Section} from "../../Fawwaz/Sections";
const logo = [
    {
        icon: "logo1",
    },
    {
        icon: "logo2",
    },
    {
        icon: "logo3",
    },
    {
        icon: "logo4",
    },
    {
        icon: "logo5",
    },
    {
        icon: "logo6",
    },
];



const Partners:FC = () => {
  return (
    <div className="bg-white">
				<Section className="text-center pt-16">
					<h3 className="text-black-50 text-2xl">SEO TOOLS</h3>

					<div className="pt-5 flex flex-wrap justify-center lg:justify-between pb-12 gap-6">
                    {logo.map((logo) => {
							return <Icon customClasses="" icon={logo.icon} />;
						})}			
					</div>
				</Section>
			</div>

  )
}

export default Partners