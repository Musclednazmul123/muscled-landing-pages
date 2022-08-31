import React, { FC } from 'react'
import DynamicSection from '../components/DynamicSection'
import { PartnerData } from '../data/partner'
import Logo from '../components/partnerSection/logo'

const Partners = () => {
  const displayPartnerLogo = () => {
    return PartnerData.map((item: string, key: number) => {
      return <Logo src={item} className="my-2 md:my-0" key={key} />
    })
  }

  return (
    <DynamicSection className="flex-col justify-between py-8">
      <h4 className="text-center text-neutral-500 mb-0 md:mb-8">
        Our Partners
      </h4>
      <div className=" flex flex-col md:flex-row justify-between">
        {displayPartnerLogo()}
      </div>
    </DynamicSection>
  )
}

export default Partners
