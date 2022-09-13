import React from 'react'
import { Button, Accordion } from '../CustomElements'
import caretLeft from '../../assets/caret-left.png'
import caretRight from '../../assets/caret-right.png'

const positions = [
  {
    header: 'Content Integration Specialist (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Digital Marketing Lead (SEO) (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Digital Marketing Manager (Search) (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Digital Marketing Specialist (Search) (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Director of Client Success (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Internet Marketing Account Strategist (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Senior Director, Search Marketing (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Technical Digital Marketer (MARTECH Implementation) (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Copywriter (Digital Marketing & B2B) (Remote - Anywhere in the world)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
  {
    header: 'Digital Public Relations Specialist (Remote - Anywhere in the World)',
    job_location: 'remote',
    job_type: 'full time',
    content: 'Muscled has grown by 250 percent or more in the last three years, and merit-based promotions are widely available for new team members who meet or exceed performance metrics.'
  },
]

const BUTTONS = [
  'All departments',
  'All locations'
]

const JobPositionSection = () => {
  const RightIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    )
  }
  return (
    <div className='px-[75px] py-[100px] bg-[#89898926] mb-24'>
      <div className='font-bold text-[85px] text-[#C40000] tracking-[0.215rem] mb-[73px] text-center'>
        OPEN POSITIONS
      </div>

      <div className='flex justify-between items-center mb-24'>
        <div className='max-w-[565px] w-full'>
          <div className='font-bold text-black text-[40px]'>Join us in our mission</div>
          Join us in our mission to provide clients with industry-leading digital marketing services while still growing personally and professionally.
        </div>

        <div className='flex justify-end gap-x-10 min-w-[596px] w-full max-h-[66px] h-full'>
          {BUTTONS.map((item, index) => {
            return (
              <Button
                className="py-[20x] px-[50px] font-bold"
                key={index}
                rounded="rounded-[10px]"
                text={item}
                textColor="black"
                backgroundColor="white"
                icon={<RightIcon />}
                boxShadow="shadow-md shadow-[#00000040]"
              />
            )
          })}
        </div>
      </div>

      {positions.map((item, key) =>
        <Accordion
          key={key}
          header={item.header}
          content={item.content}
          job_location={item.job_location}
          job_type={item.job_type}
        />
      )}

      <div className='flex justify-center mt-[100px]'>
        <nav className="flex rounded-md gap-x-6">
          <a className="border-black-80 text-black-80 flex justify-center items-center p-2.5 border rounded min-w-[40px] w-full">
            <img src={caretLeft.src} alt="" />
          </a>
          <a className="border-black-80 text-black-80 flex justify-center items-center p-2.5 border rounded min-w-[40px] w-full"> 1 </a>
          <a className="border-black-80 text-black-80 flex justify-center items-center p-2.5 border rounded min-w-[40px] w-full"> 2 </a>
          <a className="border-black-80 text-black-80 flex justify-center items-center p-2.5 border rounded min-w-[40px] w-full"> 3 </a>

          <a className="border-black-80 text-black-80 flex justify-center items-center p-2.5 border rounded min-w-[40px] w-full">
            <img src={caretRight.src} alt="" />
          </a>
        </nav>
      </div>
    </div>
  )
}

export default JobPositionSection
