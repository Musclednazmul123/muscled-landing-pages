import React,{FC} from 'react'
import DetailsGenerator from '../DetailsGenerator/DetailsGenerator'
import {detailGeneratorProps} from "../../../WebDevInterfaces/WebDevInterfaces";

let DevelopingIndustrySolData:detailGeneratorProps={
    heading:"Developing industry solutions",
    paragraphs:["At WebFX, our developers know that efficiency counts when it comes to coding website functionality. They understand that every bit of code they create has to perform effectively in order for a website to operate like a fine-tuned machine.",
    "We understand that because we’re more than a web development company — we’re a full-service Internet marketing agency. That means our web developers understand search engine optimization (SEO), user experience (UX), responsive design, and other essential skills that a development-only agency wouldn’t incorporate.",
    "With that knowledge, our development team will create website solutions for your business that last for years and continually pay dividends. We don’t just create for the here-and-now — we create for the future so your business can continue to succeed online, no matter how much the Internet changes.",]
}


const DevelopingIndustrySol:FC = () => {
  return (
    <div className='flex flex-col top-7 relative'>
<DetailsGenerator {...DevelopingIndustrySolData} />
    </div>
  )
}

export default DevelopingIndustrySol