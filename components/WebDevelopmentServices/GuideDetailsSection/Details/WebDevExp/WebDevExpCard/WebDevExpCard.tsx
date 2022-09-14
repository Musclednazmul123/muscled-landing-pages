import React,{FC} from 'react'
import WebsiteDevCounter from "./WebsiteDevCounter/WebsiteDevCounter";
import Image from "next/image";


const WebDevExpCard:FC = () => {
  return (
    <div className='flex w-[667px] min-h-[392px] bg-[#1F1F1F] justify-around rounded-lg items-center'>

<div className='flex flex-col w-[340px] space-y-[41px]'>

<div  className='text-white text-3xl font-semibold leading-[48.75px] w-[340px]'>    
      <p>We don’t want to</p> 
<p>tell you about the</p>
<p>work we do,</p> 
<p className='whitespace-nowrap'>we want to <span className='text-[#C40000]'>SHOW</span> you.</p>
</div>

<button className='bg-white text-base flex rounded-lg
 justify-center max-w-[224px] min-h-[56px] text-[#141010] font-semibold items-center'>
  View our Portfolio 
  <div className='ml-2 mt-2'><Image src="/webDevExpArrow.png" width="24" height="24"/>
  </div>
  </button>
</div>


<div className='w-[210px] flex flex-col space-y-[12px] items-center'>
<div className='w-[130px] h-[66px]'>
  <p className="text-white text-xl font-semibold text-center leading-[32.5px]">WE’VE BUILT OVER</p>
</div>
<WebsiteDevCounter num={6666}/>
<div className='flex flex-col space-y-1 w-[190px]'>
<p className='text-xl text-white font-semibold text-center'> WEBSITES</p>
<p className='text-base text-[#808080] text-center whitespace-nowrap'>in a variety of industries</p>
</div>
</div>

    </div>
  )
}

export default WebDevExpCard