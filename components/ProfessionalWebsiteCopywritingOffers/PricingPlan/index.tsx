import React from 'react';
import Icon from '../../assets/landingPageSVG/Icons';
export default function Pricing() {
  return (
    <div className='bg-white w-full pt-[50px]'>
      <div className='pt-[15px] bg-[#f5f5f5]  mx-auto conatiner lg:px-0 md:px-12 px-4'>
        <h2 className='md:text-4xl text-2xl font-bold md:leading-[52px] text-center'>
          Explore Our Website Copywriting Service Packages
        </h2>
        <div className='container mx-auto max-w-[1240px] justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-[60px] gap-5'>
          <div className='bg-white overflow-hidden max-w-[400px] border rounded-lg border-black border-opacity-70'>
            <div className='inline-flex flex-col space-y-[70px] items-center justify-between py-10 bg-[#FDF7F7] rounded-bl-lg rounded-br-lg w-full'>
              <div className='flex flex-col items-center justify-start'>
                <Icon icon='star' customClasses='text-[#7E7B7B]' />

                <p className='md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase'>
                  WEBSITE COPYWRITING
                </p>
              </div>

              <p className='md:text-4xl text-2xl font-bold leading-10 text-red-700 text-center'>
                $300
                <br />
                <span className='text-[#00000080] text-lg font-medium	'>
                  for each page
                </span>
              </p>
            </div>
            <div className='px-7 py-10 space-y-[30px]'>
              <div className='flex items-center '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  500 words each page
                </p>
              </div>
              <div className='flex items-center '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  SEO optimization
                </p>
              </div>
              <div className='flex items-start '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  Up to 45 minutes of research
                </p>
              </div>
            </div>
            <div className=' px-5'>
              <div className='border-solid border-[1px] '></div>
            </div>
            <div className='py-10 flex flex-col items-center justify-center'>
              <p className='w-80 md:text-xl text-lg font-semibold leading-relaxed text-center text-black text-opacity-70'>
                Includes SEO Optimization
              </p>
              <button className='mt-10 md:text-xl text-lg font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white'>
                Send Proposal
              </button>
            </div>
          </div>
          <div className='bg-white overflow-hidden border max-w-[400px] rounded-lg border-black border-opacity-70'>
            <div className='inline-flex flex-col space-y-[70px] items-center justify-between py-10 bg-[#FCF0F0] rounded-bl-lg rounded-br-lg w-full'>
              <div className='flex flex-col items-center justify-start'>
                <div className='flex items-center gap-x-[10px]'>
                  <Icon icon='star' customClasses='text-[#4C4848]' />
                  <Icon icon='star' customClasses='text-[#4C4848]' />
                </div>

                <p className='md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase'>
                  CONTENT REFRESH
                </p>
              </div>
              <p className='md:text-4xl text-2xl font-bold leading-10 text-red-700 text-center'>
                $900
                <br />
                <span className='text-[#00000080] text-lg font-medium	'>
                  for each page
                </span>
              </p>
            </div>
            <div className='px-7 py-10 space-y-[30px]'>
              <div className='flex items-center '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  Content Analysis
                </p>
              </div>
              <div className='flex items-center '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  1-3 custom graphics
                </p>
              </div>
              <div className='flex items-start '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  professional SEO copywriting
                </p>
              </div>
            </div>
            <div className=' px-5'>
              <div className='border-solid border-[1px] '></div>
            </div>
            <div className='py-10 flex flex-col items-center justify-center'>
              <p className='w-80 md:text-xl text-lg font-semibold leading-relaxed text-center text-black text-opacity-70'>
                Includes SEO Optimization
              </p>
              <button className='mt-10 md:text-xl text-lg font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white'>
                Send Proposal
              </button>
            </div>
          </div>
          <div className='bg-white overflow-hidden border rounded-lg max-w-[400px] border-black border-opacity-70'>
            <div className='inline-flex flex-col space-y-[70px] items-center justify-between py-10 bg-[#FAE8E8] rounded-bl-lg rounded-br-lg w-full'>
              <div className='flex flex-col items-center justify-start'>
                <div className='flex items-center gap-x-[10px]'>
                  <Icon icon='star' customClasses='text-[#322E2E]' />
                  <Icon icon='star' customClasses='text-[#322E2E]' />
                  <Icon icon='star' customClasses='text-[#322E2E]' />
                </div>

                <p className='md:text-2xl text-lg mt-[30px] font-bold leading-loose text-black text-opacity-80 uppercase'>
                  SKYCRAPER CONTENT
                </p>
              </div>
              <p className='md:text-4xl text-2xl font-bold leading-10 text-red-700 text-center'>
                $900
                <br />
                <span className='text-[#00000080] text-lg font-medium	'>
                  for each page
                </span>
              </p>
            </div>
            <div className='px-7 mb-4 pt-3 space-y-[30px]'>
              <div className='flex items-center '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  Up to 4 hours of custom formatting
                </p>
              </div>
              <div className='flex items-center '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  Up to 15 stock photos or graphics
                </p>
              </div>
              <div className='flex items-start '>
                <Icon icon='tick' customClasses='' />
                <p className='md:text-xl text-lg md:leading-[26px] ml-[15px] text-black text-opacity-70'>
                  Up to 3 hours of promotion
                </p>
              </div>
            </div>
            <div className=' px-5'>
              <div className='border-solid border-[1px] '></div>
            </div>
            <div className='py-10 flex flex-col items-center justify-center'>
              <p className='w-80 md:text-xl text-lg font-semibold leading-relaxed text-center text-black text-opacity-70'>
                Includes SEO Optimization
              </p>
              <button className='mt-10 md:text-xl text-lg font-semibold hover:bg-opacity-70 leading-[150%] h-[60px] border border-black px-10 bg-black ml-[10px] rounded text-white'>
                Send Proposal
              </button>
            </div>
          </div>
        </div>
        <div className='text-center mt-[60px] mb-[73px] text-2xl'>
          <a className='text-[#5F27BD] underline underline-offset-8'>
            See Full Delieverables
          </a>
        </div>
      </div>
    </div>
  );
}
