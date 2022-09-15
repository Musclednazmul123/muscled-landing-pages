import React from 'react';
import VideoPlayer from '../../ReactPlayerModal';
import PlayIcon from '../../playIcon';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function PromotionalSection() {
  return (
    <div className='px-5 md:px-10 lg:px-20 py-20 bg-[#C40000] bg-opacity-[0.06] mt-[120px] flex flex-col justify-center items-center'>
      <div className='lg:flex items-start justify-between lg:justify-center lg:gap-x-[60px]'>
        <div className='flex-col '>
          <p className='md:text-[40px] text-2xl font-bold md:leading-[52px] leading-[52px] sm:text-left text-center  max-w-[1000px] '>
            See results with social media marketing services
          </p>
          <p className='md:text-xl text-base xl:leading-[30px] leading-[30px] sm:text-left text-center mt-5 max-w-[1000px] sm:whitespace-normal lg:whitespace-nowrap md:whitespace-nowrap'>
            Nearly 75% of individuals consult social media before making a
            purchase.
            <br /> Social greatly influences shopper behavior which is why
            companies heavily
            <br />
            invest in professional social media services.
            <br />
            <br />
            Muscled is the leading choice in social media marketing services,
            <br />
            outperforming the industry average by 488 percent in terms of
            customer
            <br /> recommendation scores. As your partner, we'll assist your
            company in <br />
            enhancing its income, client loyalty, and brand recognition.
            <br />
            <br /> Browse our service offerings and costs below to see how our
            social media
            <br /> management services excel.
          </p>
        </div>
        <div className='flex-col justify-center items-center flex'>
          <div className='w-[400px] h-[320px]'>
            <VideoPlayer
              Icon={PlayIcon}
              // width={"500px"}
              // height={"500px"}
              url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              // thumbnail="main.png"
            />
          </div>
          <div className='w-[400px] h-[200px] bg-[#3E5661] mt-[50px] rounded-lg relative'>
            <button className='py-5 px-10 mx-auto bg-black text-white rounded-md absolute top-[70px] right-[134px] bottom-[70px] left-[40px]'>
              Send Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
