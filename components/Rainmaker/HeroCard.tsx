import Image from 'next/image';

type Props = {
  title: string;
  icon: any;
  number: string;
  subtitle: string;
};
const HeroCard = ({ title, icon, number, subtitle }: Props) => {
  return (
    <div className="bg-black/80 text-white rounded-[0.1875rem] xl:w-[29.25rem] h-[6.625rem] flex items-center py-2 my-3 px-5">
      <div className="relative flex-shrink-0 mr-1 w-20 h-20">
        <Image src={icon} alt="logo" objectFit="contain" />
      </div>
      <div className="">
        <p className="text-[1rem] mb-[2px] leading-[130%] font-medium">
          {title}
        </p>
        <p className="text-[2rem] font-bold leading-[130%]">{number}</p>
        <p className="uppercase text-[1rem] font-medium text-[#BBBBBB] leading-[130%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default HeroCard;
