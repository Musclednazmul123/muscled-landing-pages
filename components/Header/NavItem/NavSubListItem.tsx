import React,{FC,useState} from 'react'
import Link from "next/link";
import {HoverListIcon} from "./Icons";


interface NavSubListItemProps
{
    linkTitle:string,
    link:string
}

const NavSubListItem:FC<NavSubListItemProps> = ({
linkTitle,
link
}) => {
    const [hovered,setHovered]=useState<boolean>(false);

    const handleMouseOver=()=>{
        setHovered(true);
    }
    const handleMouseOut=()=>{
        setHovered(false);
    }

  return (
    
        <div  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Link href={link}>
                        <a>
                        <p className="text-[16px] font-300 text-black-70">{linkTitle}
                          <span className='relative -right-0 top-0'>
                        <span className={`absolute ml-2 ${hovered?"inline opacity-1":"hidden opacity-0"}`}>
                    {HoverListIcon}
                  </span>
                  </span>
                  </p>
                    </a>
                  </Link>
        </div>
                  
    
  )
}

export default NavSubListItem