import React,{useState} from "react";
import { FC } from "react";
import {ChevronDoubleRightIcon, ChevronDownIcon } from "@heroicons/react/solid";

interface TableProps {
  list: string[];
}

const TableOfContent: FC<TableProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
 
  function toggle() {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      {/* header */}
      <div className="border-[1px] border-solid border-black border-opacity-[30%] rounded-[10px] w-[440px]">
        <div className="bg-[#F2F2F2] text-white py-2 px-8 flex 
        justify-between items-center h-[60px] rounded-tl-[10px] rounded-tr-[10px]">
          <h2 className="flex items-center text-xl gap-[10px] font-bold text-black-80">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="5" fill="black" fill-opacity="0.8"/>
<path d="M20 9.77778H7.55556V8H20V9.77778ZM20 13.3333H7.55556V11.5556H20V13.3333ZM20 16.8889H7.55556V15.1111H20V16.8889ZM5.77778 16.8889H4V15.1111H5.77778V16.8889ZM5.77778 8V9.77778H4V8H5.77778ZM5.77778 13.3333H4V11.5556H5.77778V13.3333Z" fill="white"/>
</svg>

            Table of Contents
          </h2>
          <div onClick={toggle} className="cursor-pointer">
            <ChevronDownIcon className={`w-9 h-9 transition-transform text-black-80 ${
            isOpen ? "rotate-0" : "-rotate-180"} `} />
          </div>
        </div>

        <ul className={`bg-inherit  pl-4 py-2 rounded-[10px] rounded-bl-[10px] rounded-br-[10px] ${
          isOpen ? "animate-slide" : "animate-slideUp pl-0 py-0"} `}>
            
          { isOpen && list.map((e) => {
            return (
              <li className="flex items-center text-black-100 font-light py-2 gap-2">
                <div>
                <ChevronDoubleRightIcon className="fill-black-80 w-5 h-5" />
                </div>
                <p className="text-base leading-[24px]">{e}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default TableOfContent;
