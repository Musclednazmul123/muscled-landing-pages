import React,{FC} from 'react'


const PromotionContent:FC = () => {
  return (
    <div className='flex flex-col w-[47.5rem] space-y-[33px] h-fit'>
    
    <div className='flex flex-col space-y-[33px] max-w-[495px]'>
        <div>
        <p className='text-[40px] leading-[60px] text-[#141010]
        font-bold tracking-tight'>
            Web Development Services 
for Your Unique Needs</p>
</div>

<div>
    <p className='text-xl font-normal leading-[2.063rem] text-[#333333]'>At WebFX, we bring more 25 years of experience to web design and web development, which is why we offer several web development services, including:</p>    
<ul className='list-none pt-6 text-xl font-normal leading-[2.063rem] text-[#333333]'>
<li>Responsive web design </li>
<li>Ecommerce web development</li>
<li>Magento web development</li>
<li>CMS development</li>
<li>Website maintenance</li>
</ul>
</div>
    
    </div>

    <div className='text-xl font-[500] text-[#141010] leading-[167%] capitalize'>        
        <p>Learn more about partnering with our</p> 
<p>seasoned team of developers, designers, and project managers</p> 
<p>by contacting us online or calling 508-504-9466!</p>
    </div>
    </div>
  )
}

export default PromotionContent