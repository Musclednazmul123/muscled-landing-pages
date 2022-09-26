import React,{FC} from 'react'
import { RectangleLeft,RectangleRight,Ellipse,Muscled } from './CardShapes'


const GuideDetailsCard:FC = () => {
  return (
    <div className='w-full bg-[#2E112B] min-h-[359px] relative mb-10'>
 <div className='absolute top-0 left-0'>
 <RectangleLeft /> 
 </div>       
 <div className='absolute top-[19px] left-[439px]'>
 <Ellipse />
 </div>
<div className='absolute  top-[153.78px] left-[550px]'>
<RectangleRight />
</div>
    </div>
  )
}

export default GuideDetailsCard