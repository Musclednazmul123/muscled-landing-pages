import React,{FC} from 'react';
import { useRouter } from 'next/router';

const ExtractRoutes:FC = () => {
    const router=useRouter();
    const routesArray=router.asPath;

    const breadcrumb = routesArray.replace("/", " > ")


    // routesArray.pop();
    // routesArray.splice(0,1,"Home")
    // console.log(routesArray); 
    // let uperCasedRoutes=routesArray.map((route)=>{

    //     const capitalized=route.includes("-")? route.split("-").map((route)=>{
    //         return route.replace(/^./,route[0].toUpperCase());
    //     }).join(" "):
    //     route.replace(/^./,route[0].toUpperCase());
    // return capitalized;
    // })

    // console.log(uperCasedRoutes);

    // let transformedRoutes=uperCasedRoutes.join(">").split("");
    console.log(breadcrumb);

  return (
    <div className='flex space-x-2 text-white'>
      <p className='font-[500] text-lg'>Home {breadcrumb}</p>
        {/* {
            uperCasedRoutes?.map((route,index)=>{
                return (
                    index!==uperCasedRoutes.length-1?
                    <div key={`${index}-breadcrumb-${index}`}>
                    <p className='font-[500] text-lg'>{route}</p>
                    <p className='font-[500] text-lg'>{">"}</p>
                    </div>:<p key={`${index}-breadcrumb-${index}`} className='font-[500] text-lg'>{route}</p>
                )
            })
        } */}
        </div>
  )
}

export default ExtractRoutes