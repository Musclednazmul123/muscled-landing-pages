import React,{FC} from 'react'
import {detailGeneratorProps} from "../../../WebDevInterfaces/WebDevInterfaces";
import DetailsGenerator from '../detailsGenerator/DetailsGenerator';
import DevIdeaMachinesCard from "./DevIdeaMachinesCard/DevIdeaMachinesCard"

let DevIdeaMachinesData:detailGeneratorProps={
heading:"Our developers are Idea machines",
paragraphs:["Our developers are so experienced that they can suggest new ways for your business to succeed online, implement them, and fine-tune them to perfection.",
"In development terms, that means every member of our team is an active participant in your overall marketing strategy. They can tell you what’s worked in the past, what could work for you now, and what may work for you in the future.",
"That active involvement is a major part of your partnership with WebFX. We firmly believe that we’re here to provide you with the absolute best website development solution for your business. Our developers will pull from their experience and expertise to make sure that happens.",
]
}


const DevIdeaMachines:FC = () => {
  return (
    <div className='flex flex-col space-y-11 relative -top-4'>
        <DetailsGenerator {...DevIdeaMachinesData}/>
        <DevIdeaMachinesCard />
    </div>
  )
}

export default DevIdeaMachines