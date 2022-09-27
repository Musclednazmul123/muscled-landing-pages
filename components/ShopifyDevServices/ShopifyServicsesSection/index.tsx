import React,{FC} from 'react'
import Button from "../../Fawwaz/Button";

const ShopifyDevServices:FC = () => {
  return (
    <div className='flex flex-col w-[760px] ml-14 mt-4'>
     <div className='flex flex-col gap-y-[40px]'>   
       <div className='flex flex-col gap-y-[36px] justify-center items-center'>
        <div className='flex flex-col gap-y-[35px]'>
        <h1 className='text-[40px] leading-[52px] font-bold'>Our Shopify Development Services</h1>
        <p className='text-xl leading-[30px]'>Want to learn how we can help you by creating a custom Shopify 
            store that gets results? Below you will find more details on our services:</p>
        </div>
        <Button className='flex justify-center text-xl' bgColor='bg-black'  textSize="text-xl" textColor='text-white'>
        ECOMMERCE WEB DESIGN AND DEVELOPMENT SERVICES
        <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.5665 13.0607C45.1523 12.4749 45.1523 11.5251 44.5665 10.9393L35.0205 1.3934C34.4348 0.807611 33.485 0.807611 32.8992 1.3934C32.3134 1.97919 32.3134 2.92893 32.8992 3.51472L41.3845 12L32.8992 20.4853C32.3134 21.0711 32.3134 22.0208 32.8992 22.6066C33.485 23.1924 34.4348 23.1924 35.0205 22.6066L44.5665 13.0607ZM0.494202 13.5H43.5058V10.5H0.494202V13.5Z" fill="white"/>
</svg>
        </Button>
        <Button className='flex justify-center text-xl' textSize="text-xl" bgColor='bg-black' textColor='text-white'>
        SHOPIFY OPTIMIZATION SERVICES
        <svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.5665 13.0607C45.1523 12.4749 45.1523 11.5251 44.5665 10.9393L35.0205 1.3934C34.4348 0.807611 33.485 0.807611 32.8992 1.3934C32.3134 1.97919 32.3134 2.92893 32.8992 3.51472L41.3845 12L32.8992 20.4853C32.3134 21.0711 32.3134 22.0208 32.8992 22.6066C33.485 23.1924 34.4348 23.1924 35.0205 22.6066L44.5665 13.0607ZM0.494202 13.5H43.5058V10.5H0.494202V13.5Z" fill="white"/>
</svg>
        </Button>
       </div>
       <div className='flex flex-col gap-y-[30px]'>
       <p className='text-xl leading-[30px]'>As full-service  digital marketing agency with a growing team of professionals,
         we can offer you great variety of services that will help you boost your ecommerce site´s
          performance, among them:</p>
        <ul className='list-disc list-inside ml-5'>
            <li className='text-xl leading-[30px]'>Search Engine Optimization (SEO)</li>
            <li className='text-xl leading-[30px]'>Conversion Rate Optimization (CRO)</li>
            <li className='text-xl leading-[30px]'>Copywriting</li>
            <li className='text-xl leading-[30px]'>Creative Shopify Stores </li>
            <li className='text-xl leading-[30px]'>Social Media Management</li>
            <li className='text-xl leading-[30px]'>And more.</li>
        </ul>
       </div>
    </div>
 </div>
  )
}

export default ShopifyDevServices;