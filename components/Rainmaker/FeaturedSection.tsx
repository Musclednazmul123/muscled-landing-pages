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
    title: '3 Theme Alternatives',
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
const FeaturedSection = () => {
  return (
    <div className="px-24 pb-[4.75rem] w-full bg-[#F5F5F5]">
      <div className="flex justify-center ">
        {/* grid grid-cols-1 lg:grid-cols-2 auto-rows-fr place-items-center lg:gap-12 xl:grid-cols-3  */}
        <div className="flex flex-wrap basis-[80rem] justify-center  gap-x-14 gap-y-[3.75rem]">
          {features.map((feature: featureProps) => (
            <div className="flex w-[23.75rem]" key={feature.id}>
              <div className="relative flex-shrink-0 mr-6">
                <Image src={feature.logo} objectFit="contain" />
              </div>
              <div>
                <h3 className="text-black font-bold text-[1.75rem] leading-[130%] mb-[0.9375rem]">
                  {feature.title}
                </h3>
                <p className="text-black/80">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedSection;
