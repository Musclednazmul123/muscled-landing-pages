import React from "react";
import Hero from "./Hero/Hero";
import OurPartner from "./OurPartner/OurPartner";
import Pricing from "./PricingPlan/Pricing";
import Testimonial from "./Testimonials/Testimonial";
import PromotionalSection from "./PromotionalSection/PromotionalSection";
import GuideDetails from "./guideDetails/GuideDetails";
import Faq from "./FAQ/FAQ";
import TableOfContext from "./TableOfContext/TableOfContext";
import ServiceTable from "./ServiceTable/ServiceTable";

export default function LandingPage() {
	return (
		<>
			<Hero />
			<OurPartner />
			<Pricing />
			<Testimonial />
			<PromotionalSection />
			<ServiceTable />
			<div className="mt-[100px] px-5 md:px-10 lg:px-20 mx-auto container gap-[60px] lg:flex items-start pb-12 relative">
				<div className="lg:w-[60%] mt-[20px]">
					<GuideDetails />
					<Faq />
				</div>
				<div className="lg:w-[40%] sticky top-0 pt-[20px]">
					<TableOfContext />
				</div>
			</div>
		</>
	);
}