import { AiOutlineCheck, AiFillPhone } from "react-icons/ai";
import Button from "components/Fawwaz/Button";
import React from "react";
import { CardHeaderDataProps } from "components/common/types";
import { BsDot } from "react-icons/bs";

export const testimonialData = {
  para1: `"The  Muscled team is the perfect package for our social media needs!" They handle everything from ad design to targeted marketing to page administration and monitoring!"`,
  para2: `Manager of a Store`,
  buttonLabel: `See Our Clients’ Testimonials`,
};

export const AdditionalSocailMediaMetaData = {
  heading: `Additional social media marketing services from Muscled`,
  para: ` Looking for platform-specific social marketing services? Check out these
  resources:`,
  items: [
    {
      itemTitle: "Ecommerce Social Media Advertising",
      itemPara: ` Drive traffic to your ecommerce store and start selling more online
  with social media ads!`,
      buttonLabel: "Lear more",
    },
    {
      itemTitle: "Ecommerce Social Media Advertising",
      itemPara: ` Drive traffic to your ecommerce store and start selling more online
    with social media ads!`,
      buttonLabel: "Lear more",
    },
    {
      itemTitle: "Ecommerce Social Media Advertising",
      itemPara: ` Drive traffic to your ecommerce store and start selling more online
    with social media ads!`,
      buttonLabel: "Lear more",
    },
  ],
};

export const SocialMediaAdvertisingMetaData = {
  MainHeading: " Muscled´s D2C Social Media Advertising Services",
  FeatureHeading: "Features",
  FirstColHeading: "Integrations - Pixel",
  SecondColHeading: "Integrations - Catalogs",
  item: [
    {
      heading: "Number of Posts per Month",
      colData: "20",
      colData2: "30",
    },
    {
      heading: "Custom Images per Month",
      colData: "10",
      colData2: "12",
    },
    {
      heading: "Number of Networks",
      colData: "Up to 2",
      colData2: "Up to 3",
    },
    {
      heading: "Social Media Assets Included",
      colData: "1.5",
      colData2: "2",
    },
    {
      heading: "Vertical Content Creation",
      colData: "Add $1,200/month",
      colData2: "Add $1,200/month",
    },
    {
      heading: "Social Media Marketing Strategy",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Social Media Competitive Analysis",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Social Media Brand Reputation Analysis",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Social Media Audit + Recommendations",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Dedicated Social Media Account Manager",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Daily Monitoring of Included Social Assets",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "48 Business Hour or Less Customer Response Time",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Personal Social Media Consultations per Month",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading:
        "Access to Muscled editorial calendar & content publishing tools",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Standard Monthly Reporting and Analysis",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Network Setup & Optimization",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: `Cover Photo & Profile Photo Design/Optimization`,
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "450+ SMEs behind campaign driving results",
      colData: <AiOutlineCheck className="mx-auto fill-green-500" />,
      colData2: <AiOutlineCheck className="mx-auto fill-green-500" />,
    },
    {
      heading: "Boosted Posts per Month",
      colData: "4",
      colData2: "6",
    },
    {
      heading: "Required Boosted Post Spend",
      colData: "$200",
      colData2: "$300",
    },
    {
      heading: "Setup Fee",
      colData: "$6,300.00",
      colData2: "$7,200.00",
    },
    {
      heading: "Number of Posts per Month",
      colData: "20",
      colData2: "30",
    },
    {
      heading: "Ongoing Management Fee",
      colData: "$4,200.00",
      colData2: "$4,800.00",
    },
    {
      heading: (
        <>
          <p>Give Us a Call if You Need Information</p>
          <div className="flex gap-2 items-center mt-2 cursor-pointer">
            <AiFillPhone className="fill-sky-500" />
            <p className="text-sky-500 font-bold">888-601-5359</p>
          </div>
        </>
      ),
      colData: (
        <Button bgColor="bg-black" textColor="text-white" className="mx-auto">
          Get Started
        </Button>
      ),
      colData2: (
        <Button bgColor="bg-black" textColor="text-white" className="mx-auto">
          Get Started
        </Button>
      ),
    },
  ],
};

export const cardData: CardHeaderDataProps[] = [
  {
    title: "Aggressive",
    rate: "4,500",
    description: "or 18%, whichever is higher",
    iconItems: [
      {
        iconTitle: "Up to 2 networks",
        class: "mt-2",
        // icon: <FaCheckCircle size={15} />,
      },
      {
        iconTitle: "Up to 5 campaigns",
        class: "mt-4",
        // icon: <FaCheckCircle size={15} />,
      },
      {
        iconTitle: "Up to 20 ads",
        class: "mt-4",
        // icon: <FaCheckCircle size={15} />,
      },
    ],
    isFooterDescription: true,
    footerDescition: "$1,550 MIN INITIAL SETUP FEE",
    buttonLabel: "Send Proposal",
  },
  {
    title: "Market Leader",
    rate: "6,300",
    type: "premium",
    description: "or 18%, whichever is higher",
    iconItems: [
      {
        iconTitle: "Up to 2 networks",
        class: "mt-2",
        // icon: <FaCheckCircle size={15} />,
      },
      {
        iconTitle: "Up to 5 campaigns",
        class: "mt-4",
        // icon: <FaCheckCircle size={15} />,
      },
      {
        iconTitle: "Up to 20 ads",
        class: "mt-4",
        // icon: <FaCheckCircle size={15} />,
      },
    ],
    isFooterDescription: true,
    footerDescition: "$1,550 MIN INITIAL SETUP FEE",
    buttonLabel: "Send Proposal",
  },
  {
    title: "Enterprise",
    rate: "7,200",
    type: "ultimate",
    description: "or 18%, whichever is higher",
    iconItems: [
      {
        iconTitle: "Up to 2 networks",
        class: "mt-2",
        // icon: <FaCheckCircle size={15} />,
      },
      {
        iconTitle: "Up to 5 campaigns",
        class: "mt-4",
        // icon: <FaCheckCircle size={15} />,
      },
      {
        iconTitle: "Up to 20 ads",
        class: "mt-4",
        // icon: <FaCheckCircle size={15} />,
      },
    ],
    isFooterDescription: true,
    footerDescition: "$1,550 MIN INITIAL SETUP FEE",
    buttonLabel: "Send Proposal",
  },
];

export const TableMetaData = {
  heading: " Table of Contents",
  items: [
    {
      icon: <BsDot />,
      title: "Some D2C Social Media Examples",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] pt-2 w-[400px]",
    },
    {
      icon: <BsDot />,
      title: "What do Muscled´s social media advertising services include?",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] mt-10",
    },
    {
      icon: <BsDot />,
      title: "What Kind of social media ads fit D2C brands?",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] mt-10",
    },
    {
      icon: <BsDot />,
      title: "The Benefits of direct to consumer social media advertising",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] mt-10",
    },
    {
      icon: <BsDot />,
      title: "Why is D2C social advertising for?",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] mt-10",
    },
    {
      icon: <BsDot />,
      title: "Launch your custom D2C social ads right away!",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] mt-10",
    },
    {
      icon: <BsDot />,
      title: "FAQs",
      className: "underline decoration-[#5F27BD] text-[#5F27BD] mt-10",
    },
    {
      icon: <BsDot />,
      title:
        "Get the digital workout for your store with Muscled Digital Agency!",
      className:
        "underline decoration-[#5F27BD] text-[#5F27BD] pb-[10px] mt-10",
    },
  ],
};
