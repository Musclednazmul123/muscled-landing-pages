import React from 'react'
import { contents } from '../../data/questions'
import Image from 'next/image'
import ListIcon from '../../../assets/SocialAdvertisingServices/questions/listIcon.png'
import List from '../questions/list'


const TableOfContents = () => {
  const toggleTable = () => {
    document.getElementById('list')?.classList.toggle('hidden')
    document.getElementById('table')?.classList.remove('h-[620px]')
    document.getElementById('contentHeader')?.classList.toggle('rounded-b-xl')
    document.getElementById('tableArrow')?.classList.toggle('rotate-180')
  }
  return (
    <div
      className="flex flex-col justify-between bg-white items-center  rounded-xl sticky top-5 w-[440px]  transition-all ease-in-out duration-300 delay-50"
      id="table"
    >
      <div
        className="py-4 px-12 rounded-t-xl bg-[#3E5661] text-white w-full flex justify-between items-center h-[70px] space-x-4"
        id="contentHeader"
      >
        <div className="flex items-center gap-x-4 text-[20px] font-bold">
          <Image src={ListIcon} alt="list" width={26} height={20} />
          Table Of Contents
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer transition-all ease-in-out duration-300 rotate-180 font-bold"
          id="tableArrow"
          onClick={(e) => {
            toggleTable()
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        {/* <div
          id="tableArrow"
          onClick={(e) => {
            toggleTable()
          }}
        >
          <Image
            src={Caret}
            width={10}
            height={18}
            className=" flex items-center transition-all ease-in-out duration-300 rotate-180 font-bold"
          />
        </div> */}
      </div>
      <List
        content={contents}
        className="text-[#5F27BD] cursor-pointer underline px-[20px] py-[10px] text-[20px] leading-[30px]  space-y-[20px] font-normal md:m-auto rounded-b-xl w-[400px] flex flex-col justify-center"
        id="list"
      />
    </div>
  )
}
export default TableOfContents
