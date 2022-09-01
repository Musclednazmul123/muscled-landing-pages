import React from 'react'
import { contents } from '../../data/questions'
import Image from 'next/image'
import ListIcon from '../../../assets/SocialAdvertisingServices/questions/listIcon.png'

const TableOfContents = () => {
  const displayContents = () => {
    return contents.map((item: string, key: number) => {
      return (
        <li key={key} className="underline my-4">
          <a>{item}</a>
        </li>
      )
    })
  }
  return (
    <div className="flex flex-col justify-between items-center bg-white rounded-xl">
      <p className="py-4 px-12 rounded-t-xl bg-[#3E5661] text-white w-full flex items-center gap-x-4">
        <Image src={ListIcon} alt="list" width={26} height={20} /> Table Of
        Contents
      </p>
      <ul className="list-disc text-[#5F27BD]">{displayContents()}</ul>
    </div>
  )
}
export default TableOfContents
