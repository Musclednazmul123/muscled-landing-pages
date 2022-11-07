import React,{FC} from 'react'
import GuideDetailsCard from "./GuideDetailsCard";
import ShopifyServiceSection from "@/components/ShopifyDevServices/ShopifyServicsesSection";

const GuideDetailsSection:FC = () => {
  return (
    <div className='w-[760px] flex flex-col gap-y-[40px]'>
        
        <div className='flex flex-col gap-y-[32px]'>
          <h1 className='text-[40px] font-bold leading-[52px]'>Why should you work with the Muscled 
             Shopify Development Team?</h1>
           <p className='text-xl leading-[30px]'>Working with a company that counts with Muscled´s expertise in Shopify development can help your 
          store reach it´s full potential and truly stand out from the competition.</p>
        </div>

        <div className='flex flex-col gap-y-[26px] pb-5'>
            <h2 className='text-2xl font-semibold leading-[36px]'>A Personalized Designed:</h2>
            <div className='flex flex-col gap-y-[30px]'>
              <p className='text-xl leading-[30px]'>A professional web design and development studio can provide you with designs tailor made for your business. 
                This customization will make your store stand out and guarantee it´s look will match
                 your brand's identity.</p> 

              <p className='text-xl leading-[30px]'>Here at Muscled we have created over YYYY websites for our
                 clients, and our experienced teams of designers know how
                  to leave a lasting impression. </p>
            </div>
        </div>

        <div className='flex flex-col gap-y-[16px]'>
            <h2 className='text-2xl font-semibold leading-[36px]'>Additional Functionality:</h2>
            <div className='flex flex-col'>
              <p className='text-xl leading-[30px]'>Experienced ecommerce developers can guarantee that your site will have the functionality you 
              and your customers need there expanding the
               possibilities of your ecommerce business. </p> 

              <p className='text-xl leading-[30px]'>When working alongside us you will have a dedicated account manager that will 
              guide through the process to create the
               site that answers your needs and goals. </p>
            </div>
        </div>

        <div className='flex flex-col gap-y-[20px]'>
          <h2 className='text-2xl font-semibold leading-[36px]'>Additional Optimization:</h2>
           <div className='flex flex-col  gap-y-[30px]'>
             <p className='text-xl leading-[30px]'>Here at Muscled we are determined to deliver meaningful results to our clients backed by our optimization know-how to ensure your Shopify site meets your expectations.</p>

             <p className='text-xl leading-[30px]'>Our team of digital marketing professionals with expertise and knowledge in a wide range of areas, ranging from search engine optimization (SEO) to conversion rate optimization (CRO) and beyond.</p>

             <p className='text-xl leading-[30px]'>What results does the team strive for? Since our inception we have managed more than X transactions and generated more than X billion in revenue for our clients.</p>
             </div>
        </div>

        <GuideDetailsCard />
        <ShopifyServiceSection />
    </div>
  )
}

export default GuideDetailsSection