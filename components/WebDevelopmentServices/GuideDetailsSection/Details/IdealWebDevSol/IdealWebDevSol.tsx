import React,{FC} from 'react'
import DetailsGenerator from '../detailsGenerator/DetailsGenerator'
import {detailGeneratorProps} from "../../../WebDevInterfaces/WebDevInterfaces";
import IdealWebDevSolCard from "./IdealWebDevSolCard/IdealWebDevSolCard";

let IdealWebDevSolData:detailGeneratorProps={
heading:"Get your ideal web development solution today",
paragraphs:["Are you ready to grow your business to new levels through the Internet? We’d love to hear from you!",],    
}

const IdealWebDevSol:FC = () => {
  return (
    <div className="flex flex-col space-y-[52px] top-11 relative">
        <DetailsGenerator {...IdealWebDevSolData}/>
        <IdealWebDevSolCard />
    </div>
  )
}

export default IdealWebDevSol