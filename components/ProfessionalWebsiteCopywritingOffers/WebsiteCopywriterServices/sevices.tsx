import React from 'react';
import { FC } from 'react';

interface ServiceProps {
  label: string;
}
export const Service: FC<ServiceProps> = ({ label }) => {
  return (
    <>
      <button className='  flex justify-between items-center  mx-auto bg-transparent border-solid border-2 border-black p-[15px] text-black rounded-lg w-[350px] h-[40px]  text-center'>
        {label}
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
    </>
  );
};

export default Service;
