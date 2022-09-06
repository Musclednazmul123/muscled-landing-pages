import React from 'react'
import DynamicSection from '../components/DynamicSection'
import TableOfContents from '../components/questions/tableOfContents'
import SocialMediaExamples from '../components/questions/socialMediaExamples'
import AdvertisingServices from '../components/questions/advertisingServices'
import D2cBrands from '../components/questions/d2cBrands'
import ConsumerAdvertising from '../components/questions/consumerAdvertising'
import SocialAdvertising from '../components/questions/socialAdvertising'
import LaunchAds from '../components/questions/launchAds'
import Faq from '../components/questions/faq'
const Questions = () => {
  return (
    <DynamicSection className="justify-between my-8 flex-col-reverse md:flex-row">
      <div className="basis-[60%] space-y-[120px] flex flex-col text-[20px] leading-[30px] font-normal">
        <SocialMediaExamples />
        <AdvertisingServices />
        <D2cBrands />
        <ConsumerAdvertising />
        <SocialAdvertising />
        <LaunchAds />
        <Faq />
      </div>
      <div className="basis-[35%]">
        <TableOfContents />
      </div>
    </DynamicSection>
  )
}
export default Questions
