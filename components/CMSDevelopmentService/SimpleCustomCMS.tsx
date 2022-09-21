import React from "react";
import Range from "./Range";

const SimpleCustomCMS = () => { 
  return (
    <div className="pt-[50px] bg-white">
    <div className="w-full bg-[#c40000]/[0.06] py-[40px] px-[5px] xl:py-[80px] xl:px-[70px] font-sans">
      <div> 
        <h1 className="text-center text-4xl font-bold pb-11">
          Simple Custom Content Management Systems
        </h1>

        <p className="xl:text-center text-left font-sans text-md xl:text-xl">
          Do you want to make it easier to manage the content on your website?
          For managing their websites, various web development companies use
          content management systems as customized web applications.
          <span className="font-bold text-red-600"> Muscled </span>
          improves CMS support by including:
        </p>
        <div className="mt-7">
          <ul className=" font-sans text-md xl:text-xl list-inside list-disc">
            <li className="mt-1 md:pb-0">
              <span className="-ml-2">
                CMS pricing packages that are customized to help you get started
                on a project while staying within your budget.
              </span>
            </li>
            <li className="mt-1 md:pb-0">
              <span className="-ml-2">
                Web integration of various CMS platforms, such as transactional,
                e-commerce, and content-based CMS.
              </span>
            </li>
            <li className="mt-1 md:pb-0">
              <span className="-ml-2">
                A team of CMS web developers and SEO experts who can provide
                dependable and adaptable services to increase ROI.
              </span>
            </li>
          </ul>
        </div>

        <div className="font-sans text-md xl:text-xl xl:text-center text-left mt-7">
          <p className="pb-7 ">
            Your company can get the CMS it requires with our custom content
            management systems. Our experienced team can deliver exactly what
            you need and on time, whether you need a custom content management
            system or a CMS platform like WordPress or Joomla
          </p>
          <p>
            Are you ready to speak with a strategist right now? We'd love to
            hear from you!
          </p>
        </div>
      </div>

      {/* Range Component */}
      <div className="mt-10 bg-[#2e1e34cc]/[0.8] py-[40px] px-[5px] xl:py-[40px] xl:px-[100px]">
        <div className="text-white font-sans text-left">
          <h1 className="xl:text-[40px] text-[36px] leading-tight">
            Request an Instant Quote using Our Website Design Calculator
          </h1>
          <p className="xl:text-xl text-lg mt-10 font-normal">
            To get a free, instant quote, use the sliders below to indicate your
            needs, then click the "See Pricing" button. We'll show you both low
            and high-ended estimates for each service category, so you'll have
            an overall range of how much it might cost to build such a website.
          </p>
        </div>
        <div>
          <Range />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SimpleCustomCMS;
