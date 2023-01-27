import React from 'react'
import DynamicSection from '../components/DynamicSection'
import { PartnerData } from '../data/partner'
import Logo from '../components/partnerSection/logo'
import { logoProps } from '../components/component.type'

const Partners = () => {
  const displayPartnerLogo = () => {
    return PartnerData.map((item: logoProps, key: number) => {
      return (
        <Logo
          src={item.src}
          className="my-2 md:my-0"
          width={item.width}
          height={item.height}
          key={key}
        />
      )
    })
  }

  return (
    <div className="bg-white py-[50px] min-h-[202px]">
      <DynamicSection className="flex-col justify-between">
        <h4 className="text-center text-neutral-500 mb-[20px] text-[24px]">
          Our Partners
        </h4>
        <div className=" flex flex-col md:flex-row justify-between items-center">
          {displayPartnerLogo()}
        </div>
      </DynamicSection>
    </div>
  )
}

export default Partners
