import Image from 'next/image';
import Logo1 from './assets/Logo1logo.png';
import Logo2 from './assets/Logo2logo.png';
import Logo4 from './assets/Logo4logo.png';
import Logo5 from './assets/Logo5logo.png';
import Logo6 from './assets/Logo6logo.png';
import Logo7 from './assets/Logo7logo.png';
const Partners = () => {
  return (
    <section className="text-center py-8">
      <h3 className="text-black/50 text-[1.5rem] mb-4">Our Partners</h3>
      <div className="flex items-center justify-center px-8 lg:px-28 flex-shrink-0 gap-x-10 mt-4 pb-4">
        <div className="relative flex-shrink-0">
          <Image src={Logo1} alt="companyName" objectFit="contain" />
        </div>
        <div className="relative flex-shrink-0">
          <Image src={Logo2} alt="companyName" objectFit="contain" />
        </div>
        <div className="relative flex-shrink-0">
          <Image src={Logo4} alt="companyName" objectFit="contain" />
        </div>
        <div className="relative flex-shrink-0 hidden xl:block">
          <Image src={Logo5} alt="companyName" objectFit="contain" />
        </div>
        <div className="relative flex-shrink-0 hidden lg:block">
          <Image src={Logo6} alt="companyName" objectFit="contain" />
        </div>
        <div className="relative flex-shrink-0 hidden lg:block">
          <Image src={Logo7} alt="companyName" objectFit="contain" />
        </div>
      </div>
    </section>
  );
};
export default Partners;
