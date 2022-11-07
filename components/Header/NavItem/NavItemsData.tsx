import {NavSubItemProps} from "../../../types/types";
import {EcommerceIcon,WebsiteWebAppsIcon,DigitalMarketingIcon} from "./Icons";
import Image from "next/image";
import ecommerce from "../../assets/ecommerce 1.png";
import uiDesign from "../../assets/ui-design 1.png";
import emailMarketing from "../../assets/email-marketing 1.png";

export const SeoLeadDataSubCatData:NavSubItemProps[]=[
{
icon:EcommerceIcon,
subCategoryTitle:"Ecommerce",
navLinks:[
            {linkTitle:"Shopify Development",link:"/services/shopify-development"},
            {linkTitle:"Conversion Rate Optimization (CRO)",link:"/services/coversion-rate-optimization"},
            {linkTitle:"Ecommerce SEO",link:"/services/ecommerce-seo-services"},
            {linkTitle:"Ecommerce PPC Management",link:"/services/ecommerce-ppc-management"},
            {linkTitle:"Ecommerce Social Media Paid Ads",link:"/services/social-media-paid-ads"},
                ],
bgIconProps:{icon:<Image src={ecommerce} width="62" height="62" />,
className:"left-[121.01px] top-[325.89px]"}
},
{
    icon:WebsiteWebAppsIcon,
    subCategoryTitle:"Website and Web Apps",
    bgColor:"bg-[#FDFFE4]",
    navLinks:[
                {linkTitle:"Web Development",link:"/services/web-development"},
                {linkTitle:"Website Design",link:"/services/website-design"},
                {linkTitle:"Website Redesign",link:"/services/website-redesign"},
                {linkTitle:"Website Maintenance",link:"/services/website-maintenance"},
                {linkTitle:"Landing Page Design",link:"/services/landing-page-design"},
                {linkTitle:"UI / UX Analysis",link:"/services/ui-ux-analysis"},
                {linkTitle:"CMS Development",link:"/services/cms-development"},
                
            ],
    bgIconProps:{icon:<Image src={uiDesign} width="54" height="67" />,
    className:"left-[232.68px] top-[63.26px]"}
    },
    {
        icon:DigitalMarketingIcon,
        subCategoryTitle:"Digital Marketing",
        bgColor:"bg-[#F8FBFF]",
        navLinks:[
                    {linkTitle:"Digital Marketing",link:"/services/digital-marketing"},
                    {linkTitle:"SEO Marketing",link:"/services/seo-marketing"},
                    {linkTitle:"SEO Audit",link:"/services/seo-audit"},
                    {linkTitle:"Enterprise Social Media Advertising",link:"/services/enterprise-social-media-advertising"},
                    {linkTitle:"Social Media",link:"/services/social-media"},
                    {linkTitle:"Muscled D2C Social Advertising",link:"/services/d2c-social-advertising"},
                    {linkTitle:"Social Advertising by Muscled",link:"/services/social-advertising"},
                    {linkTitle:"Muscled Website Rainmaker",link:"/services/muscled-website-rainmaker"},
                    {linkTitle:"Professional Website Copywriting Offers",link:"/services/professional-website-copywriting-offers"},
                        ],
                        
                        bgIconProps:{icon:<Image src={emailMarketing} width="67" height="67" />,
                        className:"left-[220.33px] top-[196.87px]"}
        }

];



export const EcommerceData={
    navTitle:"Ecommerce",
    navLinks:[
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},
        {title:"CMS Development",link:"/home/services/cms-development"},]
    }

    export const UXInteractiveData={
        navTitle:"UX & Interactive",
        navLinks:[
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},
            {title:"CMS Development",link:"/home/services/cms-development"},]
        
        
        }

    export const OurTechnologyData={
            navTitle:"Our Technology",
            navLinks:[
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},
                {title:"CMS Development",link:"/home/services/cms-development"},]
            
            
            }

        export const WhoWeAreData={
                navTitle:"Who We Are",
                navLinks:[
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},
                    {title:"CMS Development",link:"/home/services/cms-development"},]
                
                
                }


                // navLinks:[
                //     {title:"SEO Marketing Services",link:"/seo/services/seo-marketing"},
                //     {title:"SEO Audit Services",link:"/seo/services/seo-audits"},
                //     {title:"Social Media Services",link:"/social-media/services"},
                //     {title:"Enterprise Social Media Advertising Services",link:"/home/services/cms-development"},
                //     {title:"Services for Paid Social Media ad",link:"/social-media/services/paid-social-ad"},
                //     {title:"CMS Development",link:"/home/services/cms-development"},
                //     {title:"CMS Development",link:"/home/services/cms-development"},
                //     {title:"CMS Development",link:"/home/services/cms-development"},
                //     {title:"CMS Development",link:"/home/services/cms-development"},
                //     {title:"CMS Development",link:"/home/services/cms-development"},
                // ]