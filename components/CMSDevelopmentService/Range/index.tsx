import React, { useState } from "react";
import Button from "@/components/Fawwaz/Button";
import FlexLayout from "@/components/layout/FlexLayout";
import Slider from "../../Slider";

interface SliderItem{
  title:string,
  tags:string[]
}
let slidersData:SliderItem[]=[
{
title:"Number of pages",
tags:["0-10", "10-50", "50-100","250"]
},
{
title:"Style of design",
tags:["Simple", "Simple yet attractive", "Attractive","World Class"],
},
{
  title:"Copywriting number of pages",
  tags:["0-5", "5-10", "10-20","25-50"]
},
{
  title:"SEO",
  tags:["10 Keywords", "30 Keywords", "100 Keywords","150 Keywords"]
},
{
  title:"Responsive Design",
  tags:["No", "Maybe", "Yes"]
},
{
title:"Database Integration",
tags:["None", "Basic", "Ultra"]
},
{
  title:"Ecommerce Functionality",
  tags:["None", "Basic", "Ultra"]
},{
  title:"CMS",
  tags:["None", "Basic", "Ultra"]
}
]


const Range = () => {
  return (
    
      <div className="flex flex-col py-[40px] px-[5px] mt-6 font-sans gap-y-20">
      
{      
 
 slidersData.map((sliderItem)=>{ 
 return <FlexLayout justify="justify-between">
            <p className="font-sans text-[24px] font-semibold text-white">{sliderItem.title}</p>
            <Slider tags={sliderItem.tags} percentage={50}
            handleClassName="rounded-full md:p-6"
            handleIconFill='fill-black-80' handleBgColor='bg-white' 
            timelineColor='bg-black'
            rangeColor="bg-black bg-opacity-[30%]"/>
            </FlexLayout>
 })

}               
<FlexLayout justify="justify-end">
                    <div className="md:text-[20px] w-[50%] ">
                        <Button className='w-full py-3.5 px-5 font-semibold text-sm' bgColor='bg-black' textColor='text-white'>See Pricing</Button>
                    </div>
                </FlexLayout>
    </div>
    
  );
};

export default Range;
