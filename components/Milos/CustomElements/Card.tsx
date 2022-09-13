import React, { FC } from 'react'
import { CardProps } from "../component.type";

const Card: FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="p-10 h-[555px] bg-white rounded-[10px] flex flex-col items-center gap-y-9 max-w-[356px] w-full shadow-md">
      {image}
      <div className="text-black text-[32px] font-bold max-h-[134.33px] leading-tight h-full">
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default Card
