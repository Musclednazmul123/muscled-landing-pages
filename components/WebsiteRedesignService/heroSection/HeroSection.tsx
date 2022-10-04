import React,{ FC } from "react";

import { Section } from "../../Fawwaz/Sections";
import {WebRedesignHeroSectionProps } from "../../Fawwaz/component.type";
import ExtractRoutes from "@/components/ExtractRoutes";

const Hero: FC<WebRedesignHeroSectionProps> = ({
	title,
	titleClassNames,
	description,
	descriptionTextColor,
    descriptionClassName,
	heroSVG,
    children,
    contentWidth="w-[720px]"
}) => {
	return (
		<Section className={`py-24 flex flex-wrap h-auto mx-auto justify-center 
        xl:justify-between items-center space-y-8 lg:space-y-0 gap-4`}>
			<div className={`flex flex-col ${contentWidth} items-center xl:items-start`}>
				{/* //? Pagination -- this should be dynamic? */}
				<ExtractRoutes />

				<h1 className={`${titleClassNames ? titleClassNames : "text-[36px] leading-normal lg:text-[56px] lg:leading-72"} text-white mt-8 mb-5`}>
					{title}
				</h1>

				<p
					className={`${
						descriptionTextColor
							? descriptionTextColor
							: "text-white-70"
					} ${descriptionClassName} leading-8 mb-8`}>
					{description}
				</p>          
            {children && children}
			</div>

			<div>{heroSVG}</div>
		</Section>
	);
				}
	export default Hero;















// const HeroSection = () => {
//     return (
//         <div className="h-fit bg-black-70 px-3">
//             <Hero
//                 title="Website Redesign Services: Get Your Revenue a Workout!"
//                 description="Our goal is to improve your bottom line. Expect to 
//                     get more traffic, better leads, and an increase in your revenue. 
//                     All that you need to know about Muscled Digital Agency’s 
//                     competitive website redesign services is right below. You 
//                     can also fill out the form below to get an exact quote!"
//                 heroSVG={<RedesignSVG className="w-80 lg:w-full" />}
//                 // input
//                 button
//             />
//         </div>
//     )
// }

// export default HeroSection