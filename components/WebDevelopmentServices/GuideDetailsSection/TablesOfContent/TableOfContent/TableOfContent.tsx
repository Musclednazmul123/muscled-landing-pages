import React,{FC} from 'react'
import Table from "../../../Table";
import Image from "next/image";
import {tableContentProps} from "../../../../WebDevelopmentServices/WebDevInterfaces/WebDevInterfaces";

let tableIcon:JSX.Element=<Image src="/tableIcon.png" width="20" height="20"/>

let TableOfContentData:tableContentProps={
    tableTitle:"Table of content",
    tableIcon,
    tableWidth:"400",
    list:{
      items:["WebFX: Cutting-edge web development from an experienced team",
      "Web development philosophy",
      "How our web developers create",
      "Our developers are idea machines",
      "The scope of our developers’ skills",
      "Developing industry",
      "Get your ideal web development solution today"]
    }
    
    }


const TableOfContent:FC = () => {
  return (
    <div>
        <Table {...TableOfContentData}/>
    </div>
  )
}

export default TableOfContent