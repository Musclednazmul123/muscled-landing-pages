import { FC } from "react";

import { Section } from "..";
import Logo from "../../Logo";

import logo from "../../../assets/logo/logo1.png";

const Partner: FC = () => {
	return (
		<div className="bg-white mb-[185px]">
			<Section className="text-center pt-16">
				<h3 className="text-black-50 text-2xl">Our Partners</h3>

				<div className="pt-[27.55px] flex flex-wrap justify-between pb-12 gap-6">
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
					<Logo src={logo.src} width={154} height={34} />
				</div>
			</Section>
		</div>
	);
};

export default Partner;
