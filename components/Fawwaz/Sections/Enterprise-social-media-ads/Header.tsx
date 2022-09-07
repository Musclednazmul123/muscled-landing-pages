import { FC } from "react";

import { Hero } from "..";
import HeroSVG from "./components/HeroSVG";

const Header: FC = () => {
	return (
		<div className=" bg-black-70 px-3 lg:px-0">
			<Hero
				title={
					<>
					Enterprise Social Media Advertising Services: <br />
                    Drive Your Brand’s Growth
					</>
				}
				titleClassNames="text-[56px] leading-[80px]"
				description="Muscled’s Social Media Advertising can boost your brand beyond its limits.  Reach out on Facebook, Twitter, Instagram, and other top social media Platforms with Muscled to garner followers, boost sales, and get an amazing return on your investment. Request a free consultation today to see how we can help you and your brand go to the next level."
				descriptionTextColor="text-white"
				heroSVG={<HeroSVG />}
				input
			/>
		</div>
	);
};

export default Header;