import React, { FC } from 'react'
import { ServiceCard } from '../component.type'
import Button from '../heroSection/button'

const Card: FC<ServiceCard> = ({
  heading,
  subHeading,
  className,
  buttonText
}) => {
  return (
    <div
      className={`px-4 py-4 md:py-8 lg:px-8 lg:py-8 flex flex-col justify-around basis-[30%] bg-white  ${
        className ? className : ''
      }`}
    >
      <h4 className="font-bold">{heading}</h4>
      <p className="">{subHeading}</p>
      <Button text={buttonText} backgroundColor="bg-red-base h-16" />
    </div>
  )
}
export default Card
