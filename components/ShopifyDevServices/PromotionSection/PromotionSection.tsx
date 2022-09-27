import React,{FC} from 'react'
import LeftContent from './LeftContent/LeftContent'
import RightContent from "./RightContent/RightContent";

const PromotionSection:FC = () => {


    return (
    <div className='flex  w-[1240px] m-auto space-x-[97px] pt-3'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default PromotionSection