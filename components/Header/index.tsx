import { FC,useState } from 'react'
import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import Muscled from "..//assets/svg/Muscled";
import NavItem from "./NavItem";
import NavSubItem from "./NavItem/NavSubItem"
import {SeoLeadDataSubCatData} from "./NavItem/NavItemsData";
import VideoItem from "./NavItem/VideoItem";
import SeoLeadGenVideoPlayer from "./NavItemComponents/SeoLeadGenVideoPlayer"; 

const Header: FC = () => {

  return (
    <div className='flex relative  bg-white shadow-sm z-10 justify-between 
    w-full items-center lg:px-[50px] h-[100px]'>
      {/* Logo  */}
      
        <Muscled />
      

      {/* Menu */}
      <div className='h-[100px] text-sm xl:text-md justify-center hidden lg:flex'>
   <NavItem navTitle='SEO & Lead Generation'>
    <div className='flex justify-between bg-[#FFFFFF] w-full'>
    {
       SeoLeadDataSubCatData.map((subCategory)=>{
        return <NavSubItem {...subCategory} />
       })
    }
    <VideoItem  title="Our Missions"
    videoPlayer={<SeoLeadGenVideoPlayer />}
     buttonProps={{text:"Send Proposals",link:"/"}}/>
    </div>
   </NavItem>
<NavItem navTitle="Learn" />
<NavItem navTitle="Who We Are" />
<NavItem navTitle="Our Technolgy" />
<NavItem navTitle="Our Projects" />
      </div>

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