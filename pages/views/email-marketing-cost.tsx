import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "components/assets/logo/logo1.png";
import Link from "next/link";
import Button from "components/Button";

const Page: NextPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <Section className="text-center pt-14">
                <h1 className="text-5xl sm:text-6xl leading-normal sm:leading-normal">
                    How much does Email Marketing Cost in 2022?
                </h1>
                <p className="text-2xl py-7">
                    Email marketing allows you to communicate directly with
                    customers and prospects, and it has a very high ROI — $44
                    for every $1 spent. Continue reading to learn more about how{" "}
                    <span className="underline text-[#0095B6] leading-10">
                        email marketing can help your business
                    </span>{" "}
                    and how much you should pay for email marketing services.
                </p>
                <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
                    <button className="font-semibold py-8 border border-[#1f1818] bg-[#1f1818] rounded text-center text-white w-64 sm:w-80 text-xl">
                        View Email Marketing Plans
                    </button>
                    <button className="font-semibold py-8 border border-black text-black rounded text-center w-64 sm:w-80 text-xl">
                        Get A Free Quote
                    </button>
                </div>
            </Section>

            {/* Our partners section */}
            <Section className="text-center pt-16">
                <h3 className="text-black-50 text-2xl">Our Partners</h3>

                <div className="pt-5 flex flex-wrap justify-center sm:justify-between pb-12 gap-6">
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                </div>
            </Section>
        </div>
    );
};

export default Page;
