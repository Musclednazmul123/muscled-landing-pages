import React,{FC} from 'react'
import { ImportantLinksData } from './ImportantLinksData';
import ImportantLinksItem from './ImportantLinksItem';

const ImportantLinks:FC = () => {
  return (
    <div className='flex gap-x-[22px]'>
       {
        ImportantLinksData.map(data=><ImportantLinksItem {...data}  className="bg-opacity-20"/>)

         }
    </div>
  )
}

export default ImportantLinks