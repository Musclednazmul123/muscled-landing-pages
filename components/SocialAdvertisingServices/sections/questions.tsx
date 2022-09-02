import React from 'react'
import DynamicSection from '../components/DynamicSection'
import TableOfContents from '../components/questions/tableOfContents'
import SocialMediaExamples from '../components/questions/socialMediaExamples'
import AdvertisingServices from '../components/questions/advertisingServices'
import D2cBrands from '../components/questions/d2cBrands'
import ConsumerAdvertising from '../components/questions/consumerAdvertising'
import SocialAdvertising from '../components/questions/socialAdvertising'
import Faq from '../components/questions/faq'
const Questions = () => {
  return (
    <DynamicSection className="justify-between my-8">
      <div className="basis-[50%] space-y-4 md:space-y-8 lg:space-y-12 flex flex-col">
        <SocialMediaExamples />
        <AdvertisingServices />
        <D2cBrands />
        <ConsumerAdvertising />
        <SocialAdvertising />
        <Faq />
      </div>
      <div className="basis-[40%]">
        <TableOfContents />
      </div>
    </DynamicSection>
  )
}
export default Questions
