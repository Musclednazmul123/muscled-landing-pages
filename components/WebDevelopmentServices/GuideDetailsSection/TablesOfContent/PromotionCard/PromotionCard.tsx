import React,{FC} from 'react'

const PromotionCard:FC = () => {
  return (
    <div className='flex flex-col w-[338px] bg-[#C40000] text-white rounded-lg justify-center h-[178px] space-y-5 pl-6 self-center' >
    
      <div>
        <p className='font-[500] text-xl leading-[29.3px] w-[205px]'>Drive more revenue 
for your company</p>
      </div>

      <button className='flex justify-center items-center w-[167px] h-[48px] bg-white
       text-[#C40000] rounded-lg  text-base font-[500]'>
      Get a Proposal
      </button>

    </div>
  )
}

export default PromotionCard