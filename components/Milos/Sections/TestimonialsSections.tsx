import React from 'react'
import { VideoFrame, TestimonialCard } from "components/Milos/CustomElements"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import personImage from '../../assets/person-name.png'
import backgroundImage from '../../assets/08543e3260f33bff38b496d4d4f8b0e2.png'

const items = [
  'Long-term employment',
  'Career opportunities among progression journey',
  'Detailed guidance from industry experts',
  'Culture of care and support',
  'Digital marketing software worth $15,000',
  'World-class office hubs',
  'Schedule flexibility',
  'Exclusive training materials and resources from Google, Facebook, and others',
  'Impact the world with Muscled',
]

const testCards = [
  {
    description: `"Muscled provides expert advice as well as personalized service. I've learned so much from them, and they make me look good by offering solutions to our business that I had no idea they could provide!"`,
    name: "persone name",
    img: <img className="bottom-[34px] relative" src={personImage.src} alt="image" />
  },
  {
    description: `"Muscled provides expert advice as well as personalized service. I've learned so much from them, and they make me look good by offering solutions to our business that I had no idea they could provide!"`,
    name: "persone name",
    img: <img className="bottom-[34px] relative" src={personImage.src} alt="image" />
  },
  {
    description: `"Muscled provides expert advice as well as personalized service. I've learned so much from them, and they make me look good by offering solutions to our business that I had no idea they could provide!"`,
    name: "persone name",
    img: <img className="bottom-[34px] relative" src={personImage.src} alt="image" />
  },
  {
    description: `"Muscled provides expert advice as well as personalized service. I've learned so much from them, and they make me look good by offering solutions to our business that I had no idea they could provide!"`,
    name: "persone name",
    img: <img className="bottom-[34px] relative" src={personImage.src} alt="image" />
  },
]

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
  };

  return (
    <>
      <div className="bg-[#39171F]">
        <img src={backgroundImage.src} alt="background" className="opacity-5 absolute w-[100%] h-[716px]" />
        <div className='flex justify-between w-full py-[80px] px-[100px]'>
          <div className='flex flex-col'>
            <div className='text-white font-bold text-[56px] leading-tight mb-20'>
              <div>Personal and Professional Development</div>
            </div>

            <div className='max-w-[874px] max-h-[556px] columns-2'>
              {items.map((item, index) => {
                return (
                  <div key={index} className="flex items-center text-white pb-[22px]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={6} stroke="currentColor" className="w-6 h-6 text-[35px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <div className='leading-tight max-w-[379.5px] w-full text-[24px] ml-[20px]'>
                      {item}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='flex items-center'>
            <div className="relative min-w-[328px] w-full max-w-[400px] h-[330px] mx-auto bg-white-gray md:mx-0 rounded-[10px] video-show">
              <VideoFrame className="absolute w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#39171F] pt-[127px] pl-[20px] pb-[105px]">
        <Slider {...settings}>
          {testCards.map((item, key) =>
            <TestimonialCard
              key={key}
              description={item.description}
              name={item.name}
              image={item.img}
            />
          )}
        </Slider>
      </div>
    </>
  )
}

export default TestimonialSection
