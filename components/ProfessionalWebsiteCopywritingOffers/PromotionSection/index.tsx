import React from 'react';

export default function PromotionalSection() {
  return (
    <div className='px-5 md:px-10 lg:px-20 sm:h-[564] h-auto bg-[#C40000] bg-opacity-[0.06] mt-[100px] flex flex-col justify-center items-center'>
      <div className='lg:flex items-start  my-[80px] justify-between lg:justify-center lg:gap-x-[60px]'>
        <div className='flex-col'>
          <p className='md:text-[40px] text-2xl font-bold md:leading-[52px] leading-[52px] sm:text-left text-center  max-w-[1000px] '>
            How Copywriting Services Expand
            <br /> Businesses
          </p>
          <p className='md:text-xl text-base xl:leading-[30px] leading-[30px] sm:text-left text-center mt-5 max-w-[1000px] sm:whitespace-normal lg:whitespace-nowrap md:whitespace-nowrap'>
            One of the most important aspects of your website is its written
            content. It
            <br /> establishes a relationship between your brand and your target
            market.
            <br /> Great content has the power to encourage potential customers
            to buy your
            <br /> goods, get in touch with you, or even stop by your store.
            <br />
            <br /> Muscled is a trustworthy choice for companies that want to
            have high-
            <br />
            quality copywriting services. To produce compelling content, our{' '}
            <br /> copywriting team includes experts from a variety of
            backgrounds, including
            <br /> both technical and non-technical fields.
          </p>
        </div>

        <div
          className='w-[440px] h-[250px] bg-[#3E5661]  rounded-lg relative '
          style={{
            backgroundImage:
              'url(' +
              'https://s3-alpha-sig.figma.com/img/b53b/041e/28f37dfd36b75b665b6440aa9f9124b8?Expires=1664755200&Signature=fLrRJWHjIzgdgyTUW022YYgDVXRFdfqNua9K7ybeWJKSRRp~O0-PsWf7yM5uAAGrHHQDqFK1a3LNJW3iCvzrvEKcs06dNYBmB8sKHwQlBppz0LQCIBxVSKke98DNqnU8ojqvKOsq74JaKFi2Xco1ViDPoHtOLNlv8R4u1C8n1PR8oejVmeytRJiobFB0KE3RDcHQa~wSDvEZcNNjOpBmUu~Wxp1~lFytxduFZfHbLOdDKehDwYqqY4WL3DUi3mtYQLy8rsO~STGPkYg-r3u~ehC4gRunFq1~28O4bRZ~9ruC~nz2etm5JQGKGtb8pvlLRqGS-Ji1pZS90CGeYc6CLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' +
              ')',
          }}
        >
          <p
            className='text-xl font-bold text-white absolute top-[20px] right-[160px] bottom-[110px] left-[20px] '
            style={{ lineHeight: '150%' }}
          >
            Looking for custom plans
            <br /> and pricing? Request a<br /> proposal to receive
            <br /> yours.
          </p>

          <button className='py-5 px-10 mx-auto w-[236px] h-[60px] bg-black text-white rounded-md absolute top-[170px] right-[184px] bottom-[20px] left-[20px]'>
            Request a Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
