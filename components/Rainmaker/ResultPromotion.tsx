import Image from 'next/image';
import ResultLogo from './assets/ResultLogo.png';
const ResultPromotion = () => {
  return (
    <section>
      <div className="flex items-start py-20 px-24 gap-28 bg-[#291E2E]">
        <div className="text-white">
          <h3 className="font-bold text-4xl text-inherit mb-5">
            Design Focused on Results
          </h3>
          <p className="text-lg">
            At Muscled, we are constantly focused on helping our clients achieve
            tangible outcomes. Because of this, we want to make it as simple as
            possible for you to begin using RainmakerFX to generate leads
            online.
            <br />
            <br />
            By providing three template choices, we expedite the design process.
            Every single one is responsive and created with the intention of
            converting new leads, so all of your visitors can become customers
            regardless of the device or browser they use to view your site.
          </p>
        </div>
        <div className="flex-shrink-0 hidden md:block md:my-auto items-center justify-center md:w-60 lg:w-80 xl:w-fit">
          <Image src={ResultLogo} alt="Results" />
        </div>
      </div>

      <div className="bg-white flex flex-col space-y-4 lg:flex-row p-24 gap-x-8 justify-center items-center">
        <p className="font-bold text-[1.75rem]">
          You'll work with a professional project manager to create sitemap
          architecture, user experience, and conversion planning goals after
          selecting the template that best fits your needs and objectives.
        </p>
        <p className="text-[1.25rem]">
          Then, within 30 days, we'll publish your site after requesting a few
          crucial details (such as your logo, branding, and photos).
          <br />
          <br />
          In order to create a unique look, they also give 3 hours of design
          time to change the template's colours, graphics, buttons, and content.
          The end result is a website that represents your brand, provides the
          information that your target audience needs, and works as an effective
          lead generation tool for your company.
        </p>
      </div>
    </section>
  );
};
export default ResultPromotion;
