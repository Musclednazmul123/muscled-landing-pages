import React from "react";
import { NextPage } from "next";

// components
import { Section, Testimonial, Footer, Hero } from "components/Fawwaz/Sections";
import { Input } from "components/Fawwaz/Form";
import Button from "components/Fawwaz/Button";
import Logo from "components/Fawwaz/Logo";

import { AiFillPhone, AiFillStar, AiOutlineCheck } from "react-icons/ai";

import { Table, TableOfContent, Td, Th } from "components/Fawwaz/Table";
import logo from "components/assets/logo/logo1.png";
import Card from "components/Card";

import level1 from "../../components/assets/level1.png";
import level2 from "../../components/assets/level2.png";
import level3 from "../../components/assets/level3.png";

const Page: NextPage = () => {
  const list = [
    { icon: true, text: "1 initial website user testing video" },
    { icon: true, text: "Heatmap and click stream testing on 4 pages" },
    { icon: true, text: "300+ SMEs behind campaign driving results" },
    { icon: true, text: "Online project management scheduling" },
  ];
  const list2 = [
    { icon: true, text: "2 initial website user testing videos" },
    { icon: true, text: "Heatmap and click stream testing on 8 pages" },
    { icon: true, text: "Monthly user experience reporting" },
    { icon: true, text: "300+ SMEs behind campaign driving results" },
  ];
  const list3 = [
    { icon: true, text: "Dedicated UX project manager" },
    {
      icon: true,
      text: "Implementation of recommendations based on business seasons",
    },
    { icon: true, text: "Creation of persona maps and customer journeys" },
    { icon: true, text: "Executive report on questionnaire feedback" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[890px] bg-black-70 px-3 lg:px-0">
        <Hero
          title="Website User Experience Analysis Services for SMBs"
          description="Website User Experience Analysis Services for SMBs
        Are you looking for ways to increase your revenue? The great user experience (UX) of a website is the key to the increase in client satisfaction, sales, and revenue. Muscled can enable that with a tailored, in-depth UX analysis report. By putting a website analysis into practice, you not only enhance the website-visitor experience but also develop brand loyalty and collaborate with a talented group of web designers.
        "
          input
        ></Hero>
      </div>

      <Section className="text-center pt-16">
        <h3 className="text-black-50 text-2xl">Our Partners</h3>

        <div className="pt-5 flex flex-wrap justify-between pb-12 gap-6">
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
          <Logo src={logo.src} width={154} height={34} />
        </div>
      </Section>

      {/* pricing card section */}
      <Section>
        <h2 className="text-center py-10 text-3xl">
          Explore Site Speed Optimization Service Packages
        </h2>
        <div className="flex py-9 space-x-5">
          <div className="relative w-[100%]">
            <Card
              subtitle="Standard Plan"
              description="$1,500 INITIAL INVESTMENT"
              title="$750"
              duration="month"
              list={list}
              className="text-red-400 w-full max-w-[400px]"
              type="pricing"
              height={917}
              header={1}
            />
            <div className="absolute left-[130px] top-[-60px]">
              <img className="col-span-1" src={level1.src} alt="level1-icon" />
            </div>
          </div>

          <div className="relative w-[100%]">
            <Card
              subtitle="Premium Plan"
              description="$3,000 INITIAL INVESTMENT"
              duration="month"
              title="$1,500"
              list={list2}
              className="text-red-400 w-full max-w-[400px]"
              type="pricing"
              height={917}
              header={1}
            />
            <div className="absolute left-[130px] top-[-60px]">
              <img className="col-span-1" src={level2.src} alt="level1-icon" />
            </div>
          </div>

          <div className="relative w-[100%]">
            <Card
              subtitle="STRAILBLAZER PLAN"
              description="$3,125 INITIAL INVESTMENT"
              title="$3,000"
              duration="month"
              list={list3}
              className="text-red-400 w-full max-w-[400px]"
              type="pricing"
              height={913}
              header={1}
            />
            <div className="absolute left-[130px] top-[-60px]">
              <img className="col-span-1" src={level3.src} alt="level1-icon" />
            </div>
          </div>
        </div>
      </Section>

      <div className="p-3 bg-red-10">
        <div className="flex flex-wrap gap-10 justify-center py-20">
          <div className="max-w-[760px] space-y-7">
            <h2 className="text-4xl">
              The Digital Workout That Grows Your Traffic and Revenue through
              SEO
            </h2>
            <p className="md:text-xl">
              <span>
                Don’t let your page be buried. If you’re looking for ways to
                improve your website, your best bet will be SEO.
              </span>
              <br />
              <br />
              <span>But What is SEO?</span>
              <br />
              <br />
              <span>
                SEO is a digital marketing strategy that helps your website rank
                higher on Google, Bing, and other search engines on the
                internet. Some of its known techniques are optimizing your
                page’s keywords to building your internal links. The more
                visible your website is, the more you’re likely to accumulate
                the attention of your prospective customers, hence, the more
                likely you’ll be able to increase your revenue.
              </span>
              <br />
              <br />
              <span>
                Muscled Digital Agency is the only workout your page needs when
                it comes to SEO. From on-page SEO, off-page SEO, and technical
                SEO, you’re sure to hook those warm and hot customers to your
                business without investing a lot of work.
              </span>
              <br />
              <br />
              <span>How about you boost your performance today</span>
              <br />
              <br />
              <span>
                Reach out to us and chat with an expert from our SEO team about
                developing your website’s performance and profit.
              </span>
            </p>
          </div>
        </div>
      </div>

      <Testimonial></Testimonial>
    </>
  );
};
export default Page;
