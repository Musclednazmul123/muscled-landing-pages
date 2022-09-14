import React,{FC} from 'react'
import PromotionContent from "./PromotionContent/PromotionContent";
import PromotionMedia from "./PromotionMedia/PromotionMedia";

const PromotionSection:FC = () => {
  return (
    <div className='min-h-[45rem] flex bg-[#C400000F] mt-3  
    justify-center space-x-[42px] py-[75px] items-center'>
        <PromotionContent />
        <PromotionMedia />
        </div>
  )
}

export default PromotionSection