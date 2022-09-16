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
    <section className="bg-black/70 grid grid-cols-1 lg:grid-cols-3 auto-rows-fr grid-rows-1 items-center">
      <div className="text-white col-span-2 lg:p-24 lg:pt-24 lg:my-[7.25rem] px-10 mt-8 mb-8 mr-8">
        <span className="text-[1.125rem] cursor-pointer">
          Home <ChevronRightIcon className="h-4 inline text-gray-400" /> Web
          Design <ChevronRightIcon className="h-4 inline text-gray-400" />{' '}
          Services
        </span>
        <h2 className="text-white text-[3.75rem] mt-[1.875rem] mb-5">
          Design a Website In 30 Days
        </h2>
        <p className="text-[1.25rem] mb-[2.8125rem]">
          At Muscled, we are aware that practically every sector needs a strong
          online presence to draw in and convert clients. But we also recognise
          that not every business requires a complex website to accomplish their
          objectives, which is why we provide straightforward, goal-oriented
          designs.
        </p>
        <button className="bg-black py-[0.9375rem] px-10 rounded-[0.3125rem]">
          Start Now
        </button>
      </div>
      <div
        className=" lg:mr-[7.09375rem] xl:mt-[4.25rem] lg:mt-24 mt-4 space-y-[0.625rem] flex flex-col items-center mb-4
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
