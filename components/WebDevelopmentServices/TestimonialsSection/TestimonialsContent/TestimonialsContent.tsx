import React,{FC} from 'react'
import {testimonialData} from "../../WebDevInterfaces/WebDevInterfaces";



const TestimonialsContent:FC<testimonialData> = ({details,owner,company}) => {
  return (
    <div className='flex flex-col w-[560px] space-y-[60px]'>
        <div className="flex flex-col space-y-[30px]">
           <div>
            <p className='text-[#F9F9F9] text-2xl leading-[150%] font-normal'>{details}</p>
           </div>
           <div>
            <p className='text-[#F9F9F9] font-bold text-2xl'>{owner}</p>
           </div>
           <div>
           <p className="text-xl font-bold text-[#F9F9F9]">{company}</p>
           </div>
        </div>
        <div className='max-w-[376px] min-h-[60px]'>
          <button className='w-full bg-[#C40000] h-full 
          text-white text-xl font-[500]'>See Our Clients’ Testimonials</button>
        </div>
        </div>
  )
}

export default TestimonialsContent