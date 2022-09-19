import React from 'react';
import { Table, Td, Th } from '../SocialMediaServices/ServiceTable/Table';
import { AiFillPhone } from 'react-icons/ai';
interface ItableRow {
  heading: string;
  content1: string;
  content2?: string;
  content3?: string;
  content4?: string;
}
interface ITable {
  heading: string;
  description: string;
  tableHeaders: string[];
  tableRows: Array<ItableRow>;
}

type Props = {
  tableData: ITable;
};

const tick = (
  <svg
    width={17}
    className='mx-auto'
    height={14}
    viewBox='0 0 17 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15.104 0.954901C15.2064 0.85045 15.3285 0.767472 15.4634 0.710825C15.5982 0.654178 15.743 0.625 15.8892 0.625C16.0355 0.625 16.1803 0.654178 16.3151 0.710825C16.45 0.767472 16.5721 0.85045 16.6745 0.954901C17.1035 1.3884 17.1095 2.0889 16.6895 2.5299L7.82 13.0149C7.7193 13.1255 7.5971 13.2144 7.46087 13.2761C7.32464 13.3378 7.17725 13.3711 7.02771 13.3739C6.87817 13.3767 6.72964 13.349 6.59119 13.2924C6.45274 13.2358 6.32728 13.1516 6.2225 13.0449L0.825501 7.5759C0.617356 7.36363 0.500763 7.07819 0.500763 6.7809C0.500763 6.48361 0.617356 6.19817 0.825501 5.9859C0.92787 5.88145 1.05005 5.79847 1.18488 5.74182C1.31972 5.68518 1.4645 5.656 1.61075 5.656C1.757 5.656 1.90178 5.68518 2.03662 5.74182C2.17145 5.79847 2.29363 5.88145 2.396 5.9859L6.974 10.6254L15.074 0.987901C15.0833 0.976309 15.0933 0.965289 15.104 0.954901Z'
      fill='#13C47F'
    />
  </svg>
);

const cross = (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='inline'
  >
    <path
      d='M16 1.97721L14.0228 0L8 6.02279L1.97721 0L0 1.97721L6.02279 8L0 14.0228L1.97721 16L8 9.97721L14.0228 16L16 14.0228L9.97721 8L16 1.97721Z'
      fill='#C40000'
    />
  </svg>
);
const getStarted = (
  <button className='lg:text-xl text-sm font-semibold hover:bg-opacity-70 leading-[150%] lg:h-[60px] border border-black lg:px-10 px-5 bg-black ml-[10px] rounded text-white'>
    Get Started
  </button>
);
const giveUsCall = (
  <>
    <p>Give Us a Call if You Need Information</p>
    <div className='flex gap-2 whitespace-nowrap items-center mt-2 cursor-pointer'>
      <AiFillPhone className='fill-sky-500 w-[32px] h-[32px]' />
      <p className='text-sky-500 font-bold lg:text-[24px]'>888-601-5359</p>
    </div>
  </>
);

export default function Index({ tableData }: Props) {
  return (
    <>
      <div className='text-center mt-[100px] mb-[60px] px-5 md:px-10 lg:px-20 mx-auto  container'>
        <h2 className='md:text-4xl text-2xl font-bold max-w-[700px] mx-auto md:leading-[52px] text-center text-black text-opacity-80'>
          <span className='sm:whitespace-nowrap  whitespace-normal'>
            {tableData.heading}
          </span>
        </h2>
        {tableData.description !== '' && (
          <p className='md:text-2xl text-lg md:leading-[36px] text-center text-black text-opacity-70  whitespace-pre-wrap'>
            {tableData.description}
          </p>
        )}
      </div>

      <div className='px-5 md:px-10 lg:px-20 mx-auto  container overflow-x-auto flex flex-shrink-0 w-full'>
        <Table className='md:table-fixed table-auto w-full overflow-x-auto'>
          <thead>
            <tr>
              {tableData.tableHeaders.map((heading: string, i: number) => {
                {
                  let header;
                  if (i === 0) {
                    header = (
                      <Th
                        className={
                          'text-left text-white rounded-tl-xl border-b border-black border-opacity-10'
                        }
                        content={heading}
                      />
                    );
                  } else {
                    let type: any = '';
                    if (i === 1) type = 'Bronze';
                    else if (i === 2) type = 'Silver';
                    else if (i === 3) {
                      type = 'Gold';
                    } else if (i === 4) {
                      type = 'Diamond';
                    }

                    header = (
                      <Td
                        className='text-center font-bold border-b border-black border-opacity-10'
                        content={heading}
                        type={type}
                      />
                    );
                  }
                  return header;
                }
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.tableRows.map((item: any) => {
              let header;

              header = (
                <tr>
                  <Th
                    className={'text-left  text-white font-normal'}
                    content={
                      item.heading === 'Give Us Call'
                        ? giveUsCall
                        : item.heading
                    }
                  />
                  {item.hasOwnProperty('content1') && (
                    <Td
                      className='text-center font-normal border-b border-black border-opacity-10'
                      content={
                        item.content1 === 'tick'
                          ? tick
                          : item.content1 === 'cross'
                          ? cross
                          : item.content1 === 'Get Started'
                          ? getStarted
                          : item.content1
                      }
                      type={'Bronze'}
                    />
                  )}
                  {item.hasOwnProperty('content2') && (
                    <Td
                      className='text-center font-normal border-b border-black border-opacity-10'
                      content={
                        item.content2 === 'tick'
                          ? tick
                          : item.content2 === 'cross'
                          ? cross
                          : item.content2 === 'Get Started'
                          ? getStarted
                          : item.content2
                      }
                      type={'Silver'}
                    />
                  )}
                  {item.hasOwnProperty('content3') && (
                    <Td
                      className='text-center font-normal border-b border-black border-opacity-10'
                      content={
                        item.content3 === 'tick'
                          ? tick
                          : item.content3 === 'cross'
                          ? cross
                          : item.content3 === 'Get Started'
                          ? getStarted
                          : item.content3
                      }
                      type={'Gold'}
                    />
                  )}
                  {item.hasOwnProperty('content4') && (
                    <Td
                      className='text-center font-normal border-b border-black border-opacity-10'
                      content={
                        item.content4 === 'tick'
                          ? tick
                          : item.content4 === 'cross'
                          ? cross
                          : item.content4 === 'Get Started'
                          ? getStarted
                          : item.content4
                      }
                      type={'Diamond'}
                    />
                  )}
                </tr>
              );

              return header;
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
