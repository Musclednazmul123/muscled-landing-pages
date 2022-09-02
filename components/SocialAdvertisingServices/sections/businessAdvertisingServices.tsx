import React from 'react'
import DynamicSection from '../components/DynamicSection'
import Card from '../components/businessAdvertisingServices/card'
import { CardData } from '../data/businessAdvertisingServices'
import { ServiceCard } from '../components/component.type'

const BusinessAdvertisingServices = () => {
  const displayCards = () => {
    return CardData.map((item: ServiceCard, key: number) => {
      return (
        <Card
          heading={item.heading}
          subHeading={item.subHeading}
          buttonText={item.buttonText}
          key={key}
        />
      )
    })
  }
  return (
    <div className="bg-neutral-100 py-4 md:py-8">
      <DynamicSection className="flex-col space-y-8 justify-around">
        <div className="text-center basis-2/5">
          <h2 className="font-bold mb-8">
            Social Media Advertising Services For Every Business
          </h2>
          <h4>
            Check the D2C Ecommerce and Social Media Integration options from
            Muscled.
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-between basis-3/5 space-y-4 md:space-y-0">
          {displayCards()}
        </div>
      </DynamicSection>
    </div>
  )
}
export default BusinessAdvertisingServices
