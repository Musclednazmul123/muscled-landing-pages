import React,{FC} from 'react'
import DetailsGenerator from '../DetailsGenerator/DetailsGenerator'
import WebDevExpCard from './WebDevExpCard/WebDevExpCard'
import {detailGeneratorProps} from "../../../WebDevInterfaces/WebDevInterfaces";

let WenDevExpData:detailGeneratorProps={
heading:"WebFX: Cutting-edge web development from an experienced team",
paragraphs:["Our skilled web development staff has the technical expertise to work with both open source technologies, such as PHP and mySQL. They’re also skilled with Microsoft technologies, such as ASP, .Net, and Microsoft SQL Server.",
"As a leading web development company, we’ve also worked with a large variety of content management systems including Magento, WordPress, sugarCRM, Joomla, PHPnuke, OS Commerce, Microsoft SharePoint Portal, BEA Aqua Logic Web Portal, and X-Cart.",
"Altogether, that means we have one of the most experienced and skilled teams of web developers in the industry!",
"No matter what you need, we can work with it — and we’ll use it to create a custom development project you’ll love. Contact us today for a fast, easy quote."
]

}


const WebDevExp:FC = () => {
  return (
    <div className='flex flex-col space-y-[75px]'>
    <DetailsGenerator {...WenDevExpData}/>
    <WebDevExpCard />
    </div>
  )
}

export default WebDevExp