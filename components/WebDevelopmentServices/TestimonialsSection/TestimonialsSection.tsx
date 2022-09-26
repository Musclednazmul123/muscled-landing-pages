import React,{FC} from 'react'
import TestimonialsContent from "./TestimonialsContent/TestimonialsContent";
import {testimonialsSectionProps} from "../WebDevInterfaces/WebDevInterfaces";


const TestimonialsSection:FC<testimonialsSectionProps> = ({variant,testimonialData,Media}) => {
  return (
    <div className={`flex min-h-[626px] bg-black justify-center space-x-[131px]
    pt-[80px] pb-[120px]
     ${variant=="webDev"?'mt-0':variant=="shopifyDev"?'mt-[100px]':null}`}>
        <TestimonialsContent {...testimonialData}/>
        <Media/>
        </div>
  )
}

export default TestimonialsSection