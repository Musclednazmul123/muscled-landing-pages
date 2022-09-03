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
          // <Image src={Star} alt="star" width={30} height={30} key={i} />
          <Star key={i} opacity={'0.9'} />
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
        <div className="flex justify-around items-center w-full " key={key}>
          <Image
            src={CheckMark}
            alt="check"
            width={24}
            height={24}
            className="basis-1/5 m-auto"
          />
          <p className="basis-4/5 text-[20px]">{item}</p>
        </div>
      )
    })
  }
  return (
    <div
      className={`flex flex-col border-[1px] border-black rounded-xl basis-1/3 mx-2  ${className} ? ${className} : ''`}
    >
      <div
        className={`flex flex-col items-center justify-around p-4 space-y-6  rounded-t-[10px] rounded-b-[10px]  ${
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
        <h4 className="text-[24px]">{packageName}</h4>
        <h3 className="pt-12 text-red-base text-[40px]">${packagePrice}</h3>
      </div>
      <div className="p-4 basis-[60%] justify-around flex flex-col bg-white rounded-b-[10px]">
        <div className="flex flex-col basis-3/5 justify-around border-b border-neutral-500 min-h-[200px] gap-y-4 pb-4">
          {displayFeatures()}
        </div>
        <div className="basis-2/5 flex flex-col justify-center mt-4 space-y-4">
          <p className="text-center text-[24px]">{includes}</p>
          <Button text="Send Proposal" className=" mx-8" />
        </div>
      </div>
    </div>
  )
}
export default Card
