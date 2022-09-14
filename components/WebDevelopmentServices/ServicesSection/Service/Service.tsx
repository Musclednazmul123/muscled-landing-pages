import React,{FC} from 'react'
import Link from "next/link";
import Image from "next/image";


const Service:FC = () => {
  return (
    <div className='flex flex-col text-white bg-[#141010] space-y-[90px]
    pt-4 pb-[24px] pr-[24px]  pl-[13px] rounded-lg justify-around'>
        <div className='text-2xl leading-[154%] font-[500]'>
        <p>Responsive Website</p>
        <p>Development</p>
        </div>
        <button className='flex space-x-3 items-center font-normal text-lg'>
            LEARN MORE
            <div className='ml-2 mt-2'>
            <Image src="/servicesArrow.png" width="24px" height="24px" ></Image>
            </div>
        </button>
    </div>
  )
}

export default Service