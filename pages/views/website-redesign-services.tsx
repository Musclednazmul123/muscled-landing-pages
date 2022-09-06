import React from "react";
import { NextPage } from "next";

// components
import { Hero } from "components/Fawwaz/Sections";
import RedesignSVG from "components/assets/svg/RedesignSVG";



const Page: NextPage = () => {
    return (
        <>
            <div className="min-h-[890px] bg-black-70 px-3 lg:px-0">
                <Hero
                    title="Website Redesign Services: Get Your Revenue a Workout!"
                    description="Our goal is to improve your bottom line. Expect to 
                    get more traffic, better leads, and an increase in your revenue. 
                    All that you need to know about Muscled Digital Agency’s 
                    competitive website redesign services is right below. You 
                    can also fill out the form below to get an exact quote!"
                    heroSVG={<RedesignSVG className="w-80 lg:w-full" />}
                    // input
                    button
                />
            </div>
        </>
    );
};

export default Page;
