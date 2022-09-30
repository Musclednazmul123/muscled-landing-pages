import { InputRange, Pricing } from "components/elassari";
import Button from "components/Fawwaz/Button";
import FlexLayout from "../layout/FlexLayout";
import Slider from "../Slider"; 
import { Section } from "components/Fawwaz/Sections";
import React from "react";

interface SliderItem{
  title:string,
  tags:string[]
}
let slidersData:SliderItem[]=[
{
title:"Amount of pages",
tags:["0-10", "10-50", "50-100","250"]
},
{
title:"Design",
tags:["Simple", "Simple yet attractive", "Attractive","World Class"],
},
{
  title:"Pages in a copywriting project",
  tags:["0-5", "5-10", "10-20","25-50"]
},
{
  title:"SEO",
  tags:["10 Keywords", "30 Keywords", "100 Keywords","150 Keywords"]
},
{
  title:"Adaptive Design",
  tags:["No", "Maybe", "Yes"]
},
{
title:"Integration of databases",
tags:["None", "Basic", "Ultra"]
},
{
  title:"Ecommerce capabilities",
  tags:["None", "Basic", "Ultra"]
},{
  title:"CMS",
  tags:["None", "Basic", "Ultra"]
}
]


const PriceTable = () => {
  return (
    <Section className="w-[996px] mx-auto my-[84px]">
      <Pricing
        title={"Get a Free Quote Now Making use of our web design calculator"}
        desc={`For a free, immediate quote, enter your needs into the sliders below and then click the "See Pricing" button. You'll get an overall range outlining how much it may cost to have such a website carried up because we\'ll give you both low and high end estimates for each service category.`}
      >
        {
          slidersData.map((sliderItem)=>{

            return <FlexLayout justify="justify-between">
              <p className="text-2xl text-white">{sliderItem.title}</p>
              <Slider percentage={50} tags={sliderItem.tags}
              timelineColor="bg-[#789BDA]"
              rangeColor="bg-[#848994]"
              handleIconFill="fill-[#789BDA]"
              handleBgColor="bg-white"
              handleTextColor="text-[#0B2272]"
              handleClassName="rounded-[5px] py-6"/>
            </FlexLayout> 
          })
        }

        </Pricing>

      <div className="w-full my-7">
        <Button
          textColor="text-white"
          bgColor="bg-black"
          className="mx-auto text-xl w-[234px] font-[500] h-[60px]"
        >
          See Pricing
        </Button>
      </div>
    </Section>
  );
};

export default PriceTable;
