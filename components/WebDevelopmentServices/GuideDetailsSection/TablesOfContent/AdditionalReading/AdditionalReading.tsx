import React,{FC} from 'react'
import Table from '../../../Table';
import Image from "next/image";
import {tableContentProps} from "../../../../WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";

let tableIcon=<Image src="/additionalReading.png" width="20" height="20"/>

let AdditionalReadingData:tableContentProps={
tableTitle:"Additional Reading",
tableIcon,
tableWidth:"390",
list:{
  items:["A Website Management Agency You Can Trust","ADA Compliance Services","CMS Development Services","Custom iPhone Application Development",
   "Ecommerce Web Application Development","Optimized for the Best Conversions","Magento Development Services","Managed WordPress Services","Shopify Ecommerce Development Services From WebFX",
   "Site Speed Optimization Services","Web Development Consulting Services","Website Maintenance Services","Website Security Analysis From WebFX",
   "WordPress Development Services","WordPress Speed Optimization Services","WordPress Website Developers","Your Business Can Trust"],
   itemsGap:8,
   padding:{
    t:"4",
    r:"8",
    b:"6",
    l:"8",
   }
},
}
 


const AdditionalReading:FC = () => {
  return (
   <Table {...AdditionalReadingData} />
  )
}

export default AdditionalReading