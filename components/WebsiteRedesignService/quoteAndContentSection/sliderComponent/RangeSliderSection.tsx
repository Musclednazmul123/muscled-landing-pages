import React, { FC } from 'react'
import FlexLayout from "./FlexLayout";
import Button from "../../../Fawwaz/Button";
import Slider from "../../../Slider";
import { RangeSliderSectionProps } from 'components/Fawwaz/component.type';


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
  


const RangeSliderSection: FC<RangeSliderSectionProps> = ({
    bgColor,
    textColor,
    ...props
}) => {
    return (
        <div className={`${bgColor} ${textColor} w-full p-16`}>
            <h2 className={`${textColor} text-[40px] font-bold mb-8 w-[70%]`}>
                Request an Instant Quote using  Our Website Design Calculator
            </h2>
            <p className="text-[20px]">
                To get a free, instant quote, use the sliders below to indicate your needs,
                then click the "See Pricing" button. We'll show you both low and high-ended
                estimates for each service category, so you'll have an overall range of how
                much it might cost to build such a website.
            </p>
            <div className="py-14 space-y-10 mx-auto">
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
        </div>
    )
}

export default RangeSliderSection