import ReactPlayerModal from '../ReactPlayerModal';
import { PlayIcon } from '@heroicons/react/solid';
import ClockLogo from './assets/ClockLogo.png';
import TargetLogo from './assets/TargetLogo.png';
import GoogleAnalyticsLogo from './assets/GoogleAnalyticsLogo.png';
import WebsiteBuilderLogo from './assets/WebsiteBuilderLogo.png';
import WordpressLogo from './assets/WordpressLogo.png';
import Image from 'next/image';
type featureProps = {
  id: number;
  logo: any;
  desc: string;
  title: string;
};
const features = [
  {
    id: 1,
    logo: TargetLogo,
    title: 'Lead-Influenced Design',
    desc: 'Every one of our templates is made to affect your bottom line',
  },
  {
    id: 2,
    logo: WebsiteBuilderLogo,
    title: 'Theme Alternatives',
    desc: "To protect the integrity of your brand, customise the lead-driven design's appearance and layout.",
  },
  {
    id: 3,
    logo: ClockLogo,
    title: '3 hours of design',
    desc: "To create a unique look, a designer will alter the template's colours, graphics, and website sections.",
  },
  {
    id: 4,
    logo: WordpressLogo,
    title: 'WordPress',
    desc: 'WordPress website created within 30 days of content receipt',
  },
  {
    id: 5,
    logo: GoogleAnalyticsLogo,
    title: 'Google Analytics',
    desc: 'Setting up the monitoring code, measurements, statistics, and reporting for Google Analytics',
  },
];
const PromotionSection = () => {
  return (
    <section className="py-[3.125rem] px-24 bg-white">
      <p className="font-bold text-[1.75rem] leading-9 text-center text-black mb-[2.6875rem]">
        We'll merge your current branding into one of our custom themes as part
        of our RainmakerFX package, and we'll have your site up and running (and
        generating leads!) in 30 days.
      </p>
      <p className="text-[1.25rem] text-black/80 text-center mb-10">
        Time is of the essence! Call us at{' '}
        <span
          className="text-[#8248FC] font-bold cursor-pointer
"
        >
          888-601-5359
        </span>{' '}
        to get started, or continue reading to find out more.
      </p>
      <div className="relative flex justify-center mb-16">
        <ReactPlayerModal
          url="https://www.youtube.com/watch?v=zWh3CShX_do&ab_channel=How-toVideos"
          Icon={PlayIcon}
          thumbnail="https://www.kapwing.com/resources/content/images/2021/06/kapwing-url-1-1.png"
          height="40rem"
          width="77.5rem"
        />
        <PlayIcon className="absolute w-20 h-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black/10" />
      </div>

      <div className="flex justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr place-items-center gap-4 lg:gap-12 xl:grid-cols-3">
          {features.map((feature: featureProps) => (
            <div className="flex w-[23.75rem]" key={feature.id}>
              <div className="relative flex-shrink-0 mr-6">
                <Image src={feature.logo} objectFit="contain" />
              </div>
              <div>
                <h3 className="text-black font-bold text-3xl mb-4">
                  {feature.title}
                </h3>
                <p className="text-black/80">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PromotionSection;
