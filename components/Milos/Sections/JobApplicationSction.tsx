import React from 'react'
import { Button, Input } from 'components/Milos/CustomElements'
import downIcon from '../../assets/down.png'
import rightIcon from '../../assets/white_right.png'

const JobApplicationSction = () => {
  return (
    <div className='bg-[#39171F] py-[171px] px-[50px] flex justify-between items-center'>
      <div className='max-w-[836px]'>
        <h1 className='text-white text-[56px] font-bold'>
          We've generated thousands of leads for our clients. Learn how we can help your company grow.
        </h1>
        <div className='grid grid-cols-2 gap-y-3 mt-[49px]'>
          <Input
            label="full name"
            placeholder="full name"
            className='pb-[50px]'
          />
          <Input
            label="company"
            placeholder="company"
            className='pb-[50px]'
          />
          <Input
            label="email"
            placeholder="email"
            className='pb-[50px]'
          />
          <Input
            label="phone number"
            placeholder="(000)-000-0000"
            className='pb-[50px]'
          />
          <Input
            label="website"
            placeholder="website"
            className='pb-[50px]'
          />
          <div className='relative z-0'>
            <label className="block text-[#fff] text-[36px] font-bold mb-[39px]">
              what is project monthly budget for this project
            </label>
            <div className="flex items-center justify-center border-b-2 border-black rounded-[15px]">
              <select className="appearance-none p-[10px] w-[368px] h-[87px] bg-[#39171F] text-white text-[36px]">
                <option>please select</option>
              </select>
              <div className="z-10 pointer-events-none flex items-center text-white">
                <img src={downIcon.src} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[195px] max-w-[397px]">
          <h1 className="text-white text-[24px] mb-[16px]">How can we help your business?</h1>
          <p className="w-fit text-white text-[20px] p-[10px] border-b">tell us more</p>
          <Button text="Hear from an export" className="mt-[85px] mx-auto" textColor="white" backgroundColor="black" />
        </div>
      </div>

      <div className="text-center m-auto">
        <p className="text-white text-[20px] mb-[16px]">Hear from MUSCLED clients</p>
        <div className="w-[363px] h-[363px] bg-[#D9D9D9] mb-[16px]"></div>
        <div className="text-white text-[20px] mb-[16px] flex justify-between items-center px-[27.4px]">
          <p className='font-bold'>view client's testimonials</p>
          <img src={rightIcon.src} alt="" />
        </div>
      </div>
    </div>
  )
}

export default JobApplicationSction
