import Image from 'next/image';

const cardData = [
  {
    id: '1',
    img: '',
    title: 'User-Engagement',
    subtitle: 'CHOICE 1',
    text: 'For businesses in sectors like healthcare, consulting, or finance with deep industry knowledge, this template performs well.',
  },
  {
    id: '2',
    img: '',
    title: 'Information-Based',
    subtitle: 'CHOICE 2',
    text: 'This template is most effective for startups and non-profits with a single core service.',
  },
  {
    id: '3',
    img: '',
    title: 'Multi-Offering',
    subtitle: 'CHOICE 3',
    text: 'This template is most effective for small enterprises or nonprofit organisations that provide a variety of services.',
  },
];
const GuidesSection = () => {
  return (
    <div className="bg-[#291E2E] p-28 pt-24">
      <h3 className="text-white text-center mb-14">
        Select a Muscled Rainmaker website
      </h3>

      <div className="flex gap-10 justify-center items-stretch flex-wrap xl:flex-nowrap">
        {cardData.map(data => (
          <div className="flex flex-col rounded-lg bg-[#E1FDD3] max-w-[24.1875rem] items-center">
            <div className="relative h-[15.125rem]">
              {/* <Image
                src={data.img || '/banner.png'}
                alt="image"
                layout="fill"
                objectFit="cover"
              /> */}
              <div className="bg-[#D9D9D9] rounded-[0.625rem] rounded-bl-none rounded-br-none w-[24.1875rem] h-full"></div>
            </div>
            <div className="px-10 flex flex-col flex-1">
              <h4 className="font-medium text-[1.75rem] mb-[0.9375rem] mt-[0.625rem]">
                {data.title}
              </h4>
              <h5 className="text-[1.25rem] font-medium mb-[0.9375rem]">
                {data.subtitle}
              </h5>
              <p className="text-[1.25rem] mb-9 flex-1">{data.text}</p>
              <button className="rounded-md py-[0.9375rem] px-10 bg-black w-[20rem] h-[3.75rem] text-white mb-5 mx-auto font-semibold text-[1.25rem] leading-[1.875rem]">
                View Theme
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GuidesSection;
