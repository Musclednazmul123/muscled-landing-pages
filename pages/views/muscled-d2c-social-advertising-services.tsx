import React from "react";
import { ReactNode } from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import MuscledD2CSVG from "components/assets/svg/MuscledD2CSVG";
import logo1 from "components/assets/logo/logo1.png";
import logo3 from "components/assets/logo/logo3.png";
import logo4 from "components/assets/logo/logo4.png";
import logo5 from "components/assets/logo/logo5.png";
import logo6 from "components/assets/logo/logo6.png";
import logo7 from "components/assets/logo/logo7.png";
import DirectToConsumer from "components/common/DirectToConsumer";
import PartnerLogoSection from "components/common/Partner";
import {
  Card,
  CardHeader,
  CardContent,
  IconItem,
  CardFooter,
} from "components/Fawwaz/Card";

import { AiFillPhone, AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

export interface CardHeaderDataProps {
  title: string;
  rate: string;
  type?: "basic" | "premium" | "ultimate";
  description?: string;
  iconItems: { [key: string]: string }[];
  isFooterDescription?: boolean;
  footerDescition?: string;
  buttonLabel?: string;
}
const cardData: CardHeaderDataProps[] = [
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

const Page: NextPage = () => {
  return (
    <div>
      {/* First Section */}
      <div className=" bg-black-70 px-3 lg:px-0">
        <Hero
          title="With Muscled D2C Social Advertising Services, you can attract, engage, and sell."
          description="With over 5 billion active users on social media today, social platforms are prime territory for reaching a large direct-to-consumer (D2C) audience. If you sell B2C products, social ads increase your online reach, engage customers, and help you sell, all of which contribute to your bottom line. Continue reading to find out how Muscled fyi, a Meta Business Partner agency, can drive results with our direct-to-consumer social media advertising services!"
          heroSVG={<MuscledD2CSVG className="w-80 lg:w-full" />}
          input
        />
      </div>
      {/* Our partner section */}
      <PartnerLogoSection
        noOfLogos={[logo1, logo3, logo4, logo5, logo6, logo7]}
      />

      {/* Third section */}
      <Section>
        <h2 className="text-4xl text-center mt-10 mb-14">
          Explore Direct-to-Consumer Social Service Programs.
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-between gap-2">
          {cardData &&
            cardData.map((cardItem) => {
              return (
                <Card className="rounded-sm border-2 max-w-[400px] w-full">
                  <CardHeader
                    title={cardItem?.title}
                    rate={cardItem?.rate}
                    description={cardItem?.description}
                    type={cardItem?.type}
                  >
                    <AiFillStar className="card-icon fill-black-50" />
                  </CardHeader>
                  <CardContent className="space-y-11">
                    {cardItem &&
                      cardItem.iconItems.map((item) => (
                        <IconItem
                          icon={<FaCheckCircle size={15} />}
                          title={item?.iconTitle}
                          className={item?.class}
                        />
                      ))}
                  </CardContent>
                  <CardFooter
                    isFooterDescription={cardItem?.isFooterDescription}
                    footerDescition={cardItem?.footerDescition}
                    buttonLabel={cardItem?.buttonLabel}
                  />
                </Card>
              );
            })}
        </div>
      </Section>
      {/* Section 4 */}
      <DirectToConsumer />
    </div>
  );
};

export default Page;
