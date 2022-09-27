import React,{FC} from 'react'
import Link from "next/link";
import {ImportantLinkItemDataProps} from "../../ShopifyDevServicesInterfaces/ShopifyDevServicesInterfaces";



  const ImportantLinksItem:FC<ImportantLinkItemDataProps> = ({heading,listItems,bgColor,className}) => {
  return (
<div className={`flex flex-col w-[400px] gap-y-[40px] ${bgColor?bgColor:'bg-[#C40000]'} p-[30px] ${className}`}>
      
      <div>
        <h3 className='text-2xl leading-[36px] font-medium'>{heading}</h3>
      </div>

     {
        listItems.map((item:string):JSX.Element=>{
            return <div className='flex flex-col gap-y-[30px]'>
            <p className='text-xl text-[#141010]'>
              <Link href="/" >
                <a>
                {item}
                </a>
              </Link>
              </p>    
            </div>
        })
     }

    </div>
  )
}


export default ImportantLinksItem