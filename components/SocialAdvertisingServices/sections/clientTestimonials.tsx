import React from 'react'
import Button from '../components/heroSection/button'
import DynamicSection from '../components/DynamicSection'
import ReactPlayerModal from '../../ReactPlayerModal'
import Play from '../../playIcon'

const clientTestimonials = () => {
  return (
    <div className="bg-black text-white min-h-[560px]">
      <DynamicSection className="justify-between md:p-8 lg:py-16 flex-col md:flex-row space-y-4 gap-x-[60px]">
        <div className="flex flex-col basis-2/5 justify-around items-start lg:text-2xl space-y-4 min-w-[590px]">
          <p className="text-[24px]">
            "The Muscled team is the perfect package for our social media
            needs!" They handle everything from ad design to targeted marketing
            to page administration and monitoring!"
          </p>
          <p className="font-bold text-[20px]">Manager of a Store</p>
          <Button
            text="See Our Clients' Testimonials"
            backgroundColor="bg-red-base"
            className="min-h-[60px]"
          />
        </div>
        <div className="basis-2/5 bg-neutral-200 rounded-xl min-h-[400px] min-w-[590px]">
          <ReactPlayerModal
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            Icon={Play}
            width="100%"
            height="100%"
          />
        </div>
      </DynamicSection>
    </div>
  )
}
export default clientTestimonials
