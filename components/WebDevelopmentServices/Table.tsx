import React,{FC} from 'react'
import Image from "next/image";
import Link from "next/link";
import { tableContentProps } from './WebDevInterfaces/WebDevInterfaces';


const Table:FC<tableContentProps> = (props)=> {
    console.log(props.tableWidth);
  return (
    <div className={`flex flex-col rounded-lg w-[${props?.tableWidth}px] border-[#BDBDBD] border-[1px]
     border-t-0`}>

<div className="flex rounded-t-lg rounded-r-lg space-x-4 bg-[#BDBDBD] pt-[16px] pb-[16px] pl-[28px] ">
    <div className='self-end pt-[6px]'>
        {props?.tableIcon}
    </div>
    <div>
        <p className="text-[20px] text-#333333 font-[500]">{props.tableTitle}</p>
    </div>
    <div>
        <Image src="/arrowDown.png" width="12" height="6"/>
    </div>
</div>

<div className={`bg-[#BDBDBD33] pt-5 pb-5 pl-3 rounded-l-lg 
rounded-b-lg ${props?.subSection?"block":"hidden"}`}>
    <Link href={`${props?.subSection?.link}`}>
    <a className='text-xl text-[#13C47F] font-[500] underline'>{props?.subSection?.title}</a>
    </Link>
</div>

<div className={
    `${props?.list?.padding?`pl-${props?.list?.padding.l} pr-${props?.list?.padding.r} pt-${props?.list?.padding.t}
     pb-${props?.list?.padding.b} `
    :"pl-8 pr-8 pt-7 pb-6" } flex justify-center`}>
<ul className={`font-normal text-${props?.list?.fontSize || "sm"} text-[#333333] list-inside list-disc flex flex-col 
   space-y-${props?.list?.itemsGap || "6"}`}>
    {
        props?.list?.items?.map((item)=>{

return     <div className='flex leading-[21px]'>
<li></li><p className='-ml-1'>{item}</p>
</div>
        })
} 
</ul>
</div>

    </div>
  )
}

export default Table;