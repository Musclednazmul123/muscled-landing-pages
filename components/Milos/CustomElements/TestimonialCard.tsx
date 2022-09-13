import React, { FC } from 'react'
import { TestimonialCardProps } from "../component.type";

const TestimonialCard: FC<TestimonialCardProps> = ({ image, description, name }) => {
  return (
    <div className=" text-white px-[30px] pt-[50px] h-[567px] bg-[#812F2F] max-w-[452px] w-fulld">
      <div className="text-[24px] leading-[150%]">
        {description}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-bold">{name}</p>
        {image}
      </div>
      
    </div>
  )
}

export default TestimonialCard
