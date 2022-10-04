import FlexLayout from "@/components/layout/FlexLayout";
import Button from "../../Fawwaz/Button";
import Slider from "../../Slider";
import CostInfo from "./CostInfo";



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




const Cost = () => {
  return (
    <div className="p-16 bg-[#F5F5F5]">
        <div className="bg-black text-white w-full p-16 pb-6">
          <h2 className="text-[40px] font-bold mb-8 w-[70%] text-white">
            Get an Instant Quote With Our Web Design Calculator
          </h2>
          <p className="text-[20px]">
            Prices for website builders range from zero to more than $500 per
            month, with yearly maintenance fees ranging from zero to $5400. Your
            company&apos;s website builder costs will vary depending on a number
            of criteria, including the level of functionality you want.
          </p>
          <div className="py-14 space-y-16  mx-auto">
          {      
 
 slidersData.map((sliderItem)=>{ 
 return <FlexLayout justify="justify-between">
            <p className="font-sans text-[20px] font-semibold text-white">{sliderItem.title}</p>
            <Slider tags={sliderItem.tags} percentage={50}
            handleClassName="rounded-[10px] py-6"/>
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
        <div className="py-16">
          <CostInfo />
        </div>
    </div>
  );
};

export default Cost;
