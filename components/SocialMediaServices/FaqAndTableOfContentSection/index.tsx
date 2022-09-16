import React from 'react';
import Faq from '../FAQ/FAQ';
import TableOfContext from '../TableOfContext/TableOfContext';
type Props = {};

export default function index({}: Props) {
  return (
    <div className='mt-[100px] px-5 md:px-10 lg:px-20 mx-auto container gap-[60px] lg:flex items-start pb-12 relative'>
      <Faq />
      <TableOfContext />
    </div>
  );
}
