import React, { FC, ReactNode } from 'react'
import { Card } from '../component.type'
import Image from 'next/image'
import Star from '../../../assets/svg/Star'
import CheckMark from '../../../assets/SocialAdvertisingServices/servicePackage/Vector.png'
import Button from '../heroSection/button'

const Card: FC<Card> = ({
  stars,
  packageName,
  packagePrice,
  features,
  includes,
  className,
  bgColor
}) => {
  let labels: ReactNode[] = []
  const splitLabels = (Array: number) => {
    if (typeof Array != 'undefined' && Array != null) {
      for (let i = 0; i < Array; i++) {
        labels.push(
          <Star key={i} opacity={Array === 1 ? 0.5 : Array === 2 ? 0.7 : 0.9} />
        )
      }
    }
  }
  const displayStars = () => {
    return labels
  }
  const displayFeatures = () => {
    splitLabels(stars)
    return features.map((item: string, key: number) => {
      return (
        <div
          className="flex justify-between items-center w-full max-w-[340px]"
          key={key}
        >
          <Image
            src={CheckMark}
            alt="check"
            width={24}
            height={24}
            className="basis-[10%] m-auto"
          />
          <p
            className={`basis-[90%] pl-2 text-[20px] ${
              key === 0 ? 'whitespace-nowrap' : ''
            }`}
          >
            {item}
          </p>
        </div>
      )
    })
  }
  return (
    <div
      className={`flex flex-col border-[1px] min-w-[400px] min-h-[776px] border-black rounded-xl basis-1/3 mr-[20px]  ${className} ? ${className} : ''`}
    >
      <div
        className={`flex flex-col items-center justify-around p-4 space-y-6 min-h-[300px]  rounded-t-[10px] rounded-b-[10px]  ${
          bgColor ? bgColor : ''
        }`}
      >
        <div
          className={`flex ${
            stars == 1 ? 'justify-center' : 'justify-around'
          } py-4`}
        >
          {displayStars()}
        </div>
        <h4 className="text-[24px] uppercase">{packageName}</h4>
        <h3 className="pt-12 text-red-base text-[40px] min-h-[52px] pb-4">
          ${packagePrice}
        </h3>
      </div>
      <div className="py-4 basis-[60%] justify-around items-center flex flex-col bg-white rounded-b-[10px] min-h-[476px]">
        <div className="flex flex-col justify-around min-h-[164px] gap-y-4">
          {displayFeatures()}
        </div>
        <div className="border-t border-[rgba(0,0,0,0.5)] border-[1px] min-w-[360px]"></div>
        <div className=" flex flex-col  space-y-6 w-4/5 justify-around items-center mx-auto min-w-[320px]">
          <p className="text-center text-[20px]">{includes}</p>
          <Button
            text="Send Proposal"
            className="h-16 min-w-[226px] font-semibold"
          />
        </div>
      </div>
    </div>
  )
}
export default Card
