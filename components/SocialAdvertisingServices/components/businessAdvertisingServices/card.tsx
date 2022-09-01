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
      className={`px-4 py-4 md:py-8 lg:px-8 lg:py-8 flex flex-col justify-around basis-1/4 bg-white${
        className ? className : ''
      }`}
    >
      <h4 className="font-bold">{heading}</h4>
      <p className="">{subHeading}</p>
      <Button text={buttonText} backgroundColor="bg-red-500" />
    </div>
  )
}
export default Card
