import React, { FC, ReactNode } from 'react'
import { Card } from '../component.type'
import Image from 'next/image'
import Star from '../../../assets/SocialAdvertisingServices/servicePackage/Star.png'
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
          <Image src={Star} alt="star" width={30} height={30} key={i} />
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
        <div className="flex justify-around items-center w-full my-2" key={key}>
          <Image
            src={CheckMark}
            alt="check"
            width={24}
            height={24}
            className="basis-1/5 m-auto"
          />
          <p className="basis-4/5">{item}</p>
        </div>
      )
    })
  }
  return (
    <div
      className={`flex flex-col border-[1px] border-black rounded-xl basis-1/4  ${className} ? ${className} : ''`}
    >
      <div
        className={`flex flex-col items-center justify-around p-4 gap-y-6 basis-2/5 rounded-t-xl ${
          bgColor ? bgColor : ''
        }`}
      >
        <div
          className={`flex ${stars == 1 ? 'justify-center' : 'justify-around'}`}
        >
          {displayStars()}
        </div>
        <h4>{packageName}</h4>
        <h3 className="text-red-base">${packagePrice}</h3>
      </div>
      <div className="p-4 basis-3/5 justify-around flex flex-col bg-white rounded-b-xl">
        <div className="flex flex-col basis-3/5 justify-around border-b border-neutral-500 gap-y-4 py-4">
          {displayFeatures()}
        </div>
        <p className="text-center p-4">{includes}</p>
        <Button text="Send Proposal" className="my-4 mx-8" />
      </div>
    </div>
  )
}
export default Card
