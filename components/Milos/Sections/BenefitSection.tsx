import React from 'react'
import { VideoFrame } from "components/Milos/CustomElements"
import VolcanoImage from '../../assets/unsplash_QBpZGqEMsKg.png'
import EnvironmentImage from '../../assets/unsplash__6kI0qhmxc4.png'

const items = [
  'Schedule Flexibility',
  'Happy Hours & Virtual Meetups',
  'Office Hubs Throughout the World',
  'Productivity Bonuses',
  'Referral Bonus of $500',
]

const BenefitSection = () => {
  return (
    <div className="px-24 mb-48">
      <h1 className="tracking-[0.215em] max-w-[940px] mx-auto text-center my-32 font-bold	text-[85px] text-white red-stroke">
        BENEFITS AND ADVANTAGES
      </h1>

      <div className="flex flex-wrap justify-between max-h-[863px] h-full">
        <div className="flex flex-col p-[50px] border border-sold border-black rounded-[20px] max-w-[500px] w-full items-center text-center gap-y-[47px]">
          <div className='gap-y-[5px]'>
            <div className='leading-[54px] font-semibold text-4xl'>
              Everyone can be flexible
            </div>
            <div className='mt-[5px]'>You can work from home or at one of our global hubs.</div>
          </div>

          <div className='flex justify-between items-center'>
            <img src={VolcanoImage.src} alt="" />
            <div className='flex flex-col gap-x-[26px]'>
              <div className='font-medium text-4xl leading-[54px]'>
                Volcano Views
              </div>
              <div>Our Guatemala hub features spectacular views in a cutting-edge office space.</div>
            </div>
          </div>

          <img src={EnvironmentImage.src} alt="" />
        </div>

        <div className='flex flex-col justify-center gap-y-12 px-[42px]'>
          {items.map((text, index) => {
            return (
              <div key={index} className="flex items-center gap-x-[17px] text-center">
                <div className='w-[66px] h-[66px] bg-[#D9D9D9] rounded-[5px]'></div>
                <div className='max-w-[245px] w-full'>{text}</div>
              </div>
            )
          })}
        </div>

        <div className='flex items-center'>
          <div className="relative min-w-[328px] w-full max-w-[400px] h-[330px] mx-auto bg-white-gray md:mx-0 rounded-[10px] video-show">
						<VideoFrame className="w-full h-full" />
					</div>
        </div>
      </div>
    </div>
  )
}

export default BenefitSection
