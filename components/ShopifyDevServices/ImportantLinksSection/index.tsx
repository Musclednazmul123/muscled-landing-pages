import React,{FC} from 'react'
import ImportantLinks from "./ImportantLinks";

const ImportantLinksSection:FC = () => {
  return (
    <div className='flex flex-col gap-y-[60px] mt-20 items-center'>
        <div className='flex flex-col gap-y-[40px] w-[760px]'>
            <h1 className='text-[40px] fonbt-bold leading-[52px] text-center'>Being right away!</h1>
            <p className='text-xl leading-[30px] text-center'>Muscled is here for you if you want to continue driving results for your company while
                 working with an award-winning company.
                  Please contact us online to speak with an SEO specialist!</p>
        </div>
        <ImportantLinks />
    </div>
  )
}

export default ImportantLinksSection