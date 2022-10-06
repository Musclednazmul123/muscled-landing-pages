import * as React from 'react'
import { NextPage} from 'next'
import HeroSection from "../../components/WebDevelopmentServices/HeroSection";
import OurPartnersSection from "../../components/WebDevelopmentServices/OurPartnersSection";
import PromotionSection from "../../components/WebDevelopmentServices/PromotionSection/PromotionSection";
import TestimonialsSection from "../../components/WebDevelopmentServices/TestimonialsSection/TestimonialsSection";
import TestimonialMedia from "@/components/WebDevelopmentServices/TestimonialsSection/TestimonialsMedia/TestimonialsMedia";
import ServicesSection from "../../components/WebDevelopmentServices/ServicesSection/ServicesSetion";
import GuideDetailsSection from "../../components/WebDevelopmentServices/GuideDetailsSection/GuideDetailsSection";
import ImportantLinksSection from "../../components/WebDevelopmentServices/ImportantLinksSection/ImportantLinksSection";
import {Props,returnServerSiderProps,ServerProps,heroSectionProps,partnersSectionProps} from "../../components/WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";
import {testimonialsSectionProps} from "../../components/WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";


export  async function getServerSideProps (context:ServerProps): Promise<returnServerSiderProps> {
 
  //This Implementation not used instead Hard coded routes proviced to hero section 
let reqURL:string | undefined=context?.query?.url;
let routesVisited:string[] | undefined=reqURL?.split("/");
routesVisited?.splice(0,1,"Home");
let props:Props={routes:routesVisited};
let result:returnServerSiderProps={
  props
}
return result;
}

let heroSectionData:heroSectionProps={
  heroData:{
    heading:"Web Development Services: We Speak Your Language",
    headingWidth:"720",
    paragraph:"PHP. ASP. HTML5. No matter what language your website, application, or custom development project speaks — or needs to speak — we can help. WebFX’s skilled team of developers can deliver a highly customized and fully integrated web development solution at a competitive cost."
  },
  routesVisited:["Home","Web Development","Serivces"]
}

let ourPartnersSectionData:partnersSectionProps={
  variant:"webDev",
  heading:"Our  Partners",
  logos:{
    sources:['/partners1.png','/partners2.png','/partners3.png','/partners4.png','/partners5.png','/partners6.png'],
    width:"138",
    height:'36px',
  },
  
  }

  let testimonialsSectionData:testimonialsSectionProps={
    variant:"shopifyDev",
    testimonialData:{
        details:"“Muscled has gone above and beyond to make me happy. So far, after a few months, I have already seen significant improvement in rankings and conversions, and they have also greatly improved the speed of my site.”",
        owner:"Owner",
        company:"Company Name"
    },
    Media:TestimonialMedia
}



const Page: NextPage<Props> = (props) => {
  console.log(props.routes);
  return <div className='w-full'>
  <HeroSection {...heroSectionData}/>
  <OurPartnersSection {...ourPartnersSectionData} />
  <PromotionSection />
  <TestimonialsSection {...testimonialsSectionData} />
  <ServicesSection />
  <GuideDetailsSection />
  <ImportantLinksSection />
  </div>
}

export default Page
