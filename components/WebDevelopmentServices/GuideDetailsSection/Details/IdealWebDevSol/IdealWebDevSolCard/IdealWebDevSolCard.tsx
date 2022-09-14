import React,{FC} from 'react'
import Image from "next/image"

const IdealWebDevSolCard:FC = () => {
  return (
    <div className='flex flex-col w-[638px] h-[362px] bg-[#141010] rounded-lg text-white space-y-10 justify-center pl-7'>
      
       <div className='w-[284px]'>
         <p className='leading-[39px] text-2xl font-[500]'>For verified ratings of 
            our marketing services, 
            please read our:</p>
       </div>

       <div className='flex flex-col space-y-5'>
       
          <div>
            <Image src="/blueIconStars.png" width="162" height="32" />
          </div>
            
          <div className='leading-[23.5px] flex flex-col space-y-4'>
             <p className='text-xl font-normal'> Industry-leading 893 testimonials </p>
              <p className='text-xl font-normal'>WebFX Agency Rating: 4.9 out of 5 with 267 ratings</p>
          </div>
       
       </div>


    </div>
  )
}

export default IdealWebDevSolCard