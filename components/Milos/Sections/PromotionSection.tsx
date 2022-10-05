import React, { useRef } from 'react'
import PromotionImage from '../../assets/promotion.png'
import PromotionRightImage from '../../assets/promotion_right_icon.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const PromotionSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    className: 'z-0'
  }

  const sliderRef = useRef< Slider | null>(null);

  return (
    <div className="py-20 px-24 flex gap-x-[34px] text-center mb-[70px] relative">
      <div className="w-[562px] h-[917px] relative">
        <button type="button" className="shadow-md bg-white rounded-full p-[10px] absolute z-10 top-[50%] left-[50%] translate-x-[-50%] 
        translate-y-[-50%] w-[82px] h-[82px] flex justify-center 
        items-center" onClick={() => sliderRef?.current?.slickPrev()}>
          <img src={PromotionRightImage.src} alt="" />
        </button>
        <Slider ref={sliderRef} {...settings}>
          <img src={PromotionImage.src} alt="promotion" />
          <img src={PromotionImage.src} alt="promotion" />
          <img src={PromotionImage.src} alt="promotion" />
        </Slider>
      </div>

      <div className='flex flex-col justify-between'>
        <div className='font-semibold text-[56px] text-black leading-tight'>
          Muscled has grown by 250 percent or more in the last three years,
          and merit-based promotions are widely available for new team members who meet or
          exceed performance metrics.
        </div>
        <div className='text-[40px] text-black leading-tight'>
          In the last three years, the company has grown by 250 percent.
        </div>
      </div>
    </div>
  )
}

export default PromotionSection
