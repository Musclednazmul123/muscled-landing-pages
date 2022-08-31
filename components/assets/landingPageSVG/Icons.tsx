import React from "react";
import Funnel from "./SVGIcons/Funnel";
import People from "./SVGIcons/People";
import Trophy from "./SVGIcons/Trophy";
import ROI from "./SVGIcons/ROI";
import Logo1 from "./SVGIcons/Logo";
import Logo2 from "./SVGIcons/Logo2";
import Logo3 from "./SVGIcons/Logo3";
import Logo4 from "./SVGIcons/Logo4";
import Logo5 from "./SVGIcons/Logo5";
import Logo6 from "./SVGIcons/Logo6";
import Ticks from "./SVGIcons/Ticks";
import Star from "./SVGIcons/Star";
type Props = {
	icon: string;
	customClasses: string;
};

export default function Icons({ icon, customClasses }: Props) {
	let iconElement = null;
	switch (icon) {
		case "funnel":
			iconElement = <Funnel />;
			break;
		case "people":
			iconElement = <People />;
			break;
		case "trophy":
			iconElement = <Trophy />;
			break;
		case "roi":
			iconElement = <ROI />;
			break;
		case "logo1":
			iconElement = <Logo1 />;

			break;
		case "logo2":
			iconElement = <Logo2 />;

			break;
		case "logo3":
			iconElement = <Logo3 />;

			break;
		case "logo4":
			iconElement = <Logo4 />;

			break;
		case "logo5":
			iconElement = <Logo5 />;

			break;
		case "logo6":
			iconElement = <Logo6 />;

			break;
		case "tick":
			iconElement = <Ticks />;
			break;
		case "star":
			iconElement = <Star />;
			break;
	}
	return <div className={customClasses}>{iconElement}</div>;
}
