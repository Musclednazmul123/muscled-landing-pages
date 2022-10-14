import { FC } from 'react'
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
    <div className='flex relative  bg-white shadow-sm  justify-between 
    w-full items-center lg:px-[50px] h-[100px]'>
      {/* Logo  */}
        <div className='flex gap-x-[12px]'>
        <Muscled />
        <p className='text-black-80 text-[10px] 
        leading-[10px] font-[500] w-[108px] xl_2:block hidden'>Digital Marketing
That Drives Revenue®</p>
        </div>
      

      {/* Menu */}
      <div className="flex items-center ">
      <div className='h-[100px]  text-sm xl:text-md justify-center 
      hidden lg:flex gap-x-[15px] xl_2:gap-x-[49px]'>
   <NavItem navTitle='Services'>
    <div className='flex justify-between w-full gap-x-[16px]'>
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


<NavItem navTitle="Learn">
<div className='flex justify-between w-full gap-x-[16px]'>
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


<NavItem navTitle="Who We Are">
<div className='flex justify-between w-full gap-x-[16px]'>
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

<NavItem navTitle="Our Technolgy">
<div className='flex justify-between w-full gap-x-[16px]'>
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

<NavItem navTitle="Our Projects">
<div className='flex justify-between w-full gap-x-[16px]'>
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
      </div>

      {/* Button Get free Proposal */}

      <button className='bg-black rounded-[35px]  justify-center items-center
      h-[48px] text-white px-[20px] py-[15px]
       cursor-pointer hidden lg:flex w-[200px] font-[500] text-[18px]'>
        Get Free Proposal
      </button>

      </div>

      
      <MenuIcon className='lg:hidden h-10 w-10' />
    </div>
  )
}

export default Header