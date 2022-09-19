import React from 'react';
import Service from './sevices';
const services = [
  {
    label: 'SEO Copywriting Service Plans',
  },
  {
    label: 'Ecommerce Copywriting Plans',
  },
  {
    label: 'Long-Form Copywriting Plans',
  },
  {
    label: 'Online Guide Copywriting Plans',
  },
  {
    label: 'Content Refresh Copywriting Plans',
  },
];
export default function PromotionalSection() {
  return (
    <div className='text-center mt-[120px]  px-5 md:px-10 lg:px-20 mx-auto  container'>
      <h2 className='md:text-4xl text-2xl font-bold max-w-[700px] mx-auto md:leading-[52px] text-center text-black text-opacity-80'>
        <span className='sm:whitespace-nowrap  whitespace-normal'>
          Website Copywriter Services
        </span>
      </h2>
      <p className='md:text-2xl text-lg md:leading-[36px] text-center text-black text-opacity-70 mt-[30px]'>
        In order to guarantee that your article appears at the top of search
        results, we provide six
        <br /> copywriting service options that feature search engine
        optimization (SEO). Are you interested in our
        <br /> website copywriter services' costs and outputs? View the tables
        below for our prices.
      </p>
      <br />
      {services.map((item, i) => (
        <>
          <Service label={item.label} key={i} />
          <br />
        </>
      ))}
    </div>
  );
}
