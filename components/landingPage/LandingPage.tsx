import React from "react";
import Hero from "./Hero/Hero";
import OurPartner from "./OurPartner/OurPartner";
import Pricing from "./PricingPlan/Pricing";
import Testimonial from "./Testimonials/Testimonial";
import PromotionalSection from "./PromotionalSection/PromotionalSection";
import GuideDetails from "./GuideDetails/GuideDetails";
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
			<div className="mt-[120px] px-5 md:px-10 lg:px-20 mx-auto container gap-[60px] lg:flex items-start pb-12">
				<div className="lg:w-[60%]">
					<GuideDetails />
					<Faq />
				</div>
				<div className="lg:w-[40%]">
					<TableOfContext />
				</div>
			</div>
		</>
	);
}
