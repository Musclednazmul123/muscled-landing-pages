import { FC,useState } from 'react'
import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import Muscled from "..//assets/svg/Muscled";
import NavItem from "./NavItem";
import {SeoLeadData,EcommerceData,UXInteractiveData,OurTechnologyData,WhoWeAreData} from "./NavItemsData";


const Header: FC = () => {

  return (
    <div className='flex bg-white shadow-sm justify-between 
    w-full items-center lg:px-[50px] h-[100px]'>
      {/* Logo  */}
      
        <Muscled />
      

      {/* Menu */}
      <ul className='h-[100px] text-sm xl:text-md justify-center   hidden lg:flex'>
   <NavItem {...SeoLeadData}/>
   <NavItem {...EcommerceData}/>
   <NavItem {...UXInteractiveData}/>
   <NavItem {...OurTechnologyData}/>    
   <NavItem {...WhoWeAreData}/>    
      </ul>

      {/* Button Get free Proposal */}

      <button className='bg-black rounded-[35px]  justify-center items-center
      h-[48px] text-white px-[20px] py-[15px]
       cursor-pointer hidden lg:flex w-[200px] font-[500] text-[18px]'>
        Get Free Proposal
      </button>

      <MenuIcon className='lg:hidden h-10 w-10' />
    </div>
  )
}

export default Header