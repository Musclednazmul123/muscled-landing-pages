import React,{FC} from 'react'
import TableOfContent from './TableOfContent/TableOfContent'
import RelatedResources from "./RelatedResources/RelatedResources";
import AdditionalReading from "./AdditionalReading/AdditionalReading";
import PromotionCard from "./PromotionCard/PromotionCard";

const TablesOfContent:FC = () => {
  return (
    <div className='flex flex-col w-[400px] space-y-[80px]'>
<TableOfContent />
<RelatedResources />
<AdditionalReading />
<PromotionCard />
    </div>
  )
}

export default TablesOfContent