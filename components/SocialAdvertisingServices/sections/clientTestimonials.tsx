import React from 'react'
import Button from '../components/heroSection/button'
import DynamicSection from '../components/DynamicSection'
import ReactPlayerModal from '../../ReactPlayerModal'
import Play from '../../playIcon'

const clientTestimonials = () => {
  return (
    <div className="bg-black text-white min-h-[560px] flex items-center">
      <DynamicSection className="justify-between flex-col md:flex-row  gap-x-[60px] min-h-[400px]">
        <div className="flex flex-col basis-2/5 justify-start items-start lg:text-2xl space-y-4 max-w-[590px]">
          <div>
            <p className="text-[24px] pt-4">
              "The Muscled team is the perfect package for our social media
              needs!" They handle everything from ad design to targeted
              marketing to page administration and monitoring!"
            </p>
            <p className="font-bold text-[20px] mt-[30px] mb-[60px]">
              Manager of a Store
            </p>
          </div>
          <Button
            text="See Our Clients' Testimonials"
            backgroundColor="bg-red-base"
            className="min-h-[60px] min-w-[376px]"
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
