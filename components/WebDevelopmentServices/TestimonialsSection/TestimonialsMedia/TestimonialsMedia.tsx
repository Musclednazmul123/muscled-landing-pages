import React,{FC} from 'react'
import {testimonialMedia} from "../../WebDevInterfaces/WebDevInterfaces";
import Image from 'next/image';


const TestimonialsMedia:FC<testimonialMedia> = ({url}) => {
  return (
    <div className='flex w-[540px] bg-white rounded-[10px] justify-center items-center'>
     <div>
      <button className='border-0'>
<Image src="/playbutton.png" width="60" height="60"/>
</button>
     </div>
    </div>
  )
}

export default TestimonialsMedia