import React,{FC} from 'react';
import Service from "./Service/Service";

let servicesData=[1,2,3,4,5,6,7,8,9,10,11,12];

const ServicesSetion:FC = () => {
  return (
    
    <div className="flex flex-col items-center mt-12 space-y-4">
        <div>
            <p className='text-[40px] font-bold text-[#141010] '>Our Web Development Services</p>
        </div>
        <div>
            <p className='font-normal text-xl text-[#4F4F4F]'>Explore our web development services below.</p>
        </div>
        <div className='grid grid-cols-[repeat(1,308px)] grid-rows-[repeat(12,308px)]
        sm:grid-cols-[repeat(2,308px)] sm:grid-rows-[repeat(6,308px)]
        lg:grid-cols-[repeat(3,308px)] md:grid-rows-[repeat(4,308px)]
         md:gap-20
         sm:gap-10
         gap-5 
         auto-rows-[308px] pt-9'>
            {
              servicesData.map((items:number,index:number):JSX.Element=>{
                return <Service key={index}/>
              })
            }
        </div>
        </div>

    
        
  )
}

export default ServicesSetion