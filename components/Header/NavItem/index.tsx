import React,{FC,useState} from 'react';
import {NavItemProps} from "../../../types/types";
import DropDownIcon from "./DropDownIcon";


const NavItem:FC<NavItemProps> = ({navTitle,children}) => {
let [selected,setSelected]=useState<boolean>(false);

const handleMouseOver=()=>{
    setSelected(true);
}
const handleMouseOut=()=>{
    setSelected(false);
}

  return (
    <div className='h-full' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
         <div
            className={`flex h-full cursor-pointer  
            xl_2:px-[30px] px-[22px] gap-[15px]  items-center ${selected && "bg-[#DBDBDB] bg-opacity-[15%]"}`}
          >
            <p className={`text-[16px]  ${selected && "text-[#C40000]"} w-fit-content`}>
              {navTitle}
            </p>
            <div className={`${selected?"rotate-180":"rotate-0"}`}>
            <DropDownIcon className={`${selected?"fill-[#C40000]":"fill-black"}`}/>
            </div>
          </div>
          
          <div
            className={`absolute h-screen bg-[#FFFFFF]  top-18  left-0  w-full  pt-[50px] 
            pr-[30px] pb-[70px] pl-[30px]
     ${
              !selected && 'hidden'
            }`}
          >
             {children}
          </div>
    </div>
  )
}


export default NavItem;

{/* <ul>
                {navLinks.map(({title,link})=>{
                    return   <Link href={link}>
                        <a>
                        <li className='px-4 py-3 cursor-pointer 
                        text-black hover:bg-green-200'>{title}</li>
                        </a>
                  </Link>
                }) }
             </ul> */}