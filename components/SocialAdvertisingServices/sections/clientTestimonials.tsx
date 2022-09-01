import React from 'react'
import Button from '../components/heroSection/button'
import DynamicSection from '../components/DynamicSection'

const clientTestimonials = () => {
  return (
    <div className="bg-black text-white">
      <DynamicSection className="gap-x-6 md:h-[50vh] p-4 md:p-8 lg:p-16">
        <div className="flex flex-col basis-2/5 justify-around items-start lg:text-2xl">
          <p>
            "The Muscled team is the perfect package for our social media
            needs!" They handle everything from ad design to targeted marketing
            to page administration and monitoring!"
          </p>
          <p className="font-bold">Manager of a Store</p>
          <Button
            text="See Our Clients' Testimonials"
            backgroundColor="bg-red-600"
          />
        </div>
        <div className="basis-1/5"></div>
        <div className="basis-2/5 bg-neutral-200 rounded-xl"></div>
      </DynamicSection>
    </div>
  )
}
export default clientTestimonials
