import React,{FC} from 'react'
import Image from 'next/image'
import {partnersSectionProps} from "./WebDevInterfaces/WebDevInterfaces";



const OurPartnersSection:FC<partnersSectionProps> = (props) => {


  return (
    <div className={`flex flex-col  h-[123px] bg-white 
    ${props?.variant=="webDev"?"space-y-[24px] py-4 h-[123px]"
    :props?.variant=="shopifyDev"?"space-y-[20px] pt-[22px] pb-[50px] h-[174px]":null}`}>
<p className={`${props.headingColor?props.headingColor: "text-[#333333]"} text-2xl text-center font-bold`}>{props?.heading}</p>
<div className={`flex  justify-center flex-wrap ${props?.variant=="webDev"?"space-x-[56px]"
:props?.variant=="shopifyDev"?"space-x-[65px]":null}`}>
{
    props?.logos?.sources.map((src:string):JSX.Element=>{
      console.log(src);
return ( 
<div>
    <Image src={src} width={props?.logos?.width} height={props?.logos?.height} />
</div>
)
    })
}
</div>
    </div>
  )
}

export default OurPartnersSection