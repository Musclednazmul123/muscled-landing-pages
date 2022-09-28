import React,{FC} from 'react'
import Table from '../../../Table';
import TableList from "../Tablelist";
import Image from "next/image";
import{ tableContentProps} from "../../../WebDevInterfaces/WebDevInterfaces";


let items=["B2C Web Development Pricing",
"Web Development Pricing",
"SMB Web Development Agency",
"Ecommerce Web Application\nDevelopment Optimized for the Best Conversions",
"Questions to Ask Web Developer",
"Questions to Ask a Web Developer Before Hiring"];


let tableIcon:JSX.Element=<Image src="/relatedResourcesIcon.png" width="20" height="20"/>

let RelatedResourcesData:tableContentProps={
tableTitle:"Related Resources",
tableIcon,
tableWidth:"w-[391px]",
subSection:{
    title:"You may also like",
    link:"/"
},
List:<TableList list={items} className="pl-7 pr-6 py-7"  gap='space-y-8'/>
}


const RelatedResources:FC = () => {
  return (
    <div>
        <Table {...RelatedResourcesData} />
    </div>
  )
}

export default RelatedResources