import React from "react";
import Funnel from "./SVGIcons/Funnel";
import People from "./SVGIcons/People";
import Trophy from "./SVGIcons/Trophy";
import ROI from "./SVGIcons/ROI";
import Logo from "./SVGIcons/Logo";
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
    case "logo":
      iconElement = <Logo />;
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
