import React,{FC,useState} from 'react'
import Link from 'next/link';
import DropDownIcon from "./DropDownIcon";


interface NavItemProps {
navTitle:string;
navLinks:{title:string;link:string}[]
}

const NavItem:FC<NavItemProps> = ({navTitle,navLinks}) => {
let [selected,setSelected]=useState<boolean>(false);

const handleMouseOver=()=>{
    setSelected(true);
}
const handleMouseOut=()=>{
    setSelected(false);
}

  return (
    <div className='relative h-full' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
         <div
            className='flex h-full cursor-pointer pr-[5px] pl-[30px] gap-x-[10px] items-center'
          >
            <li className={`text-[16px]  ${selected && "text-[#C40000]"} w-fit-content`}>
              {navTitle}
            </li>
            <DropDownIcon className={`${selected?"fill-[#C40000]":"fill-black"}`}/>
          </div>
          
          <div
            className={`absolute top-15 z-50 bg-green-100
            rounded-[5px] ${
              !selected && 'hidden'
            } w-[250px] py-2`}
          >
             <ul>
                {navLinks.map(({title,link})=>{
                    return   <Link href={link}>
                        <a>
                        <li className='px-4 py-3 cursor-pointer 
                        text-black hover:bg-green-200'>{title}</li>
                        </a>
                  </Link>
                }) }
             </ul>
          </div>
    </div>
  )
}

export default NavItem