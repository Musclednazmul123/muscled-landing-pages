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
      <p className="py-4 px-12 rounded-t-xl bg-[#3E5661] text-white w-full flex items-center gap-x-4">
        <Image src={ListIcon} alt="list" width={26} height={20} /> Table Of
        Contents
      </p>
      <List
        content={contents}
        className="text-[#5F27BD] underline space-y-4 px-4 py-8"
      />
    </div>
  )
}
export default TableOfContents
