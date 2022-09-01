import React from 'react'
import DynamicSection from '../components/DynamicSection'
import SocialMediaExamples from '../components/questions/socialMediaExamples'
import TableOfContents from '../components/questions/tableOfContents'

const Questions = () => {
  return (
    <DynamicSection className="justify-between my-8">
      <div className="basis-[50%]">
        <SocialMediaExamples />
      </div>
      <div className="basis-[40%]">
        <TableOfContents />
      </div>
    </DynamicSection>
  )
}
export default Questions
