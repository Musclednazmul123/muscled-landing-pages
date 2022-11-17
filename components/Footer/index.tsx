import { FC } from "react";
import Button from "../Fawwaz/Button";
import { Counter, CounterBox } from "../Fawwaz/Counter";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

import footerIcon from "../assets/footer-roket-1.png";
import FooterImage from "../assets/FooterImage.png";
import metaVusiness from "../assets/metaVusiness.png";
import googlePremier from "../assets/googlePremier.png";
import honorRoll from "../assets/honorRoll.png";
import millenials from "../assets/millenials.png";
import bestplaces from "../assets/bestplaces.png";
import TestimonialSlider from "./TestimonialSlider";
import { IProps } from "../../types/types";

const Footer: FC<IProps> = ({ className }) => {
  return (
    <>
      {/* First Footer Section */}
      <div
        className={`text-white flex  ${
          className ? className : ""
        } min-h-[512px]`}
      >
        <div className="bg-[#C40000] w-[58.3%] flex flex-col justify-center items-center">
          <div className="w-[658px] flex flex-col items-start justify-center  gap-y-[20px]">
            <div className="flex items-start gap-x-9 ">
              <img
                className="w-[163px] h-[200px]"
                src={footerIcon.src}
                alt="footer-icon"
              />
              <Counter className=" flex flex-col gap-y-[12px]">
                <h4 className="text-2xl text-white md:text-2xl font-[500] leading-[39px]">
                  We've driven over
                </h4>
                <div className="flex items-start gap-[9px]">
                  {[6, 6, 6, 6, 6, 6].map((item: number, idx: number) => (
                    <CounterBox
                      key={idx}
                      className="text-[#C40000] font-[600]  "
                    >
                      {item}
                    </CounterBox>
                  ))}
                </div>
                <h4 className="text-2xl text-white md:text-2xl font-[500] leading-[39px]">
                  leads for clients.
                </h4>
              </Counter>
            </div>
            <p className="text-2xl text-white md:text-2xl font-[500] leading-[39px]">
              Discover how we can help your business grow
            </p>
            <div className="flex w-full bg-white/60 rounded-lg py-[12px] px-[20px] h-[79px]">
              <input
                placeholder="Enter your website"
                className="text-[#141010]  font-[500] rounded-md outline-none flex-1 px-1 bg-white/0 
                text-lg placeholder:text-[#141010] placeholder:font-[400]"
                type="text"
              />
              <button
                className="bg-[#141010] text-[16px] py-[16px] px-[24px] flex justify-center 
              items-center text-white rounded-lg font-[500] gap-x-[8px]"
              >
                Send me a Proposal
                <BiRightArrowAlt className="w-[28px] h-[28px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#8E0000] flex-1 flex flex-col justify-center pl-4 pb-10 ">
          <TestimonialSlider />
        </div>
      </div>

      {/* Second Contacts Section  */}

      <div
        className="relative -top-14 flex flex-col items-center justify-center w-full  bg-[#6E0000] 
      rounded-tl-[57px] rounded-tr-[57px] min-h-[222px]"
      >
        <div className="flex flex-wrap items-center justify-evenly gap-10 w-full">
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
            <div className="border-[10px] rounded-full border-[#C4000070]">
              <img
                src={FooterImage.src}
                alt={FooterImage.src}
                className="w-[112px] h-[112px]"
              />
            </div>
            <div className="flex flex-col gap-y-[18px] text-white">
              <p className="text-lg font-[500]">
                Ready to speak with a marketing expert? Give us a ring
              </p>
              <h3 className="text-[40px] font-[500] text-white">
                508-504-9466
              </h3>
            </div>
          </div>
          <div className="flex  justify-start gap-x-[77px] text-white">
            <div className="flex flex-col">
              <h4 className="text-xl text-right text-white font-[500]">
                1.6 million
              </h4>
              <p className="text-xs">Hours of expertise</p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl text-right text-white font-[500]">450+</h4>
              <p className="text-xs">
                Digital Marketing
                <br />
                Masters On Staff
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl text-right text-white font-[500]">
                1,128{" "}
              </h4>
              <p className="text-xs">Website Launched</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Footer Links Section*/}

      <div className="w-full bg-black-footer -mt-14">
        <div
          className="flex gap-x-3 py-[74px] w-[1240px] xl_2:w-[90%] mx-auto 
        min-h-[642px] justify-between"
        >
          <div className="grid gap-[40px] lg:grid-cols-4">
            <div className="text-white flex flex-col gap-y-[30px]">
              <h3 className="text-2xl font-[500] text-white uppercase">
                Services
              </h3>
              <div className="flex flex-col gap-y-[35px] text-white-70">
                <p>Digital Marketing Services</p>
                <p>SEO Services</p>
                <p>PPC Services</p>
                <p>Web Design Services</p>
                <p>Social Media Services</p>
                <p>Digital Advertising Services</p>
                <p>Content Marketing Services</p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-y-[30px]">
              <h3 className="text-2xl font-[500] text-white uppercase">
                Knowledge Base
              </h3>
              <div className="flex flex-col gap-y-[35px] text-white-70 ">
                <p>Digital Marketing</p>
                <p>Content Marketing</p>
                <p>Social Media</p>
                <p>Web Design </p>
                <p>SEO</p>
                <p>PPC</p>
                <p>Amazon</p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-y-[30px]">
              <h3 className="text-2xl font-[500] text-white uppercase">
                Company
              </h3>
              <div className="flex flex-col gap-y-[35px] text-white-70 ">
                <p>Digital Marketing Agency</p>
                <p>SEO Agency</p>
                <p>PPC Agency</p>
                <p>Content Marketing Agency</p>
                <p>Social Media Agency</p>
                <p>Web Design Agency</p>
                <p>Industries We Serve</p>
              </div>
            </div>
            <div className="text-white flex flex-col gap-y-[30px]">
              <h3 className="text-2xl font-[500] text-white uppercase">
                Resources
              </h3>
              <div className="flex flex-col gap-y-[35px] text-white-70 ">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Careers</p>
                <p>Phishing Scam Alert</p>
                <p>Locations</p>
                <p>Community Impact</p>
                <p>Tools</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[35px] text-white text-right">
            <p className="text-sm text-white-70">
              REVENUE DRIVEN FOR OUR CLIENTS
            </p>
            <h3 className="text-2xl font-[500] text-white text-[36px]">
              $3,021,182,299
            </h3>
          </div>
        </div>

        {/* Fourth Partners Section */}
        <div className="w-[95%]  border-white border-[1px] mx-auto" />

        <div
          className="flex py-[80px] text-white items-center w-[1240px] 
        xl_2:w-[90%] justify-between mx-auto"
        >
          <div className="w-[516px] flex flex-col space-y-6">
            <p className="text-sm">
              WebFX® 1995-2022 | Celebrating 25+ Years of Digital Marketing
              Excellence
            </p>
            <p className="text-sm">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
