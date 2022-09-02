import React from "react";
import { NextPage } from "next";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";

import Hero from '../../components/Fawwaz/Sections/Hero';
import OurPartners from '../../components/Fawwaz/Sections/OurPartners';
import PricingPlan from '../../components/Fawwaz/Sections/PricingPlan';
import PromotionOne from '../../components/Fawwaz/Sections/PromotionOne';
import PromotionTwo from '../../components/Fawwaz/Sections/PromotionTwo';
import PromotionThree from '../../components/Fawwaz/Sections/PromotionThree';
import LandingTestimonials from 'components/Fawwaz/Sections/LandingTestimonials';
import ServiceTable from 'components/Fawwaz/Sections/ServiceTable';
import GuideDetail from 'components/Fawwaz/Sections/GuideDetail';
import ImportantLinks from 'components/Fawwaz/Sections/ImportantLinks';

 const Page: NextPage = () => {

	return (
        <>
            <section>
                <Hero 
                    title={"Landing Page Design Services for PPC Campaigns"} 
                    description = {''} 
                    // heroSVG = {FunnelSVG}
                    input 
                />
            </section>
            <section>
                <OurPartners />
            </section>
            <section>
                <PricingPlan />
            </section>
            <section>
                <PromotionOne 
                    title='Improving your sales with Landing Page Design Services'
                />
            </section>

            <section>
                <LandingTestimonials />
            </section>

            <section>
                <PromotionTwo />
            </section>
            
            <section>
                <PromotionThree />
            </section>

            <section>
                <ServiceTable />
            </section>

            <section>
                <GuideDetail />
            </section>

            <section>
                <ImportantLinks />
            </section>
        </>
    )
}


export default Page