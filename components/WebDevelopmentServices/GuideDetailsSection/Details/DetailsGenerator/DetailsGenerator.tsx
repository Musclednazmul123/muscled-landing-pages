import React,{FC} from 'react'
import {detailGeneratorProps} from "../../../WebDevInterfaces/WebDevInterfaces";




const DetailsGenerator:FC<detailGeneratorProps> = ({heading,paragraphs}) => {
  return (
    <div className='flex flex-col space-y-[30px]'>
        
        <div className='max-w-[488px]'>
            <p className=' text-[40px] font-bold leading-[60px]'>{heading}</p>
        </div>
        
        <div className='flex flex-col space-y-[30px]'>
        {
            paragraphs.map((paragraph,index)=>{
                return <div className='' key={index}>
                <p className='font-normal text-[#333333] text-xl leading-[32.5px]'>{paragraph}</p>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default DetailsGenerator