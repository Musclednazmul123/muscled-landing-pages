import ReactPlayerModal from '../ReactPlayerModal';
import { PlayIcon } from '@heroicons/react/solid';

const PromotionSection = () => {
  return (
    <section className="py-[3.125rem] pb-[3.875rem] px-24 bg-[rgba(196,0,0,0.06)]">
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
      <div className="relative flex justify-center">
        <ReactPlayerModal
          url="https://www.youtube.com/watch?v=zWh3CShX_do&ab_channel=How-toVideos"
          Icon={PlayIcon}
          thumbnail="https://www.kapwing.com/resources/content/images/2021/06/kapwing-url-1-1.png"
          height="40rem"
          width="77.5rem"
        />
        <PlayIcon className="absolute w-20 h-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black/10" />
      </div>
    </section>
  );
};
export default PromotionSection;
