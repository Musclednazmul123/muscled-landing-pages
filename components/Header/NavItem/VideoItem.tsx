import React,{FC, ReactElement} from 'react'


interface videoItemProps {
    title:string;
    videoPlayer:ReactElement;
    buttonProps:{text:string;link:string};
    bgColor?:string;
}

const VideoItem:FC<videoItemProps> = ({
    title,
    videoPlayer,
    buttonProps,
    bgColor="bg-[#FFFAEA]"
}) => {
  return (
    <div className={`flex flex-col gap-y-[38px] rounded-[5px] w-[332px] h-[461px] pt-[20px] px-[20px] pb-[60px] ${bgColor}`}>
    <p className='text-[20px] font-[600]'>{title}</p>
    {videoPlayer}
     <button  className='text-white bg-black rounded-[8px] w-[211px] 
     h-[48px] py-[15px] px-[20px] text-[18px] font-[600] self-center' >
     {buttonProps.text}
     </button>    
    </div>
  )
}

export default VideoItem
