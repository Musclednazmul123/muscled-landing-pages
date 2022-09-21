import { FC } from "react";

import { Section } from "./Fawwaz/Sections";
import Button from "./Fawwaz/Button";
import { Counter, CounterBox } from "./Fawwaz/Counter";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { Input } from "./Fawwaz/Form";

import footerIcon from "./assets/footer-roket-1.png";
import FooterImage from "./assets/FooterImage.png";
import metaVusiness from "./assets/metaVusiness.png";
import googlePremier from "./assets/googlePremier.png";
import honorRoll from "./assets/honorRoll.png";
import millenials from "./assets/millenials.png";
import bestplaces from "./assets/bestplaces.png";

import { IProps } from "../types/types";

const Footer: FC<IProps> = ({ className }) => {
  return (
    <>
      <div
        className={`bg-red-600 text-white flex flex-wrap ${
          className ? className : ""
        }`}
      >
        <Section className="py-10">
          <div className="grid grid-cols-3 gap-5">
            <img
              className="col-span-1"
              src={footerIcon.src}
              alt="footer-icon"
            />
            <div className="flex flex-wrap items-center col-span-2 gap-10 ml-0">
              <Counter className="text-white">
                <h4 className="text-lg text-white md:text-2xl">
                  We've driven over
                </h4>
                <div className="flex gap-2 md:gap-4">
                  {[6, 6, 6, 6, 6, 6].map((item: number, idx: number) => (
                    <CounterBox
                      key={idx}
                      className="text-[#C40000] font-[500]  "
                    >
                      {item}
                    </CounterBox>
                  ))}
                </div>
                <h4 className="text-lg text-white md:text-2xl">
                  leads for clients.
                </h4>
              </Counter>
            </div>
          </div>
          <p className="py-6 text-2xl font-semibold">
            Discover how we can help your business grow
          </p>
          <div className="relative w-full max-w-[600px]">
            <Input
              placeholder="Enter your website"
              className="w-full text-black md:py-6"
              type="text"
            />
            <Button
              bgColor="bg-[#000000]"
              textColor="text-white"
              className="mt-4 md:absolute md:top-3 md:right-4 md:mt-0"
            >
              Send me a Proposal
              <BiRightArrowAlt />
            </Button>
          </div>
        </Section>
        <div className="w-full pt-24 pb-12 pl-4 pr-24 text-right bg-red-800 lg:w-4/12">
          <p className="text-2xl">
            MUSCLED has been a pleasure to work with on our SEO needs and I look
            forward to working with them on future projects.
          </p>
          <div className="font-bold text-white mt-9">
            <h4 className="text-white">Owner</h4>
            <p>ARIZONA GARAGE DOOR SUPPLIER</p>
          </div>
          <div className="flex items-center justify-end gap-4 mt-9">
            <Button bgColor="bg-white-70" textColor="text-black" rounded>
              <AiOutlineArrowLeft size={15} />
            </Button>
            <Button bgColor="bg-white" textColor="text-black" rounded>
              <AiOutlineArrowRight size={15} />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex items-center w-full py-10 -mt-6 bg-red-900 rounded-t-3xl">
        <Section>
          <div className="flex flex-wrap items-center justify-center gap-10 xl:gap-32">
            <div className="flex flex-wrap items-center justify-center gap-10 md:justify-start">
              <div className="relative border-[10px] rounded-full border-[#C4000070]">
                <img src={FooterImage.src} alt={FooterImage.src} />
              </div>
              <div className="flex flex-col justify-between text-white">
                <p>Ready to speak with a marketing expert? Give us a ring</p>
                <h3 className="text-4xl text-white">508-504-9466</h3>
              </div>
            </div>
            <div className="flex items-center gap-10 text-white">
              <div className="flex flex-col font-semibold">
                <h4 className="text-xl text-right text-white">1.6 million</h4>
                <p className="text-xs">Hours of expertise</p>
              </div>
              <div className="flex flex-col font-semibold">
                <h4 className="text-xl text-right text-white">450+</h4>
                <p className="text-xs">
                  Digital Marketing
                  <br />
                  Masters On Staff
                </p>
              </div>
              <div className="flex flex-col font-semibold">
                <h4 className="text-xl text-right text-white">1,128 </h4>
                <p className="text-xs">Website Launched</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <div className="w-full bg-black-footer">
        <Section className="grid gap-10 py-16 lg:grid-cols-5">
          <div className="text-white">
            <h3 className="text-2xl font-semibold text-white">Services</h3>
            <div className="space-y-10 text-white mt-11">
              <p>Digital Marketing Services</p>
              <p>SEO Services</p>
              <p>PPC Services</p>
              <p>Web Design Services</p>
              <p>Social Media Services</p>
              <p>Digital Advertising Services</p>
              <p>Content Marketing Services</p>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-semibold text-white">
              Knowledge Base
            </h3>
            <div className="space-y-10 text-white-70 mt-11">
              <p>Digital Marketing</p>
              <p>Content Marketing</p>
              <p>Social Media</p>
              <p>Web Design </p>
              <p>SEO</p>
              <p>PPC</p>
              <p>Amazon</p>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-semibold text-white">Company</h3>
            <div className="space-y-10 text-white-70 mt-11">
              <p>Digital Marketing Agency</p>
              <p>SEO Agency</p>
              <p>PPC Agency</p>
              <p>Content Marketing Agency</p>
              <p>Social Media Agency</p>
              <p>Web Design Agency</p>
              <p>Industries We Serve</p>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-semibold text-white">Resources</h3>
            <div className="space-y-10 text-white-70 mt-11">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Careers</p>
              <p>Phishing Scam Alert</p>
              <p>Locations</p>
              <p>Community Impact</p>
              <p>Tools</p>
            </div>
          </div>
          <div className="space-y-10 text-white">
            <p className="text-xs text-white-70">
              REVENUE DRIVEN FOR OUR CLIENTS
            </p>
            <h3 className="text-2xl font-semibold text-white">
              $3,021,182,299
            </h3>
          </div>
        </Section>

        {/* Partner */}
        <div className=" h-[2px] mx-24 bg-white" />

        <Section className="flex py-[80px] text-white items-center justify-between px-0">
          <div className="w-[516px]">
            <p className="mb-3 text-sm">
              WebFX® 1995-2022 | Celebrating 25+ Years of Digital Marketing
              Excellence
            </p>
            <p className="text-sm ">
              Call Toll Free: 508-504-9466 Privacy & Terms of Use Sitemap
            </p>
          </div>

          <div className="flex items-center justify-between w-[670px]">
            <img
              src={bestplaces.src}
              alt="partner-logo"
              className="w-[138px]"
            />
            <img
              src={googlePremier.src}
              alt="partner-logo"
              className="w-[86px]"
            />
            <img src={honorRoll.src} alt="partner-logo" className="w-[61px]" />
            <img
              src={millenials.src}
              alt="partner-logo"
              className="w-[114px]"
            />
            <img
              src={metaVusiness.src}
              alt="partner-logo"
              className="w-[179px]"
            />
          </div>
        </Section>
      </div>
    </>
  );
};

export default Footer;