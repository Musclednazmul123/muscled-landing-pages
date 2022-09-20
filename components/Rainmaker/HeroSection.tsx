import { ChevronRightIcon } from '@heroicons/react/solid';
import HeroCard from './HeroCard';
import CloudComputingIcon from './assets/icon-cloud-computing.png';
import GroupPeopleIcon from './assets/icon-group-people.png';
import SalesFunnelIcon from './assets/icon-sales-funnel.png';
import TrophyBigIcon from './assets/icon-trophy-big.png';
type HeroCardDataType = {
  id: number;
  title: string;
  icon: any;
  number: string;
  subtitle: string;
};
const heroCardData: HeroCardDataType[] = [
  {
    id: 1,
    title: 'Access the data-fueled plans behind',
    icon: SalesFunnelIcon,
    number: '$3,021,182,299',
    subtitle: 'Digital Marketing Experts',
  },

  {
    id: 2,
    title: 'Use the expert-led tactics behind',
    icon: GroupPeopleIcon,
    number: '7,839,684',
    subtitle: 'In Leads For Our Client',
  },
  {
    id: 3,
    title: 'Unlock do-it-for-me marketing with',
    icon: TrophyBigIcon,
    number: '450',
    subtitle: 'Digital Marketing Experts',
  },
  {
    id: 4,
    title: 'Accelerate ROI with',
    icon: CloudComputingIcon,
    number: '1+ BILLION',
    subtitle: 'Data points from markettingcloudvfx',
  },
];
const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-center bg-black/70 gap-x-[3.5625rem] flex-col xl:flex-row
      xl:space-y-0
      space-y-16
      xl:justify-center
      xl:items-start
     px-[7.09375rem]
     py-[10.25rem]
 

     "
      //  py-[7.25rem]
    >
      {/* px-10 mt-8 mb-8 mr-8 */}
      <div className="text-white flex flex-col items-start gap-[1.875rem] max-w-[720px]">
        <span className="text-[1.125rem] font-medium leading-[1.125rem] cursor-pointer">
          Home <ChevronRightIcon className="h-4 inline text-white/50" /> Web
          Design <ChevronRightIcon className="h-4 inline text-white/50" />{' '}
          Services
        </span>
        <h2 className="text-white leading-[130%]  font-bold text-[3.5rem]">
          Design a Website In 30 Days
        </h2>
        <p className="text-[1.25rem] leading-[1.875rem]">
          At Muscled, we are aware that practically every sector needs a strong
          online presence to draw in and convert clients. But we also recognise
          that not every business requires a complex website to accomplish their
          objectives, which is why we provide straightforward, goal-oriented
          designs.
        </p>
        <button className="bg-black py-[0.9375rem] px-10 rounded-[0.3125rem] flex justify-center items-center font-semibold text-[1.25rem]">
          Start Now
        </button>
      </div>
      <div
        className="xl:mr-[2rem] xl:pr-[7.09375rem] xl:my-[6.25rem] relative md:w-full lg:w-fit xl:max-w-[436px]  space-y-[0.625rem]
      "
      >
        {heroCardData.map(hero => (
          <HeroCard
            icon={hero.icon}
            key={hero.id}
            title={hero.title}
            number={hero.number}
            subtitle={hero.subtitle}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroSection;
