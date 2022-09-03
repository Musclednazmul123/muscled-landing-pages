import React from 'react'
import { contents } from '../../data/questions'
import Image from 'next/image'
import ListIcon from '../../../assets/SocialAdvertisingServices/questions/listIcon.png'
import List from '../questions/list'

const TableOfContents = () => {
  const displayContents = (array: string[]) => {
    return array.map((item: string, key: number) => {
      return (
        <li key={key} className="underline my-4">
          <a>{item}</a>
        </li>
      )
    })
  }
  return (
    <div className="flex flex-col justify-between items-center bg-white rounded-xl sticky top-5">
      <p className="py-4 px-12 rounded-t-xl bg-[#3E5661] text-white w-full flex justify-between items-center space-x-4">
        <div className="flex items-center gap-x-4">
          {/* <Image src={ListIcon} alt="list" width={26} height={20} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Table Of Contents
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </p>
      <List
        content={contents}
        className="text-[#5F27BD] underline space-y-4 px-4 py-8 ml-12"
      />
    </div>
  )
}
export default TableOfContents
