import Hero from "../../components/Fawwaz/Sections/Hero";
import Section from "../../components/Fawwaz/Sections/Section";
import { NextPage } from "next";
import Rectangle from "../../components/Rectangle";
import Range from "../../components/Range";
import SimpleCard from "../../components/SimpleCard/SimpleCard";

import ReactPlayerModal from "../../components/ReactPlayerModal";
// assets
// SVG
import IconSaleFunnel from "../../components/assets/icon-sales-funnel.png";
import Group from "../../components/assets/group.png";
import Trophy from "../../components/assets/icon-trophy-big-1.png";
import CloudComputing from "../../components/assets/icon-cloud-computing-1.png";
import Logo1 from "../../components/assets/logo-1.png";
import Logo2 from "../../components/assets/logo-2.png";
import Logo4 from "../../components/assets/logo-4.png";
import Logo5 from "../../components/assets/logo-5.png";
import Logo6 from "../../components/assets/logo-6.png";
import TableIcon from "../../components/assets/mdi_table-of-contents.png";
import CmsMuscled from "../../components/assets/cms-muscled.png";
import CmsMuscledTwo from "../../components/assets/cms-muscled-2.png";
import Logo7 from "../../components/assets/logo-7.png";
import Logo from "components/Fawwaz/Logo";
import playIcon from "components/playIcon";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <div>
      {/* First Section */}
      {/* Left Side */}
      <div className="bg-black/[0.7] flex flex-col xl:flex-row justify-center">
        <div>
          <Hero
            title="CMS Development Services that are completely transparent"
            description="Content management systems (CMS) are a must-have for all websites, from large informational sites to e-commerce stores. The simplest way to ensure a proper web presence is to streamline and organize your website, and Muscled can assist. Our CMS development services begin at $2,200 and are completely transparent. Scroll down for more information, or contact us for a specific quote!"
            input
          />
        </div>

        {/* Right Side */}
        <div className="max-w-[640px] xl:mt-20 -mt-24 max-h-[640px] flex flex-col justify-center">
          <div className="my-1 bg-blue-600 mx-auto">
            <Rectangle
              icon={IconSaleFunnel}
              text1={"Access the data-fueled plans behind "}
              number={"$3,021,182,299"}
              text2={"IN CLIENT REVENUE"}
            />
          </div>
          <div className="my-1 mx-auto">
            <Rectangle
              icon={Group}
              text1={"Use the expert-led tactics behind"}
              number={"7,839,684"}
              text2={"IN LEADS FOR OUR CLIENTS"}
            />
          </div>
          <div className="my-1 mx-auto">
            <Rectangle
              icon={Trophy}
              text1={"Unlock do-it-for-me marketing with"}
              number={"450"}
              text2={"DIGITAL MARKETING EXPERTS"}
            />
          </div>
          <div className="my-1 mx-auto">
            <Rectangle
              icon={CloudComputing}
              text1={"Accelerate ROI with"}
              number={"1+ BILLION"}
              text2={"DATA POINTS FROM MARKETINGCLOUDFX"}
            />
          </div>
        </div>
      </div>

      {/* Partner section */}
      <div className="mb-5 pb-5">
        <Section className="text-center pt-16">
          <h3 className="text-black-50 text-2xl">Our Partners</h3>

          <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
            <Logo src={Logo1} width={154} height={42} />
            <Logo src={Logo2} width={154} height={42} />
            <Logo src={Logo4} width={154} height={42} />
            <Logo src={Logo5} width={154} height={42} />
            <Logo src={Logo6} width={154} height={42} />
            <Logo src={Logo7} width={154} height={42} />
          </div>
        </Section>
      </div>

      {/* Section Third */}
      <div className="w-full bg-[#c40000]/[0.06] py-[40px] px-[5px] xl:py-[80px] xl:px-[100px] font-sans">
        <h1 className="text-center text-4xl font-bold pb-7">
          Simple Custom Content Management Systems
        </h1>

        <p className="xl:text-center text-left font-sans text-md xl:text-xl">
          Do you want to make it easier to manage the content on your website?
          For managing their websites, various web development companies use
          content management systems as customized web applications. Muscled
          improves CMS support by including:
        </p>
        <div className="mt-7">
          <ul className="text-center font-sans text-md xl:text-xl p-5">
            <li className="list-disc pb-4 md:pb-0">
              CMS pricing packages that are customized to help you get started
              on a project while staying within your budget.
            </li>
            <li className="list-disc pb-4 md:pb-0">
              Web integration of various CMS platforms, such as transactional,
              e-commerce, and content-based CMS.
            </li>
            <li className="list-disc pb-4 md:pb-0">
              A team of CMS web developers and SEO experts who can provide
              dependable and adaptable services to increase ROI.
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

        {/* Range Component */}
        <div className="mt-10 bg-[#2e1e34cc]/[0.8] py-[40px] px-[5px] xl:py-[40px] xl:px-[100px]">
          <div className="text-white font-sans text-left">
            <h1 className="xl:text-[40px] text-[36px] leading-tight">
              Request an Instant Quote using Our Website Design Calculator
            </h1>
            <p className="text-[18px] text-md  mt-5 font-normal">
              To get a free, instant quote, use the sliders below to indicate
              your needs, then click the "See Pricing" button. We'll show you
              both low and high-ended estimates for each service category, so
              you'll have an overall range of how much it might cost to build
              such a website.
            </p>
          </div>
          <div>
            <Range />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <div className=" py-20 bg-black">
          <div className="px-5 md:px-10 lg:px-20 mx-auto container">
            <div className="lg:flex items-start justify-between lg:justify-center lg:gap-x-[60px]">
              <div className="lg:max-w-[580px]  pb-[76px]">
                <p className="md:text-2xl text-xl md:leading-[36px] text-gray-50">
                  "As a company, we have had a fantastic experience with all of
                  our Muscled projects. We started with one SEO and now have
                  four SEO projects and three CMS projects!"
                </p>
                <p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
                  Sales Director
                </p>
                <p className="md:text-xl text-lg font-bold leading-[30px] text-gray-50 mt-[30px]">
                  Company Name
                </p>
                <button className="md:text-xl text-lg mt-[60px] hover:bg-opacity-80 font-semibold md:leading-[30px] text-white px-10 py-4 bg-red-700  rounded">
                  See Our Clients’ Testimonials
                </button>
              </div>
              <ReactPlayerModal
                Icon={playIcon}
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                thumbnail="main.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What Is th price of CMS */}
      {/* Section Fourth */}
      <div className="p-3">
        <div className="flex flex-wrap gap-10 justify-center py-20">
          <div className="max-w-[760px] space-y-7">
            <h2 className="text-4xl">What is the price of a CMS?</h2>
            <p className="md:text-xl">
              <span>
                A content management system costs different amounts. Some are
                quite pricey, while others are completely free. Some e-commerce
                CMS charge a monthly fee, while others only charge for hosting.
                The cost of a content management system can vary greatly
                depending on your needs.
              </span>
              <br />
              <br />
              <span>
                We created this calculator to help you determine the cost of a
                CMS for your business. Use the sliders to specify your
                requirements, and we'll generate an instant quote estimating the
                cost of a custom CMS configuration for your website.
              </span>
              <br />
              <br />
              <span>
                How do you know what to expect when comparing the best CMS for
                your company? The calculator above is a useful tool that can
                assist you in getting started by providing a general CMS
                estimate based on common requirements, such as custom content
                management.
              </span>
              <br />
              <br />
              <span>
                When looking to integrate with a CMS, there are many factors to
                consider, but this calculator will help you think about some
                common components and provide you with some budgetary numbers
                for your initial planning stage. And, while this tool can help
                you estimate pricing, it is no substitute for contacting us and
                telling us more about your CMS needs.
              </span>
              <br />
              <br />
              <span>
                With our content management system services,{" "}
                <span className="text-red-600 font-bold">Muscled</span> is ready
                to assist you in resolving your content management issues and
                collaborating with you to find the best solution. When you're
                ready, please contact us to discuss your CMS project. Send us an
                email, and our CMS experts will work together to find a solution
                that meets your specific needs and business objectives.
              </span>
            </p>
          </div>

          {/* Right side */}
          <div className="w-[350px] border-2 bg-[#F2F2F2] rounded-lg h-[373px]">
            <div className="flex justify-between py-[15px] px-[10px] w-full">
              <div className="flex ">
                <Logo src={TableIcon} width={30} height={20} />
                <h4 className="font-sans text-xl text-black font-normal ml-5">
                  Table of Contents
                </h4>
              </div>

              <div className="mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 -rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            {/*  */}
            <div className="py-[15px] px-[10px] bg-white">
              <div className="flex items-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 -ml-2 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <p>What is the price of a CMS?</p>
              </div>

              <div className="flex items-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 -ml-2 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <p className="">
                  When should you hire CMS development services?
                </p>
              </div>

              <div className="flex items-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 -ml-2 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <p className="">
                  CMS development services and SEO: a winning combination
                </p>
              </div>

              <div className="flex items-center pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 -ml-2 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <p className="">FAQs about CMS development services</p>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 -ml-2 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <p className="">Let's get started on your custom CMS today</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When should you hire CMS development services?
       */}
      <div>
        <div className="flex flex-wrap gap-10 justify-start my-20">
          <div className="xl:max-w-[760px]  space-y-7 my-[7px] mx-[10px] xl:my-[15px] xl:mx-[100px]">
            <h2 className="text-4xl">
              When should you hire CMS development services?
            </h2>
            <Image src={CmsMuscled} layout="responsive" />
            <span className="text-md xl:text-xl">
              If you want to change the functionality of your website, you may
              need to use CMS development services to upgrade your CMS.
            </span>
            <br />
            <br />
            <span className="text-md xl:text-xl">
              For example, if your site is hosted on an e-commerce platform, you
              may want to add graphic elements that your current CMS does not
              support. Maybe you've been doing everything manually and want to
              use a CMS to help you manage your website better.
            </span>
            <p className="text-md xl:text-xl">
              Here are a few reasons why you should change your CMS
            </p>
            <br />
            <ul className="text-md xl:text-xl">
              <li className="list-disc pb-4 md:pb-0">
                The existing CMS does not permit redesign.
              </li>
              <li className="list-disc pb-4 md:pb-0">
                The existing CMS has limitations that necessarily require
                extensive custom development.
              </li>
              <li className="list-disc pb-4 md:pb-0">
                The existing CMS is prohibitively expensive.
              </li>
              <li className="list-disc pb-4 md:pb-0">
                The existing CMS is far too slow
              </li>
              <li className="list-disc pb-4 md:pb-0">
                The site owner wants to transform from a hasted to a self-hasted
                platform
              </li>
            </ul>
            <br />
            <p className="text-md xl:text-xl">
              Checkout our website redesign for more information on how to
              choose a CMS.
            </p>

            {/* CMS development services and SEO: a winning combination
             */}
            <div className="mt-8">
              <h2 className="text-4xl pt-8 pb-8">
                CMS development services and SEO: a winning combination
              </h2>
              <br />
              <p className="text-md xl:text-xl">
                Muscled doesn't stop after you've integrated your content
                management system! One of our content management specialties is
                designing and integrating search engine-friendly content
                management systems. We offer a wide range of Internet marketing
                strategies and tools to help you leverage your CMS and increase
                your overall ROI.
              </p>{" "}
              <br />
              <p className="text-md xl:text-xl">
                Our experienced team of experts can provide invaluable results
                by extending your CMS's "out-of-the-box" capabilities. We can
                also demonstrate how to use your CMS to improve the
                marketability of your website, such as Google Analytics
                consulting and conversion analysis services with Google
                Optimize.
              </p>
              <Image src={CmsMuscledTwo} layout="responsive" />
            </div>

            {/* FAQs about CMS development services  */}
            <div className="mt-8">
              <h2 className="text-4xl pt-8 pb-8">
                FAQs about CMS development services
              </h2>
              <br />
              <p className="text-md xl:text-xl">
                Do you have any questions about CMS development services? See
                our Frequently Asked Questions!
              </p>
              <br />

              {/* What exactly is a CMS */}
              <h3 className="text-2xl font-sans font-bold">
                What exactly is a CMS?
              </h3>
              <br />
              <p className="text-md xl:text-xl">
                A content management system (CMS) by Wikipedia is defined as "a
                process or system used to organize and facilitate collaborative
                collection of documents and other content."
              </p>
              <br />
              <p className="text-md xl:text-xl">
                In a summary, a CMS is a web-based application that allows
                multiple users with varying permission levels to manage
                different parts of a website. They will be able to edit website
                content, data, and applications based on their permission
                levels.
              </p>
              <br />

              <p className="text-md xl:text-xl">
                Today, many web development companies around the world use a CMS
                as a customized web application for managing websites and web
                content. A CMS frequently necessitates the use of specialized
                client software for editing and building articles.
              </p>

              <br />
              <br />
              {/* What kind of CMS platforms are there? */}
              <h3 className="text-2xl font-sans font-bold">
                What kind of CMS platforms are there?
              </h3>
              <br />
              <p className="text-md xl:text-xl">
                For good reason, you've probably heard of popular content
                management systems like WordPress, Joomla!, and possibly even
                Magento for e-commerce-related content management. These CMS
                platforms have emerged as some of the most dependable,
                adaptable, cost-effective, and SEO-friendly content management
                systems available today.
              </p>
              <br />
              <p className="text-md xl:text-xl">
                Muscled, like any good CMS company, understands the importance
                of having control over your online content and business
                processes without breaking the bank. Our CMS web developers and
                CMS SEO experts understand how to make the most of these
                open-source platforms.
              </p>
              <br />
              <p className="text-md xl:text-xl">
                Of course, depending on your specific requirements, the best
                type of CMS is one that is built from the ground up to meet
                stringent business or interface requirements. With our CMS
                development services, Muscled can do the same! We have extensive
                experience designing and developing custom content management
                solutions to meet any need.
              </p>
              <br />
              <p className="text-md xl:text-xl">
                Whether you choose a pre-built CMS solution such as Magento,
                Joomla!, WordPress, Drupal, or another solution, or a custom
                CMS, Muscled can customize and optimize it to perform absolutely
                perfectly in search.
              </p>
            </div>

            {/* Let's get started on your custom CMS today
             */}
            <div className="pb-8 pt-8">
              <h2 className="text-4xl pb-8 pt-8">
                Let's get started on your custom CMS today
              </h2>
              <p className="text-md xl:text-xl">
                Whatever your requirements are, Muscled, as a leading CMS
                provider, can handle document management, collaboration,
                e-commerce storefronts, workflow, B2B applications, and web
                content management. We are committed to delivering websites that
                are built on the best web content management systems available.
              </p>
              <br />
              <p className="text-md xl:text-xl">
                We are well-known in the United States for developing and
                implementing the most cost-effective content management
                solutions, enabling our clients to harness and leverage the
                power of modern technology, successful marketing techniques, and
                best customer service practices. To maximize the efficiency of
                their business operations, we help our clients communicate with
                their customers and prospects.
              </p>
              <br />
              <p className="text-md xl:text-xl">
                Do you want to find out more about our CMS installation,
                customization, and development services? Get in touch with us
                today to begin working on your custom content management system!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Card */}
      <div className="flex flex-col md:flex-row justify-center items-center  ">
        <SimpleCard
          heading="Web Design Services"
          items1="Web Design"
          items2="Website Redesign"
          items3="Landing Page Design"
          items4="Rapid Web Design"
        />
        <SimpleCard
          heading="Web Marketing Services"
          items1="SEO"
          items2="Website Copywriting"
          items3="PPC Management"
          items4="Content Maketing"
          items5="All Internet Marketing Services"
        />
        <SimpleCard
          heading="Learn More About CMS Development"
          items1="The Complete guide to Redesigning Your Website "
          items2="How to know which CMS to use"
        />
      </div>
    </div>
  );
};
export default Page;
