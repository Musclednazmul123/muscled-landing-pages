import React, { FC } from 'react'
import { CardData } from '../data/servicePackages'
import { ServicePackages } from '../components/component.type'
import DynamicSection from '../components/DynamicSection'
import CardComponent from '../components/servicePlans/card'
import { Card } from '../components/component.type'

const ServicePlans: FC<ServicePackages> = () => {
  const displayCards = () => {
    return CardData.map((item: Card, key: number) => {
      return (
        <CardComponent
          stars={item.stars}
          packageName={item.packageName}
          packagePrice={item.packagePrice}
          features={item.features}
          includes={item.includes}
          bgColor={item.bgColor}
          className="bg-white"
          key={key}
        />
      )
    })
  }
  return (
    <div className="bg-[#f5f5f5] py-12">
      <DynamicSection className="flex-col my-8">
        <h3 className="text-center my-12 text-[40px]">
          Explore Direct-to-Consumer Social Service Plans
        </h3>
        <div className="flex flex-col md:flex-row justify-around space-y-4 md:space-y-0">
          {displayCards()}
        </div>
      </DynamicSection>
    </div>
  )
}
export default ServicePlans
