import React from 'react'
import { NextPage, NextPageContext} from 'next'
import HeroSection from '../../components/WebDevelopmentServices/HeroSection';
import OurPartnersSection from '../../components/WebDevelopmentServices/OurPartnersSection';
import PromotionSection from '../../components/ShopifyDevServices/PromotionSection/PromotionSection'
import TestimonialsSection from "../../components/WebDevelopmentServices/TestimonialsSection/TestimonialsSection";
import {heroSectionProps,partnersSectionProps} from "../../components/WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";
import {testimonialsSectionProps} from "../../components/WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";

export async function getServerSideProps(props:NextPageContext){

    return {props:{

    }}

}


let heroSectionData:heroSectionProps={
    heroData:{
        heading:'Shopify Ecommerce Development Services By Muscled',
        paragraph:'Shopify has garnered it´s reputation as one of the most popular ecommerce platforms out there, and for good reason. The flexibility and ease of use is accompanied by a myriad of useful features. Here at Muscled we offer Shopify Ecommerce Dev Services led by our experienced team. In order to help you take full advantage of what Shopify offers.',
    },
    routesVisited:["Home","SEO","Serivces"]
}

let ourPartnersSectionData:partnersSectionProps={
    variant:"shopifyDev",
    heading:"Our  Partners",
    logos:{
      sources:['/partners1.png','/partners2.png','/partners3.png','/partners4.png','/partners5.png','/partners6.png'],
      width:"154",
      height:'34',      
    },
    }

let testimonialsSectionData:testimonialsSectionProps={
    variant:"shopifyDev",
    testimonialData:{
        details:"“Muscled has gone above and beyond to make me happy. So far, after a few months, I have already seen significant improvement in rankings and conversions, and they have also greatly improved the speed of my site.”",
        owner:"Owner",
        company:"Company Name"
    },
    media:{
        url:"/"
    }
}


const Page:NextPage = () => {
  return (
    <div className='w-full'>
        <HeroSection {...heroSectionData}/>
        <OurPartnersSection {...ourPartnersSectionData} />
        <PromotionSection />
        <TestimonialsSection {...testimonialsSectionData} />
    </div>
  )
}

export default Page