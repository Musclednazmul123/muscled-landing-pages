import React, { FC } from 'react'
import FlexLayout from "./FlexLayout";
import Button from "../../../Fawwaz/Button";
import Slider from "./Slider";
import { RangeSliderSectionProps } from 'components/Fawwaz/component.type';

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
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">Number of pages</h5>
                    <Slider percentage={50} tags={["0-10", "10-50", "50-100"]} sliderColor={'bg-[#0f0d10]'} />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">Style of design</h5>
                    <Slider
                        percentage={50}
                        tags={["Simple", "Simple yet attractive", "Attractive"]}
                        sliderColor={'bg-[#0f0d10]'}
                    />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">
                        Copywriting number of pages
                    </h5>
                    <Slider percentage={50} tags={["0-5", "5-10", "10-20"]} sliderColor={'bg-[#0f0d10]'} />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">SEO</h5>
                    <Slider
                        percentage={50}
                        tags={["10 Keywords", "30 Keywords", "100 Keywords"]}
                        sliderColor={'bg-[#0f0d10]'}
                    />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">Responsive Design</h5>
                    <Slider percentage={100} tags={["No", "Maybe", "Yes"]} sliderColor={'bg-[#0f0d10]'} />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">Database Integration</h5>
                    <Slider percentage={50} tags={["None", "Basic", "Ultra"]} sliderColor={'bg-[#0f0d10]'} />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">Ecommerce Functionality</h5>
                    <Slider percentage={50} tags={["None", "Basic", "Ultra"]} sliderColor={'bg-[#0f0d10]'} />
                </FlexLayout>
                <FlexLayout justify="justify-between">
                    <h5 className="text-xs md:text-[20px] font-bold">CMS</h5>
                    <Slider percentage={50} tags={["None", "Basic", "Ultra"]} sliderColor={'bg-[#0f0d10]'} />
                </FlexLayout>
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