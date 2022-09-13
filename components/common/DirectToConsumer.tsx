import Section from "components/Fawwaz/Sections/Section";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Button from "../Button";
import ReactPlayerModal from "components/ReactPlayerModal";
import PlayIcon from "components/playIcon";
import classNames from "classnames";

const DirectToConsumer = () => {
  const className = "flex";
  const [toggle, setToggle] = useState(className);
  const setFlex = () => {
    if (toggle) return "flex";
    else return "";
  };
  console.log("as");
  console.log(toggle, "n");
  return (
    <div
      className={`w-50 bg-[#C40000]/[.06] h-[804px] mt-[100px]  pb-[80px] ${toggle}`}
    >
      <div className="w-6/12 h-[804px] flex flex-col ml-[50px] mr-[30px] pl-[50px] ">
        <p className="text-[40px] font-bold mt-[80px] mb-[20px] w-[760px] h-[104px] leading-[52px] not-italic ">
          What exactly is direct-to-consumer social media advertising?
        </p>
        <p className="text-[20px] leading-[30px] font-normal not-italic w-[760px] h-[520px]">
          Paid social media ads are an excellent way to increase your D2C
          company's visibility on social media platforms. Social algorithms have
          made it more difficult to reach and engage consumers in their news
          feeds organically. However, with paid advertisements, such as the
          examples above, you can immediately increase awareness about the
          product and your brand. <br />
          <br />
          Below, we'll go through D2C social advertising in detail, look at some
          examples, and provide an overall view of how our plans can help your
          brand grow. With over 25 years of experience, we've helped D2C brands
          like yours achieve impressive results through social media
          advertising. Are you prepared to begin utilizing direct-to-consumer
          social media advertising? Contact us online to speak with an
          experienced social media strategist from our team. <br />
          <br />
          We understand that sometimes you want to speak directly to the source.
          To speak with a Digital Marketing Specialist about our marketing
          services, please call us.{" "}
        </p>
      </div>
      <div className={`w-6/12 h-[804px]  flex-col items-center ${toggle} `}>
        <div className="bg-[#D9D9D9] w-[400px] h-[320px] mt-[117px] rounded-[10px] bg-[#1c1c1c]">
          <ReactPlayerModal
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            width="400px"
            height="320px"
            Icon={PlayIcon}
            className="flex"
            setToggle={setToggle}
          />
        </div>
        <div className="bg-[#3E5661]  w-[400px] h-[200px] mt-[50px] flex justify-start items-center pl-[40px] rounded-[10px]">
          <Button text="Send Proposal" />
        </div>
      </div>
    </div>
  );
};

export default DirectToConsumer;
