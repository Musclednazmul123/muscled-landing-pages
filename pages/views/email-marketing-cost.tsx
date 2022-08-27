import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SEOMarketingSVG from "components/assets/svg/SEOMarketingSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "components/assets/logo/logo1.png";
import Link from "next/link";
import Button from "components/Button";
import Signal1 from "components/assets/svg/Signal1";
import Signal2 from "components/assets/svg/Signal2";
import Signal3 from "components/assets/svg/Signal3";

const Page: NextPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <Section className="text-center pt-14">
                <h1 className="text-5xl sm:text-6xl leading-normal sm:leading-normal">
                    How much does Email Marketing Cost in 2022?
                </h1>
                <p className="text-2xl py-7 leading-10">
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
            <Section className="text-center py-16">
                <h3 className="text-black-50 text-2xl">Our Partners</h3>

                <div className="pt-5 flex flex-wrap justify-center sm:justify-between pb-12 gap-6">
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                    <Logo src={logo.src} width={154} height={34} />
                </div>
            </Section>

            {/* Pricing Plan section */}
            <Section className="pt-16">
                <h1 className="text-4xl sm:text-5xl leading-normal sm:leading-normal text-center">
                    What are the prices for email marketing services?
                </h1>
                <p className="text-xl leading-10 py-3 text-center">
                    Do you want to know how much email marketing services cost?
                    Check out Muscled pricing now, or keep reading to find out
                    how much email marketing costs.
                </p>

                <div className="flex flex-wrap">
                    <div className="md:w-1/2 my-1.5 xl:w-1/3 w-full px-2.5">
                        <div className="w-full overflow-hidden rounded-lg border border-black-70">
                            <div className="flex flex-col items-center justify-center py-10 gap-4 bg-pink-3">
                                <Signal1 />
                                <p className="uppercase text-2xl font-bold">
                                    Basic Plan
                                </p>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <p className="font-bold text-4xl text-[#C40000]">
                                        $300
                                    </p>
                                    <p className="text-xl text-[rgba(0, 0, 0, 0.5)]">
                                        per month
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col py-10 px-8 gap-8 bg-white">
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        1 Email
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Lead generation reports
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Campaign and target strategy
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Split testing subject lines
                                    </p>
                                </div>
                            </div>
                            <div className="py-10 px-5 gap-10 flex flex-col items-center bg-white border-t border-black-50">
                                <p className="text-[#808080] font-semibold text-xl">
                                    $900 INITIAL INVESTMENT
                                </p>
                                <button className="py-4 px-10 text-white bg-[#1F1818] rounded font-semibold">
                                    Send A Proposal
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-2.5 w-full md:w-1/2 my-1.5 xl:w-1/3">
                        <div className="w-full overflow-hidden rounded-lg border border-black-70">
                            <div className="flex flex-col items-center justify-center py-10 gap-4 bg-pink-6">
                                <Signal2 />
                                <p className="uppercase text-2xl font-bold">
                                    Market Leader Plan
                                </p>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <p className="font-bold text-4xl text-[#C40000]">
                                        $600
                                    </p>
                                    <p className="text-xl text-[rgba(0, 0, 0, 0.5)]">
                                        per month
                                    </p>
                                </div>
                            </div>
                            <div className="py-10 flex flex-col px-8 gap-8 bg-white">
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Up to 2 Emails
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Lead generation reports
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Campaign and target strategy
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Split testing subject lines
                                    </p>
                                </div>
                            </div>
                            <div className="py-10 px-5 gap-10 flex flex-col items-center bg-white border-t border-black-50">
                                <p className="text-[#808080] font-semibold text-xl">
                                    $900 INITIAL INVESTMENT
                                </p>
                                <button className="py-4 px-10 text-white bg-[#1F1818] rounded font-semibold">
                                    Send A Proposal
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-2.5 md:w-1/2 my-1.5 xl:w-1/3">
                        <div className="w-full overflow-hidden rounded-lg border border-black-70">
                            <div className="flex flex-col items-center justify-center py-10 gap-4 bg-pink-9">
                                <Signal3 />
                                <p className="uppercase text-2xl font-bold">
                                    Enterprise Plan
                                </p>
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <p className="font-bold text-4xl text-[#C40000]">
                                        $1200
                                    </p>
                                    <p className="text-xl text-[rgba(0, 0, 0, 0.5)]">
                                        per month
                                    </p>
                                </div>
                            </div>
                            <div className="py-10 flex flex-col px-8 gap-8 bg-white">
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Up to 4 emails
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Lead generation reports
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Campaign and target strategy
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl text-black-70">
                                        Split testing subject lines
                                    </p>
                                </div>
                            </div>
                            <div className="py-10 px-5 gap-10 flex flex-col items-center bg-white border-t border-black-50">
                                <p className="text-[#808080] font-semibold text-xl">
                                    $900 INITIAL INVESTMENT
                                </p>
                                <button className="py-4 px-10 text-white bg-[#1F1818] rounded font-semibold">
                                    Send A Proposal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-9 flex justify-center items-center">
                    <p className="text-2xl text-[#C40000] underline">
                        See Full Deliverables
                    </p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#C40000"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </Section>
        </div>
    );
};

export default Page;
