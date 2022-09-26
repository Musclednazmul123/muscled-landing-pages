import React,{ FC,useState } from "react"

import { IconItem } from "../../Fawwaz/Card"
import {  TableOfContent as TableFawaz} from "../../Fawwaz/Table";
import {ChevronDoubleRightIcon} from "@heroicons/react/solid";

import { BsDot } from "react-icons/bs"

const TableOfContent: FC = () => {
  let [isOpen,setIsOpen]= useState<boolean>(true);
  return (
    <TableFawaz
    className="border border-black-30 h-fit"
    bgColor="bg-[#F2F2F2]"
		titleColor="text-black"
		titleIconColor="black"
		isOpen={isOpen}
		setIsOpen={() => setIsOpen((prev) => !prev)}   
     contents={
      <>
        <IconItem
          icon={<ChevronDoubleRightIcon className=" w-5 h-5"/>}
          title="What does website maintenance consist of?"
          className=" mb-5 w-full items-center text-[#4491EC]"
        />
        <IconItem
          icon={<ChevronDoubleRightIcon className=" w-5 h-5"/>}
          title="What type of regular updates are included in website maintenance services?"
          className=" mb-5 w-full items-center text-[#4491EC]"
        />
        <IconItem
          icon={<ChevronDoubleRightIcon className=" w-5 h-5"/>}
          title="What does website maintenance not include?"
          className=" mb-5 w-full items-center text-[#4491EC]"
        />
    </>}
     />
  )
}

export default TableOfContent
