import React,{FC} from 'react'
import HeroSection from "./HeroSection";
import RedesignSVG from "../../assets/svg/RedesignSVG";
import Button from "../../Fawwaz/Button";

const Hero:FC = () => {
  return (
    <div className="h-fit bg-black-70 px-3">
    <HeroSection
            title="Website Redesign Services: Get Your Revenue a Workout!"
            description="Our goal is to improve your bottom line. Expect to get more traffic, better leads, and an increase in your revenue. All that you need to know about Muscled Digital Agency’s 
            competitive website redesign services is right below. 
            You can also fill out the form below to get an exact quote!"
            heroSVG={<RedesignSVG className="w-80 lg:w-full" />}
            descriptionClassName="text-[20px] leading-[30px]">
                {
                    <div className='flex gap-x-3'>
                        <Button textSize='text-xl'className='w-[176px] h-[60px]'
                         textColor='text-black' bgColor='bg-white'>View portfolio</Button>
                        <Button textColor='text-white' className='font-[600] w-[296px] h-[60px]'
                         bgColor='bg-black' textSize='text-xl'>Build a custom quote</Button>
                    </div>
                }
    </HeroSection>
    </div>
  )
}

export default Hero;
