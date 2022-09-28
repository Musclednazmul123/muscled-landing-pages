import React,{FC} from 'react'

interface tableListProps{
className?:string
list:string[],
fontSize?:string,
gap?:string
}

const Tablelist:FC<tableListProps> = ({
    className,
    list,
    fontSize,
    gap
}) => {
  return (
    <ul className={` flex flex-col text-[#333333] ${fontSize || "text-[14px]"} ${className}  
    list-inside list-disc  ${gap ||"space-y-6"}`}>
     {
       list?.map(item=><div className='flex'>
       <li></li><p className='-ml-1 leading-[21px]'>{item}</p>
       </div>)
     }
    </ul>
  )
}

export default Tablelist