import React, { FC } from 'react'
import { CardData } from '../data/servicePackages'
import { ServicePackages } from '../components/component.type'
import DynamicSection from '../components/DynamicSection'
import CardComponent from '../components/servicePlans/card'
import { Card } from '../components/component.type'

const ServicePlans: FC<ServicePackages> = ({ children, className }) => {
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
        />
      )
    })
  }
  return (
    <div className="bg-neutral-200">
      <DynamicSection className="flex-col my-8 p-4">
        <h3 className="text-center my-12">
          Explore Direct-to-Consumer Social Service Plans
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          {displayCards()}
        </div>
      </DynamicSection>
    </div>
  )
}
export default ServicePlans
