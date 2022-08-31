import React, { Fragment } from "react";
import { NextPage } from "next";

import { Footer, Testimonial } from "components/Fawwaz/Sections";
import { Contents, Header, LastCards, Partner, Pricing, ReachOut, SocialMediaAds, Tables, TurnFollowers } from "../../components/Fawwaz/Sections/Enterprise-social-media-ads";

const Page: NextPage = () => {
	return (
		<div>
			{/* First Section */}
			<Header />

			{/* Our partner section */}
			<Partner />

			{/* pricing card section */}
			<Pricing />

			{/* Turn followers section */}
			<TurnFollowers />
			
			{/* Testimonial */}
			<Testimonial />

			{/* Reach out */}
			<ReachOut />

			{/* Tables */}
			<Tables />

			{/* Social Media Advertising */}
			<SocialMediaAds />
			
			{/* contents */}
			<Contents />

			{/* Last cards */}
			<LastCards />

			<Footer />
		</div>
	);
};

export default Page;
