import Image from 'next/image';

type Props = {
  title: string;
  icon: any;
  number: string;
  subtitle: string;
};
const HeroCard = ({ title, icon, number, subtitle }: Props) => {
  return (
    <div className="bg-black/80 text-white flex items-center xl:w-[30rem] px-3 py-[.625rem] rounded-[0.1875rem] lg:w-[25rem] w-[30rem]">
      <div className="relative flex-shrink-0 p-2 mr-2">
        <Image src={icon} alt="logo" height={80} width={80} />
      </div>
      <div className="">
        <p className="text-[1rem] mb-[2px]">{title}</p>
        <p className="text-[2rem] font-bold">{number}</p>
        <p className="uppercase text-[1rem] font-medium text-gray-300">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default HeroCard;
