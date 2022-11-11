import { useState } from "react";
import CmsMuscled from "../../components/assets/cms-muscled.png";
import CmsMuscledTwo from "../../components/assets/cms-muscled-2.png";
import TableIcon from "../../components/assets/mdi_table-of-contents.png";
import Image from "next/image";
import Logo from "components/Fawwaz/Logo";

const AboutCMS = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);
  return (
    <div className="flex relative mt-28">
    <div>
      {/* What Is th price of CMS */}   
      {/* Section Fourth */}
      
        <div className="flex flex-wrap gap-10 justify-start pb-20">
          <div className="max-w-[760px] space-y-7 my-[7px] mx-[10px] xl:mx-[80px]">
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
        </div>
      

      {/* When should you hire CMS development services? 
       */} 
      <div>
        <div className="flex flex-wrap gap-10 justify-start ">
          <div className="xl:max-w-[760px] space-y-7 my-[7px] mx-[10px] xl:mx-[80px]">
            <h2 className="text-4xl leading-snug"> 
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
            <br />
            <br /> 
            <p className="text-md xl:text-xl">
              Here are a few reasons why you should change your CMS
            </p>
            <br />
            <ul className="text-md xl:text-xl ml-6">
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
              <h2 className="text-4xl pt-8 pb-8 pr-5">
                CMS development services and SEO: <br /> a winning combination
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
            <div className="mt-8  font-sans"> 
              <h2 className="text-4xl pt-6 pb-8 mr-5">
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
            <div className="pb-8 pt-8 font-sans">
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

    </div>
          {/* Right side */}
          {isOpen ? (
            <div className="w-[400px] border-2 bg-[#F2F2F2] rounded-lg h-[340px] sticky top-10">
              <div className="flex justify-between py-[15px] px-[10px] w-full">
                <div className="flex">
                  <Logo src={TableIcon} width={30} height={20} />
                  <h4 className="font-sans text-xl text-black font-bold ml-5">
                    Table of Contents
                  </h4>
                </div>

                <div
                  className="mr-5 cursor-pointer animate-slideUp"
                  onClick={() => setIsOpen(!isOpen)}
                >
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

              <div className={`py-[15px] px-[10px] bg-white animate-slideUp`}>
                <div className="flex items-center pb-4 pl-1 justify-start ">
                  <div className="h-auto w-3 flex">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    <p className="pl-3 text-base">
                      What is the price of a CMS?
                    </p>
                  </div>
                </div>

                <div className="flex items-center pb-4 pl-1 justify-start ">
                  <div className="h-auto w-3 flex">
                    <svg
                      width="20"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                    </svg> 
                  </div>

                  <div> 
                    <p className="pl-3 text-base">
                      When should you hire CMS development services?
                    </p>
                  </div>
                </div>

                <div className="flex items-center pb-4 pl-1 ">
                  <div className="h-auto w-3 flex">
                    <svg
                      width="21"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                    </svg>
                  </div>
                  <p className="pl-3 text-base">
                    CMS development services and SEO: a winning combination
                  </p>
                </div>

                <div className="flex items-center pb-4 pl-1 ">
                  <div className=" h-auto w-3 flex">
                    <svg
                      width="21"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                    </svg>
                  </div>

                  <div>
                    <p className="pl-3 text-base">
                      FAQs about CMS development services
                    </p>
                  </div>
                </div>

                <div className="flex items-center pb-4 pl-1 ">
                  <div className=" h-auto w-3 flex">
                    <svg
                      width="21"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
                        fill="black"
                        fill-opacity="0.8"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="pl-3 text-base">
                      Let's get started on your custom CMS today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[400px] border-2 bg-[#F2F2F2] rounded-lg h-[65px] sticky top-10">
              <div className="flex justify-between py-[15px] px-[10px] w-full">
                <div className="flex">
                  <Logo src={TableIcon} width={30} height={20} />
                  <h4 className="font-sans text-xl text-black font-bold ml-5">
                    Table of Contents
                  </h4>
                </div>
                <div
                  className="mr-5 cursor-pointer animate-slideUp"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
    </div>
  );
};

export default AboutCMS;
