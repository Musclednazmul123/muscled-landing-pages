import React from 'react'
import DynamicSection from '../components/DynamicSection'
import TableOfContents from '../components/questions/tableOfContents'
import SocialMediaExamples from '../components/questions/socialMediaExamples'
import AdvertisingServices from '../components/questions/advertisingServices'

const Questions = () => {
  return (
    <DynamicSection className="justify-between my-8">
      <div className="basis-[50%] gap-y-4 flex flex-col">
        <SocialMediaExamples />
        <AdvertisingServices />
      </div>
      <div className="basis-[40%]">
        <TableOfContents />
      </div>
    </DynamicSection>
  )
}
export default Questions
