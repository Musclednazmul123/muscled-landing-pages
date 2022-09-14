import React,{FC} from 'react'
import Image from "next/image";

const PromotionMedia:FC = () => {
  return (
    <div className="flex flex-col max-w-[27.563rem] min-h-[10.875rem] 
    self-center bg-[#141010] rounded-lg space-y-6 pt-[21px] pr-[69px] pb-[21px] pl-[19px]">
        <div className='max-w-[353px]'>
        <p className="text-white font-[500] text-lg leading-[167%]" >Looking for custom plans and pricing? 
Request a proposal to receive yours.</p>
        </div>
        <div className="w-[215px]  h-[48px]">
            <button className='flex justify-center items-center w-full h-full bg-white text-black py-4 px-6 
            rounded-lg font-[500] text-base'>
       Get Free Proposal
       <div className='ml-2 mt-1'>
        <Image src="/prmotionCardButtonArrow.png" width="14" height="14" />
       </div>
            </button>
        </div>
    </div>
  )
}

export default PromotionMedia