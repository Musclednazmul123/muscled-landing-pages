import React, { FC, useRef, useState } from "react";
import Testimonial from "./Testimonial";
import { footerTestimonialProps } from "types/types";
import Slider, { Settings } from "react-slick";
import Button from "../Fawwaz/Button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

let testimonialsData: Array<footerTestimonialProps> = [
  {
    title:
      "MUSCLED has been a pleasure to work with on our SEO needs and I look forward to working with them on future projects.",
    position: "Owner",
    companyName: "ARIZONA GARAGE DOOR SUPPLIER",
  },
  {
    title:
      "MUSCLED has been a pleasure to work with on our SEO needs and I look forward to working with them on future projects.",
    position: "Owner",
    companyName: "ARIZONA GARAGE DOOR SUPPLIER",
  },
  {
    title:
      "MUSCLED has been a pleasure to work with on our SEO needs and I look forward to working with them on future projects.look forward to working with them on future projects.",
    position: "Owner",
    companyName: "ARIZONA GARAGE DOOR SUPPLIER",
  },
  {
    title: "MUSCLED has been a pleasure to work with on our SEO needs and I ",
    position: "Owner",
    companyName: "ARIZONA GARAGE DOOR SUPPLIER",
  },
];

const TestimonialSlider: FC = () => {
  let [currentSlide, setCurrentSlide] = useState<number>(0);
  let sliderRef = useRef<Slider>(null);

  let afterChange = (newSlide: number) => {
    // console.log("After Change Current Slide " + newSlide);
    setCurrentSlide(newSlide);
  };

  // let beforeChange=(currentSlide:number,nextSlide:number)=>{
  //   console.log("Before change Cureent Slide and After Slide "+ currentSlide, nextSlide);
  // }

  const settings: Settings = {
    className: "overflow-hidden",
    easing: "ease",
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange,
  };

  return (
    <div className="flex flex-col w-[487px] gap-y-9">
      <Slider ref={sliderRef} {...settings}>
        {testimonialsData.map((data, index) => (
          <Testimonial {...data} key={index} />
        ))}
      </Slider>
      <div className="flex items-center justify-end gap-4 ">
        <Button
          bgColor={(true && "bg-white/50") || "bg-white"}
          textColor="text-black"
          className="focus:bg-white"
          rounded
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <AiOutlineArrowLeft size={15} />
        </Button>
        <Button
          bgColor={(true && "bg-white/50") || "bg-white"}
          textColor="text-black"
          rounded
          className="focus:bg-white"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <AiOutlineArrowRight size={15} />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
