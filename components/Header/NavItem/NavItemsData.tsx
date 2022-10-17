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
            {linkTitle:"Shopify Development",link:"/ecommerce/services/shopify-development"},
            {linkTitle:"Conversion Rate Optimization (CRO)",link:"/ecommerce/services/coversion-rate-optimization"},
            {linkTitle:"Ecommerce SEO",link:"/ecommerce/services/seo"},
            {linkTitle:"Ecommerce PPC Management",link:"/ecommerce/services/ppc-management"},
            {linkTitle:"Ecommerce Social Media Paid Ads",link:"/ecommerce/services/social-media-paid-ads"},
                ],
bgIconProps:{icon:<Image src={ecommerce} width="62" height="62" />,
className:"left-[121.01px] top-[325.89px]"}
},
{
    icon:WebsiteWebAppsIcon,
    subCategoryTitle:"Website and Web Apps",
    bgColor:"bg-[#FDFFE4]",
    navLinks:[
                {linkTitle:"Web Development",link:"/web/services/web-development"},
                {linkTitle:"Website Design",link:"/web/services/website-design"},
                {linkTitle:"Website Redesign",link:"/web/services/website-redesign"},
                {linkTitle:"Website Maintenance",link:"/web/services/website-maintenance"},
                {linkTitle:"Landing Page Design",link:"/web/services/landing-page-design"},
                {linkTitle:"UI / UX Analysis",link:"/web/services/ui-ux-analysis"},
                {linkTitle:"CMS Development",link:"/web/services/cms-development"},
                
                    ],
                    bgIconProps:{icon:<Image src={uiDesign} width="54" height="67" />,
                    className:"left-[232.68px] top-[63.26px]"}
    },
    {
        icon:DigitalMarketingIcon,
        subCategoryTitle:"Digital Marketing",
        bgColor:"bg-[#F8FBFF]",
        navLinks:[
                    {linkTitle:"Digital Marketing",link:"/digital-marketing"},
                    {linkTitle:"SEO Audit",link:"/digial-marketing/services/seo-audit"},
                    {linkTitle:"Enterprise Social Media Advertising",link:"/digial-marketing/services/enterprise-social-media-advertising"},
                    {linkTitle:"Social Media",link:"/digial-marketing/services/social-media"},
                    {linkTitle:"Muscled D2C Social Advertising",link:"/digial-marketing/services/muscled-d2c-social-advertising"},
                    {linkTitle:"Social Advertising by Muscled",link:"/digital-marketing/services/social-advertising"},
                    {linkTitle:"Muscled Website Rainmaker",link:"/digital-marketing/services/muscled-website-rainmaker"},
                    {linkTitle:"Professional Website Copywriting Offers",link:"/digital-marketing/services/professional-website-copywriting-offers"},
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