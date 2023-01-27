import React,{FC} from 'react';
import { useRouter } from 'next/router';

const ExtractRoutes:FC = () => {
    const router=useRouter();
    const routesArray=router.asPath;

    let bc = "Home"
    const pageroute = routesArray.split("/").map((e, i)=>{
      if(i==0){
        bc += `${e}`
      } else {
        bc += ` > ${e}`
      }
      
    })
    console.log(pageroute)
  return (
    <div className='flex space-x-2 text-white'>
      <p className='font-[500] text-lg'>{bc}</p>
        </div>
  )
}

export default ExtractRoutes