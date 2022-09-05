import { FC } from "react";

import { Section } from "..";
import Icons from "components/assets/landingPageSVG/Icons";

const Partner: FC = () => {
	return (
		<div className="bg-white mb-[185px]">
			<Section className="text-center pt-16">
				<h3 className="text-black-50 text-2xl">Our Partners</h3>

				<div className="pt-[27.55px] flex flex-wrap justify-between pb-12 gap-6">
					<Icons icon="logo1" />
					<Icons icon="logo2" />
					<Icons icon="logo3" />
					<Icons icon="logo4" />
					<Icons icon="logo5" />
					<Icons icon="logo6" />
				</div>
			</Section>
		</div>
	);
};

export default Partner;
