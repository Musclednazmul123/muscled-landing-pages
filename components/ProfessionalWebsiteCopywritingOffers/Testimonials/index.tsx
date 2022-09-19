import React from 'react';

import VideoPlayer from '../../ReactPlayerModal';
import PlayIcon from '../../playIcon';

export default function Testimonial() {
  return (
    <>
      <div className=' py-20 bg-black'>
        <div className='px-5 md:px-10 lg:px-20 mx-auto container'>
          <div className='lg:flex items-start justify-between lg:justify-center lg:gap-x-[60px]'>
            <div className='lg:max-w-[580px]  pb-[76px]'>
              <p className='md:text-2xl text-xl md:leading-[36px] text-gray-50'>
                “Muscled has gone above and beyond to make me happy. So far,
                after a few months, I have already seen significant improvement
                in rankings and conversions, and they have also greatly improved
                the speed of my site.”
              </p>
              <p className='md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]'>
                Owner
              </p>
              <p className='md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]'>
                Company Name
              </p>
              <button className='md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold md:leading-[30px] text-white px-10 py-4 bg-red-700  rounded'>
                See Our Clients’ Testimonials
              </button>
            </div>
            <div className='flex'>
              <div className='sm:w-[536px] w-[590px]'>
                <VideoPlayer
                  Icon={PlayIcon}
                  url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                  // thumbnail="main.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
