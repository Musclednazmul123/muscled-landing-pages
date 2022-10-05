import React,{FC} from 'react'
// import DetailsGenerator from '../detailsGenerator/DetailsGenerator'
import {detailGeneratorProps} from "../../../WebDevInterfaces/WebDevInterfaces";

let OurWebDevPhilosphyData:detailGeneratorProps={
    heading:"Our web development philosophy",
    paragraphs:["As you can see from our list of web development services above, WebFX web developers have worked in virtually every aspect of development. They’ve coded, created, and worked hand-in-hand with our clients to make sure they get the best results for their investment — no matter how big that investment may be.",
    "Our developers understand that core functionality is critical to the success of any Internet marketing campaign. If you want to create a website that continually draws traffic, engages visitors, and generates paying customers, then your site simply needs to work.",
    "At WebFX, our web development team understands that because we’ve done it for ourselves and so many clients already.",
    "Whether you want us to create custom-coded content or templated pages, we can craft them, implement them, and test them to make sure they’re as efficient as possible.",
    "We’ll also stress test the functional parts of your site to make sure they can handle large traffic loads while simultaneously removing any bugs that we discover along the way.",
    "Our web developers know what they’re doing — and they know you expect excellence for your dollar. When you partner with us, we believe your success is our success, and that’s why we’ll work hard for you.",
    "We provide development services to clients from New York to California and everywhere in between.",
  ],
}


const OurWebDevPhilosphy:FC = () => {
  return (
    <div className='flex flex-col -top-4 relative'>
      {/* <DetailsGenerator {...OurWebDevPhilosphyData} /> */}
    </div>
  )
}

export default OurWebDevPhilosphy;