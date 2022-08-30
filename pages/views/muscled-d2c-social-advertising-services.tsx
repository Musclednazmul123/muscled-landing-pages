import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import MuscledD2CSVG from "components/assets/svg/MuscledD2CSVG";
import logo1 from "components/assets/logo/logo1.png";
import logo3 from "components/assets/logo/logo3.png";
import logo4 from "components/assets/logo/logo4.png";
import logo5 from "components/assets/logo/logo5.png";
import logo6 from "components/assets/logo/logo6.png";
import logo7 from "components/assets/logo/logo7.png";
import Logo from "components/Fawwaz/Logo";
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
        <h2 className="text-4xl text-center">
          Explore Direct-to-Consumer Social Service Programs.
        </h2>

        {/* <p className="py-14 flex flex-wrap justify-center gap-1">
          Need help?
          <span className="underline cursor-pointer">Schedule a call now</span>
        </p> */}

        <div className="flex flex-wrap justify-center lg:justify-between gap-2">
          <Card className="rounded-sm border-2 max-w-[400px] w-full">
            <CardHeader title="Aggressive" rate="$4,500">
              <AiFillStar className="card-icon fill-black-50" />
            </CardHeader>
            <CardContent className="space-y-11">
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Up to 2 networks"
                className="mt-2 justify-center"
              />
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Shopping cart abandonment testing"
                className="mt-4 justify-center"
              />
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Heatmap and click stream testing on 8 pages"
                className="mt-4 justify-center"
              />
            </CardContent>
            <CardFooter />
          </Card>
          <Card className="rounded-sm border-2 max-w-[400px] w-full">
            <CardHeader title="Market Leader" rate="$6,300" type="premium">
              <div className="flex">
                <AiFillStar className="card-icon fill-black-70" />
                <AiFillStar className="card-icon fill-black-70" />
              </div>
            </CardHeader>
            <CardContent className="space-y-11">
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="4 initial website user testing videos"
                className="mt-2 justify-center"
              />
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Shopping cart abandonment testing"
                className="mt-4 justify-center"
              />
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Heatmap and click stream testing on 8 pages"
                className="mt-4 justify-center"
              />
            </CardContent>
            <CardFooter />
          </Card>
          <Card className="rounded-sm border-2 max-w-[400px] w-full">
            <CardHeader title="Enterprise" rate="$7,200" type="ultimate">
              <div className="flex">
                <AiFillStar className="card-icon fill-black-80" />
                <AiFillStar className="card-icon fill-black-80" />
                <AiFillStar className="card-icon fill-black-80" />
              </div>
            </CardHeader>
            <CardContent className="space-y-11">
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="4 initial website user testing videos"
                className="mt-2 justify-center"
              />
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Shopping cart abandonment testing"
                className="mt-4 justify-center"
              />
              <IconItem
                icon={<FaCheckCircle size={15} />}
                title="Heatmap and click stream testing on 8 pages"
                className="mt-4 justify-center"
              />
            </CardContent>
            <CardFooter />
          </Card>
        </div>

        <p className="underline text-center mt-14 mb-24 cursor-pointer">
          See Full Deliverables
        </p>
      </Section>
    </div>
  );
};

export default Page;
