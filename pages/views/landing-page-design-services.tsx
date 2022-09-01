import React from "react";
import { NextPage } from "next";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";

import Hero from '../../components/Fawwaz/Sections/Hero';
import OurPartners from '../../components/Fawwaz/Sections/OurPartners';
import PricingPlan from '../../components/Fawwaz/Sections/PricingPlan';
import PromotionOne from '../../components/Fawwaz/Sections/PromotionOne';

 const Page: NextPage = () => {

	return (
        <>
            <Hero 
                title={"Landing Page Design Services for PPC Campaigns"} 
                description = {''} 
                // heroSVG = {FunnelSVG}
                input 
            />
            <OurPartners />
            <PricingPlan />
            <section>
                <PromotionOne 
                    title='Improving your sales with Landing Page Design Services'
                />
            </section>
        </>
    )
}


export default Page