import React,{FC} from 'react'
import NavSubListItem from "./NavSubListItem";
import {NavSubItemProps} from "../../../types/types";


const NavSubItem:FC<NavSubItemProps> = ({
    icon,
    subCategoryTitle,
    navLinks,
    bgColor="bg-[#FCF2FD]",
    bgIconProps

}) => {
  return (
    <div className={`relative flex flex-col gap-y-[16px] items-start  w-[332px] h-[461px] pt-[20px]
     px-[20px] pb-[60px] ${bgColor} rounded-[5px]`}>
    <div className='flex gap-x-[10px] items-center'>
        {icon}
        <p className='text-[16px] text-black'>{subCategoryTitle}</p>
    </div>
    <div className='flex flex-col items-start gap-y-6'>
     {
    navLinks.map(linkItem=>{
        return <NavSubListItem {...linkItem} />
    })
     }
    </div>
    {
      bgIconProps && <div className={`absolute ${bgIconProps?.className}`}>
        {bgIconProps.icon}
      </div>
    }
    </div>
  )
}

export default NavSubItem