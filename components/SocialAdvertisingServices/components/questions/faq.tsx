import React from 'react'
import Accordion from './faqAccordian/accordion'

const FaqSection = () => {
  return (
    <div
      className="space-y-3 md:space-y-6 lg:space-y-9 flex flex-col mt-[120px]"
      id="faq"
    >
      <h3 className="font-bold text-[40px] leading-[52px] text-black-80">
        FAQs about ecommerce social media advertising services
      </h3>
      <Accordion />
    </div>
  )
}
export default FaqSection
