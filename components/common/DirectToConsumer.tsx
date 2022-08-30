import Section from "components/Fawwaz/Sections/Section";
import React from "react";
import ReactPlayer from "react-player";
import Button from "../Button";

const DirectToConsumer = () => {
  return (
    <div className="w-50 bg-[#C40000]/[.06] h-[804px] mt-[100px] flex  ">
      <div className="w-6/12 h-[804px] flex flex-col ml-[50px] mr-[80px] ">
        <p className="text-[35px] font-bold mt-[80px] mb-[20px] w-[760px] ">
          What exactly is direct-to-consumer social media advertising?
        </p>
        <p>
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
      <div className="w-6/12 h-[804px] mr-[50px] flex flex-col items-center">
        <div className="bg-[#D9D9D9] w-[350px] h-[320px] mt-[117px]">
          <ReactPlayer
            width="350px"
            height="320px"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
        <div className="bg-[#3E5661]  w-[350px] h-[200px] mt-[50px] flex justify-start items-center pl-[40px]">
          <Button text="Send Proposal" />
        </div>
      </div>
    </div>
  );
};

export default DirectToConsumer;
