import React,{FC} from 'react'
import {heroSectionProps} from "./WebDevInterfaces/WebDevInterfaces";
import HeroCards from '../landingPage/Hero/HeroCards';

// ["Home","Web Development","Serivces"];



const HeroSection:FC<heroSectionProps> = (props) => {
  return (
    <div className="flex min-h-[725px] bg-[#000000B2] w-full
     text-white justify-center space-x-[57px] py-[100px] "  >
        <div className='flex w-[720px] flex-col space-y-[30px]'>

        <div className='flex space-x-2'>
        {
            props?.routesVisited?.map((route,index)=>{
                return (
                    index!==props?.routesVisited.length-1?
                    <>
                    <p className='font-[500] text-lg'>{route}</p>
                    <p className='font-[500] text-lg'>{">"}</p>
                    </>:<p className='font-[500] text-lg'>{route}</p>
                )
            })
        }
        </div>

       <div className={`w-[${props?.heroData?.headingWidth || 720}px]`}>
         <p className='text-[56px] font-bold leading-[72.8px]'>{props?.heroData?.heading}</p>
       </div>
       <div>
       <p className='text-[20px] leading-[30px] font-normal'>{props?.heroData?.paragraph}</p>
       </div>
       <div className='flex space-x-2 pt-4'>
       <input className='w-[30rem] h-[3.75rem] rounded-[0.313rem]
         text-xl pl-4 focus:text-black' 
       placeholder='Enter Your Website Link'></input>
       <button className="w-[14.123rem] h-[3.75rem]
        bg-black font-[500] text-xl rounded">Send Proposal</button>
       </div>

        </div>
 
       <HeroCards className='space-y-[10px] self-center'/>
        
    </div>
  )
}

export default HeroSection;