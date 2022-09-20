import React from 'react';
import PartnerShip from '../../../components/assets/svg/PartnerShip';
type Props = {};

export default function FAQ({}: Props) {
  return (
    <>
      <div className='mt-[100px] px-5 md:px-10 lg:px-20 mx-auto container gap-[60px] lg:flex items-start pb-12 relative'>
        <div className='lg:w-[60%] mt-[20px]'>
          <div className=''>
            <h2 className='md:text-4xl text-2xl font-bold leading-10 text-black '>
              What do Muscled website copywriter services include?
            </h2>
            <p className='md:text-xl text-base md:leading-[30px] text-black text-opacity-70 mt-10'>
              We will tailor your approach and objectives for your business,
              whether <br /> you're working with Muscled for blog articles,
              product descriptions, online <br /> how-tos, or long-form content.
              This is how we've helped our clients
              <br /> generate more than $3 billion in sales.
              <br />
              <br />
              Having said that, the following are all included in our website
              copywriting
              <br /> services:
            </p>

            <p className='md:text-2xl text-base md:leading-[30px]  mt-[40px] font-extrabold text-black '>
              Keyword research
            </p>
            <br />
            <p className='md:text-xl text-base md:leading-[30px] text-black text-opacity-70'>
              Our team will do keyword research about your business, goods,
              services,
              <br /> and target market as part of the copywriting package. We
              will also create
              <br /> engaging content for your site, ranging from shareable
              skyscraper material
              <br /> to effective sales writing, based on our analysis and
              discussions with your
              <br /> team.
            </p>

            <p className='md:text-2xl text-base md:leading-[30px]  mt-[40px] font-extrabold text-black '>
              Professional copywriting
            </p>
            <br />
            <p className='md:text-xl text-base md:leading-[30px] text-black text-opacity-70'>
              Professional, well-written website text is crucial for the success
              of your
              <br /> company. We have a devoted team of copywriters and copy
              editors for that
              <br /> purpose. Because of the variety of technical and
              non-technical <br /> backgrounds of their respective industries,
              we can always match your <br />
              company with a skilled and experienced copywriter. <br />
              <br />
              Additionally, our staff thoroughly researches your sector to
              guarantee the <br /> accuracy of your articles. We adhere to your
              brand requirements as well, <br />
              which enables our copywriters to create specialized material that
              not only
              <br /> engages but also attracts your target market.
            </p>
            <p className='md:text-2xl text-base md:leading-[30px]  mt-[40px] font-extrabold text-black '>
              Optimized SEO copy
            </p>
            <br />
            <p className='md:text-xl text-base md:leading-[30px] text-black text-opacity-70'>
              For your website, we do more than just creating engaging content;
              we also
              <br /> optimize it for search engines. Our team can increase the
              audience and <br /> online exposure of your website and content by
              incorporating strategic
              <br /> keywords into your articles. With this capability, your
              website will show up in <br />
              search results thus, attracting more visitors.
            </p>
            <p className='md:text-2xl text-base md:leading-[30px]  mt-[40px] font-extrabold text-black '>
              Website implementation
            </p>
            <br />
            <p className='md:text-xl text-base md:leading-[30px] text-black text-opacity-70'>
              You must post your material on your website for it to begin
              attracting traffic.
              <br /> This is why we provide webpage installation as part of our
              website <br />
              copywriting services. Our team uploads and publishes your material
              on <br /> your website once your team analyzes and approves it.
              <br />
              <br /> Our talented design team also creates images for your text
              in accordance
              <br /> with your online copywriting services. For instance, our
              long-form article
              <br /> copywriting services come with up to 15 stock visuals or
              photos to enhance
              <br /> reader engagement.
            </p>
            <p className='md:text-2xl text-base md:leading-[30px]  mt-[40px] font-extrabold text-black '>
              Dedicated project manager
            </p>
            <br />
            <p className='md:text-xl text-base md:leading-[30px] text-black text-opacity-70'>
              We partner you up with a committed account manager who takes the
              time <br />
              to get to know your company, field, and objectives. Your personal
              account
              <br /> manager can create a unique and data-driven approach for
              your business
              <br /> by getting to know it and your organization.
            </p>
          </div>
          <div className='w-[760px] h-[710px] bg-[#112122e6] mt-[40px] rounded-lg relative'>
            <div className='flex-col w-[460px] h-[360px] absolute top-[60px] right-[260px] bottom-[290px] left-[40px]'>
              <p
                className='font-extrabold text-4xl text-white'
                style={{ lineHeight: '150%' }}
              >
                We nurture & build
                <br /> long-term <br /> partnerships to <br /> ensure long-term
                <br /> results for your
                <br /> business
              </p>
              <p className='font-normal text-xl text-white mt-[40px]'>
                <span className='text-[#F29C35]'>over 90% </span>
                of Muscled Clients continue <br />
                partnering with us into 2nd year of their
                <br /> campaign
              </p>

              <button className=' flex justify-around px-[30px] text-xl items-center p-[15px] mt-[40px] bg-black text-white rounded-md  h-[60px] w-[362.14px] text-left'>
                Learn from our customers
                <svg
                  width='10'
                  height='16'
                  viewBox='0 0 10 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M-4.9682e-06 13.7143L5.71428 8L-5.96731e-06 2.28571L1.14285 6.99382e-07L9.14285 8L1.14285 16L-4.9682e-06 13.7143Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
            <PartnerShip className='absolute left-[526px] right-[40px] top-[210px] bottom-[246px] w-[193px] h-[218px]' />
          </div>
        </div>
      </div>
    </>
  );
}
