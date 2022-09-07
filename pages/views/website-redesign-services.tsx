import React from "react";
import { NextPage } from "next";

// components
import { Hero, Section, TestimonialReuseable } from "components/Fawwaz/Sections";
import RedesignSVG from "components/assets/svg/RedesignSVG";
import { Card } from "components/Fawwaz/Card";
import cardBg from "components/assets/qwe.png";
import Button from "components/Fawwaz/Button";
import VideoFrame from "components/Fawwaz/VideoFrame";
import WebredesignServicesContent from '../../components/WebsiteRedesignService'




const Page: NextPage = () => {
    return (
        <>
            {/* Hero Section */}
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

            {/* Grow your revenue */}
            <div className="p-3 bg-red-10">
                <div className="flex flex-wrap gap-10 justify-center py-20">
                    <div className="max-w-[760px] space-y-7">
                        <h2 className="text-4xl">
                            Grow your revenue with website redesign services.
                        </h2>
                        <p className="md:text-xl">
                            <span>
                                People take about 15 minutes to consume content, and 60% of them would rather read something more than just a wall of text. Your website needs to be both beautiful and effective. It takes four seconds before your site’s visitor switches to another site, so it's imperative that you invest in a company that can deliver.
                            </span>
                            <br />
                            <br />
                            <span>Make a site that garners attention and makes people stay longer with Muscled Digital Agency. Our in-house design and development team is ready to roll out and make the most of your investment count.</span>
                            <br />
                            <br />
                            <span>
                                Scroll down to see more specific details about how we do our website redesign services and know what kinds of questions you need to ask in order to communicate what your redesigned website is going to be.
                            </span>
                            <br />
                            <br />
                            <span>
                                If you’re looking for a top-notch and competitive company, schedule Muscled Digital Agency a call.
                            </span>
                        </p>
                    </div>
                    <div className="w-full md:w-[400px]">
                        <Card className="max-w-[440px] w-full p-6 rounded-md relative self-start my-3">
                            <img
                                src={cardBg.src}
                                alt={cardBg.src}
                                className="absolute top-0 left-0 w-full h-full z-10"
                            />
                            <p className="relative text-white max-w-[190px] z-20">
                                Looking for custom plans and pricing? Request a
                                proposal to receive yours.
                            </p>
                            <Button
                                bgColor="bg-black"
                                textColor="text-white"
                                className="mt-6 relative z-20">
                                Request a Proposal
                            </Button>
                        </Card>
                        <div className="relative min-w-[200px] w-full max-w-[400px] h-[320px] mx-auto bg-white-gray md:mx-0">
                            <VideoFrame className="absolute w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <TestimonialReuseable
                p1="Every business is different, and that should show on the website that represents it. Muscled Digital Agency offers a range of options that should nail the look you want for your site."
                p2="We will be giving you a plan that was made from the ground up."
            />

            {/* Website Redesign Calculator */}
            <div className="bg-red-10">
                <Section className="text-center py-20 px-52">
                    <h2 className="text-4xl text-black-80">
                        Website Redesign Calculator — Get a Free Website Redesign Service Estimate!
                    </h2>

                    <p className="py-8 text-black-70">
                        Curious about the cost of our web redesign services? Whether
                        you’re looking to create a responsive website to increase leads
                        or update your site to reflect your brand’s image for your target audience, our free cost calculator covers everything your company may need with a professional website redesign.
                    </p>

                    <p className="py-8 text-black-70">
                        Get a free custom quote with our easy-to-use website redesign calculator:
                    </p>
                </Section>
            </div>
            <Section className="grid grid-cols-1 lg:grid-cols-4 py-32 gap-10">
                <div className="order-2 lg:order-1 lg:col-span-2">

                    {/* Website redesign service options */}
                    <WebredesignServicesContent />
                </div>

                {/* Request an Instant Quote */}

            </Section>
        </>
    );
};

export default Page;
