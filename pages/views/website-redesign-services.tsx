import React from "react";
import { NextPage } from "next";

// components
import { Hero, Section, TestimonialReuseable } from "components/Fawwaz/Sections";
import RedesignSVG from "components/assets/svg/RedesignSVG";
import cardBg from "components/assets/qwe.png";
import Button from "components/Fawwaz/Button";
import VideoFrame from "components/Fawwaz/VideoFrame";
import { InputRangeSlider, Quotation, ServicesCard, WebsiteRedesignServicesContent } from '../../components/WebsiteRedesignService'
import Card from "components/Fawwaz/Card/Card";
import { ChevronDoubleRightIcon, ChevronDownIcon, PlayIcon } from "@heroicons/react/outline";
import VideoPlayer from "../../components/ReactPlayerModal";
import TableOfContent from "components/Fawwaz/Table/TableOfContent";




const Page: NextPage = () => {
    const contentsOfTOC = [
        "Our First-Principle and Data-Driven SEO Process",
        "What does the MUSCLED SEO Management Service look like?",
        "How do I choose the BEST SEO company to help me?",
        "How can SEO help my business grow?",
        "Your SEO Strategy Needs to be Competitive",
        "FAQs about SEO services",
    ];
    return (
        <>
            {/* Hero Section */}
            <div className="h-fit bg-black-70 px-3">
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
            <div className="p-3 bg-red-100">
                <div className="flex flex-wrap gap-10 justify-center py-20">
                    <div className="max-w-[760px] space-y-7">
                        <h2 className="text-4xl">
                            Grow your revenue with website redesign services.
                        </h2>
                        <p className="text-xl leading-5">
                            <span>
                                People take about 15 minutes to consume content, and 60% of them would rather read something more than just a wall of text. Your website needs to be both beautiful and effective. It takes four seconds before your site’s visitor switches to another site, so it's imperative that you invest in a company that can deliver.
                            </span>
                            <br /><br />
                            <span>Make a site that garners attention and makes people stay longer with Muscled Digital Agency. Our in-house design and development team is ready to roll out and make the most of your investment count.</span>
                            <br /><br />

                            <span>
                                Scroll down to see more specific details about how we do our website redesign services and know what kinds of questions you need to ask in order to communicate what your redesigned website is going to be.
                            </span>
                            <br /><br />

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
                        <VideoPlayer
                            Icon={PlayIcon}
                            width="w-fit"
                            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <TestimonialReuseable
                services={[
                    "Every business is different, and that should show on the website that represents it. Muscled Digital Agency offers a range of options that should nail the look you want for your site.",
                    "We will be giving you a plan that was made from the ground up."
                ]}
            />

            {/* Website Redesign Calculator */}
            <div className="bg-red-10">
                <Section className="text-center py-8 lg:py-20 lg:px-52 lg:w-full flex flex-col">
                    <h2 className="text-4xl text-black-80">
                        Website Redesign Calculator — Get a Free Website Redesign Service Estimate!
                    </h2>

                    <p className="py-8 text-black">
                        Curious about the cost of our web redesign services? Whether
                        you’re looking to create a responsive website to increase leads
                        or update your site to reflect your brand’s image for your target audience, our free cost calculator covers everything your company may need with a professional website redesign.
                    </p>

                    <p className="py-8 text-black">
                        Get a free custom quote with our easy-to-use website redesign calculator:
                    </p>
                </Section>
            </div>
            <Section className="py-32 gap-10">
                {/* Quotation */}
                <Quotation
                    title="Request an Instant Quote using  Our Website Design Calculator"
                    desc={`To get a free, instant quote, use the sliders below to indicate your needs, then click the "See Pricing" button. We'll show you both low and high-ended estimates for each service category, so you'll have an overall range of how much it might cost to build such a website.`}
                >
                    <InputRangeSlider
                        inputTitle="Number of pages"
                        inputText="10 - 15"
                        width={180}
                    />

                    <InputRangeSlider
                        inputTitle="Style of design"
                        inputText="Simple yet attractive"
                        width={310}
                    />
                    <InputRangeSlider
                        inputTitle="Copywriting number of pages"
                        inputText="5 - 10"
                        width={180}
                        left={'35%'}
                    />
                    <InputRangeSlider
                        inputTitle="SEO"
                        inputText="30 keywords"
                        width={230}
                    />
                    <InputRangeSlider
                        inputTitle="Responsive Design"
                        inputText="Yes"
                        left={'35%'}
                    />
                    <InputRangeSlider
                        inputTitle="Database Integration"
                        inputText="Basic"
                        left={'35%'}
                    />
                    <InputRangeSlider
                        inputTitle="Ecommerce Functionality"
                        inputText="Basic"
                        left={'35%'}
                    />
                    <InputRangeSlider
                        inputTitle="CMS"
                        inputText="Standard"
                        left={'35%'}
                        width={200}
                    />
                </Quotation>
                {/* Content Section */}
                <Section className="grid grid-cols-1 lg:grid-cols-4 py-12 md:py-32 gap-10">
                    <div className="order-2 lg:order-1 lg:col-span-2">

                        {/* Website redesign service options */}
                        <WebsiteRedesignServicesContent />
                    </div>
                    <TableOfContent

                        bgColor="bg-[#868686]"
                        titleColor="text-black"
                        titleIconColor="black"
                        isOpen={isOpen}
                        setIsOpen={() => setIsOpen((prev) => !prev)}
                        contents={contentsOfTOC.map((content, key) => (
                            <IconItem
                                key={key}
                                title={content}
                                icon={<ChevronDoubleRightIcon className="fill-black-80 w-5 h-5" />}
                                className=" mb-5 w-full items-center text-black-80"
                            />
                        ))}

                    />
                    {/* Request an Instant Quote */}

                </Section>

                {/* Services Card */}
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <ServicesCard
                        services={[
                            "Website Optimization Services",
                            "SEO Speed Optimization Pricing",
                            "SEO Audit",
                            "Convertion Rate Optimization",
                        ]}
                    />

                    <ServicesCard
                        services={[
                            "Digital Marketing Services",
                            "SEO Service Packages",
                            "PPC",
                            "Website SEO Copywriting",
                            "All Internet Marketing Services",
                        ]}
                    />

                    <ServicesCard
                        services={[
                            "SEO Design Services",
                            "SEO Web Design Company",
                            "Web Video Production",
                            "",
                            "",
                        ]}
                    />
                </div>
            </Section>
        </>
    );
};

export default Page;
