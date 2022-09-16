import React from 'react';
const services = {
  row1: [
    {
      des1: `Instagram Marketing`,
      des2: ` Services`,

      buttonLabel: 'Learn More',
    },
    {
      des1: `Instagram Marketing`,
      des2: ` Services`,
      buttonLabel: 'Learn More',
    },
    {
      des1: `Instagram Marketing`,
      des2: ` Services`,
      buttonLabel: 'Learn More',
    },
  ],
  row2: [
    {
      des1: `Instagram Marketing`,
      des2: ` Services`,
      buttonLabel: 'Learn More',
    },
    {
      des1: `Instagram Marketing`,
      des2: ` Services`,
      buttonLabel: 'Learn More',
    },
    {
      des1: `Instagram Marketing`,
      des2: ` Services`,
      buttonLabel: 'Learn More',
    },
  ],
};

export default function AdditionalServices() {
  return (
    <div className='lg:px-20 md:px-12 px-4  bg-[#C40000] bg-opacity-[0.06] mt-[120px] flex flex-col py-[80px] items-center h-auto sm:h-[994px]'>
      <p className='md:text-[40px] text-2xl font-bold md:leading-[52px] leading-[52px] text-center  max-w-[1000px]'>
        Additional social media marketing services from Muscled
      </p>
      <p className='md:text-xl text-base xl:leading-[30px] leading-[30px] text-center mt-5 max-w-[1000px]'>
        Looking for platform-specific social marketing services? Check out these
        resources:
      </p>
      <div className='sm:flex '>
        {services.row1.map((row, i) => (
          <div
            className='w-[400px] h-[300px] bg-[#C40000] mt-[40px] sm:ml-[20px]  ml-0  relative'
            key={i}
          >
            <span className='absolute text-[#ffffff] left-[20px] top-[40px] font-bold text-2xl'>
              {row.des1}
              <br />
              {row.des2}
            </span>
            <button className=' flex justify-between items-center p-[15px] mx-auto bg-black text-white rounded-md absolute top-[214px] right-[86px] bottom-[40px] left-[86px] h-[46px] w-[227px] text-center'>
              {row.buttonLabel}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                />
              </svg>
            </button>
          </div>
        ))}
        <br />
      </div>
      <div className=' sm:flex'>
        {services.row2.map((row, i) => (
          <div
            className='w-[400px] h-[300px] bg-[#C40000] mt-[40px] sm:ml-[20px]  ml-0  relative'
            key={i}
          >
            <span className='absolute text-[#ffffff] left-[20px] top-[40px] font-bold text-2xl'>
              {row.des1}
              <br />
              {row.des2}
            </span>
            <button className='  flex justify-between items-center  mx-auto bg-black p-[15px] text-white rounded-md absolute top-[214px] right-[86px] bottom-[40px] left-[86px] h-[46px] w-[227px] text-center'>
              {row.buttonLabel}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
