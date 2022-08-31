import React from "react";
import { NextPage } from "next";

// components
import { Section, Testimonial, Hero } from "components/Fawwaz/Sections";
// import { Card } from "components/Fawwaz/Card";
import Button from "components/Fawwaz/Button";
import Logo from "components/Fawwaz/Logo";
import ImportantLinkCard from "components/ImportantLinkCard";
import { AiOutlineCheck } from "react-icons/ai";
import VideoFrame from "components/Fawwaz/VideoFrame";

import { Table, Td, Th } from "components/Fawwaz/Table";
import logo from "components/assets/logo/logo1.png";
import Card from "components/Card";
import HeroCard from "components/HeroCard";

import section1 from "../../components/assets/section1.png";
import TableOfContent from "../../components/TableOfContent/TableOfContent";
import { HeroCardProps } from "types/types";
import { BiChevronRight } from "react-icons/bi";

// images
import level1 from "../../components/assets/level1.png";
import level2 from "../../components/assets/level2.png";
import level3 from "../../components/assets/level3.png";
import sales from "components/assets/icon-sales-funnel 1.png";
import groupPeople from "components/assets/icon-group-people1 1.png";
import cloud from "components/assets/icon-cloud-computing 1.png";
import trophy from "components/assets/icon-trophy-big 1.png";
import section3 from "components/assets/card8.png";
import section2 from "components/assets/Group 38816.png";
import section4 from "components/assets/card10.png";
import section5 from "components/assets/card7.png";
import star from "components/assets/stars.png";

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
    { icon: true, text: "Executive report on questionnaire" },
  ];
  const tableOfContent: string[] = [
    "WebFX and UX optimization",
    "Bad usability means fewer customers",
    "How do we approach UX?",
    "What can I expect from a user experience analysis?",
    "What makes Muscled an authority on UX?",
    "Improve conversions rates with UX analysis services",
  ];
  const links: { title: string; link: string }[] = [
    {
      title: "Website Analysis Services (And Why These Services Matter)",
      link: "",
    },
    { title: "What Is UX Design? ", link: "" },
    { title: "4 UX Tips For Improving Your SEO", link: "" },
    { title: "3 Things A UX Design Company Can Do For Your Website", link: "" },
    { title: "13-Point Site Performance Checklist", link: "" },
  ];
  const HeroCards: HeroCardProps[] = [
    {
      img: sales,
      number: "$3,021,182,299",
      subtitle: "IN CLIENT REVENUE",
      title: "Access the data-fueled plans behind",
    },
    {
      img: groupPeople,
      number: "7,839,684",
      subtitle: "IN LEADS FOR OUR CLIENTS",
      title: "Use the expert-led tactics behind",
    },
    {
      img: trophy,
      number: "450",
      subtitle: "DIGITAL MARKETING EXPERTS",
      title: "Unlock do-it-for-me marketing with",
    },
    {
      img: cloud,
      number: "1+ BILLION",
      subtitle: "DATA POINTS FROM MARKETINGCLOUDFX",
      title: "Accelerate ROI with",
    },
  ];
  const tableRows = [
    {
      head: "Initial CRO campaign (First month) CRO & UX Assets",
      basic: "2 CRO or UX asset",
      standard: "4 CRO or UX Assets",
      premium: "8 CRO or UX Assets",
    },
    {
      head: "Monthly Ongoing CRO & UX Assets",
      basic: "1 CRO or UX asset",
      standard: "2 CRO or UX Assets",
      premium: "4 CRO or UX Assets",
    },
    {
      head: "Dedicated UX project manager",
      basic: "",
      standard: "",
      premium: "1",
    },
    {
      head: "Monthly user experience reporting",
      basic: "",
      standard: "1",
      premium: "1",
    },
    {
      head: "450+ SMEs behind campaign driving results",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Online project management scheduling",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Initial Website User Testing Videos – Up to 15 minute video (Q&A + summary of findings for each video)",
      basic: "1 video",
      standard: "2 videos",
      premium: "4 videos",
    },
    {
      head: "Initial heatmap and click stream testing and analysis",
      basic: "Up to 4 pages",
      standard: "Up to 8 pages",
      premium: "Up to 16 pages",
    },
    {
      head: "Conversion tracking code setup",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Confirmation/thank you page setup",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Goal Funnels Setup – Initial Analytics + Reporting",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Initial Conversion Audit – What Portions of Site to Test/Optimize for Conversions + Optimization Suggestions",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "VisitorRecorderFX – Web video capture of all converted leads (available for 60 days)",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "CRO & UX Assets Consist of:",
      basic: "",
      standard: "",
      premium: "",
    },
    {
      head: "Setup of website heatmaps",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Setup of visitor click tracking recording",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Setup of visitor website questionnaire (on website)",
      basic: "",
      standard: "1",
      premium: "1",
    },
    {
      head: "Page scroll reporting",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Page load time reporting",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Executive summary on conversion maximization",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Top page bounce report with recommendations",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Top navigational funnel with visitor bounce recommendations",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Raw heatmap data provided",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Reporting on visitor focus group findings",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Creation of visitor “script” for testing",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Usability questionnaire for independent testers (unique testers per questionnaire)",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "“5 second test” on top landing pages",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Creation of timed task test questionnaire (unique testers per questionnaire)",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Product perception questionnaire (unique testers per questionnaire)",
      basic: "",
      standard: "1",
      premium: "1",
    },
    {
      head: "Web forms analytics and reporting",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Google Optimize",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Video of website user experience provided",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Performance test reporting",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Conversion reporting",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Google Ads landing page conversion audit (one-time)",
      basic: "1",
      standard: "1",
      premium: "1",
    },

    {
      head: "Incoming traffic analysis",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Implementation of recommendations based on business seasons",
      basic: "",
      standard: "",
      premium: "1",
    },
    {
      head: "Creation of persona maps and customer journeys",
      basic: "",
      standard: "",
      premium: "1",
    },
    {
      head: "Executive report on questionnaire feedback",
      basic: "",
      standard: "",
      premium: "1",
    },
    {
      head: "Additional CRO & UX Assets = $600 each",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "Additional CRO & UX Assets = $600 each",
      basic: "1",
      standard: "1",
      premium: "1",
    },
    {
      head: "",
      basic: "$1,500",
      standard: "$3,000",
      premium: "$6,000",
    },
    {
      head: "User Experience Testing & Implementation Ongoing Investment",
      basic: "$750/mo.",
      standard: "$1,500/mo.",
      premium: "$3,000/mo.",
    },
  ];

  const importantLinks = [
    {
      title: "User Experience Services",
      list: [
        { title: "Web Design Services", link: "" },
        { title: "Professional Website Redesign Services", link: "" },
      ],
    },
    {
      title: "Learn More",
      list: [
        { title: "The Definitive Website Accessibility Checklist", link: "" },
        {
          title:
            "Web Design vs. Web Development: Key Distinctions to Help Decide Which One You Need",
          link: "",
        },
      ],
    },
    {
      title: "Additional Resources",
      list: [
        {
          title:
            "9 Steps for Creating a Secure Website – Make Your Site Secure",
          link: "",
        },
      ],
    },
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
        >
          {HeroCards.map((card) => {
            return (
              <HeroCard
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                number={card.number}
                img={card.img}
              />
            );
          })}
        </Hero>
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
        <div className="flex pt-9 space-x-5">
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
              height={917}
              header={1}
            />
            <div className="absolute left-[130px] top-[-60px]">
              <img className="col-span-1" src={level3.src} alt="level1-icon" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-10 flex justify-center">
        <h4 className="underline flex items-center flex-row text-[#C40000]">
          <a href="">SEE FULL DELIVERABLES </a>
          <BiChevronRight className="w-10 h-10" />
        </h4>
      </Section>

      <div className="bg-red-10">
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
          <div className="w-[389px] min-h-[214px] relative">
            <VideoFrame
              className="w-[389px] h-[214px] absolute"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <Testimonial></Testimonial>

      {/* Section Sixth */}
      <Section>
        <div className="text-center mt-24 mb-10">
          <h2 className="text-4xl">Muscled UX Analysis Services</h2>
          <p className="mt-10">
            Swipe to the right on the table below to view additional UX analysis
            plans.
          </p>
        </div>

        <div>
          <Table className="table-fixed">
            <thead>
              <tr>
                <Th className="text-left text-white" content="Features" />
                <Td
                  className="text-center font-bold"
                  content="Aggressive"
                  type="basic"
                />
                <Td
                  className="text-center font-bold"
                  content="Market Leader"
                  type="standard"
                />
                <Td
                  className="text-center font-bold"
                  content="Trailblazer"
                  type="premium"
                />
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => {
                return (
                  <tr className="text-center text-black-80">
                    <Th
                      className="text-left text-white font-light"
                      content={row.head}
                    />
                    <Td
                      content={
                        row.basic === "1" ? (
                          <AiOutlineCheck className="mx-auto fill-green-500 w-[34px] h-[30px]" />
                        ) : (
                          row.basic
                        )
                      }
                      type="basic"
                    />
                    <Td
                      content={
                        row.standard === "1" ? (
                          <AiOutlineCheck className="mx-auto fill-green-500 w-[34px] h-[30px]" />
                        ) : (
                          row.standard
                        )
                      }
                      type="standard"
                    />
                    <Td
                      content={
                        row.premium === "1" ? (
                          <AiOutlineCheck className="mx-auto fill-green-500 w-[34px] h-[30px]" />
                        ) : (
                          row.premium
                        )
                      }
                      type="premium"
                    />
                  </tr>
                );
              })}
              <tr className="text-center">
                <Th
                  className="text-white text-left font-light"
                  content={
                    <>
                      <p>Need more information? Call Us:</p>
                      <div className="flex gap-2 items-center mt-2 cursor-pointer"></div>
                    </>
                  }
                />
                <Td
                  type="basic"
                  content={
                    <Button
                      bgColor="bg-black"
                      textColor="text-white"
                      className="mx-auto"
                    >
                      Get Started
                    </Button>
                  }
                />
                <Td
                  type="standard"
                  content={
                    <Button
                      bgColor="bg-black"
                      textColor="text-white"
                      className="mx-auto"
                    >
                      Get Started
                    </Button>
                  }
                />
                <Td
                  type="premium"
                  content={
                    <Button
                      bgColor="bg-black"
                      textColor="text-white"
                      className="mx-auto"
                    >
                      Get Started
                    </Button>
                  }
                />
              </tr>
            </tbody>
          </Table>
        </div>
      </Section>

      <Section className="flex justify-around pt-32">
        <div className="flex-2 px-10">
          <div className="space-y-10">
            {/* First */}
            <div className="space-y-5">
              <h2 className="text-4xl">WebFX and UX optimization</h2>

              <p>
                Muscled and UX optimization A user experience report shows what
                your website does well and what it may improve, all based on a
                visitor’s view. It outlines all the steps you need to do to make
                your website more efficient.
              </p>

              <p>
                The report itself can vary starting from the questionnaire to a
                current website audit. However, the results will be the same: a
                better user experience for website visitors.
              </p>
              <p>
                If you strive to have more lead submissions, and better
                conversion rates, i.e. more sales you are in the right place as
                well.
              </p>

              <p>
                Our Muscled talented team has years of experience in spotting
                usability issues that can be fixed. We take confidence in
                implementing our recommendations and value seeing your website
                succeed. A number of usability problems might make it difficult
                for your clients to find what they're looking for online, which
                can make them dissatisfied and cost you money.
              </p>
              <div className="flex flex-row justify-center w-[543px] h-[143px]">
                <img src={section1.src} alt="1" />
              </div>

              <p>
                Finding and removing poor design elements that bring navigation
                confusion or complicate the check-out process will increase the
                number of your customers, and sales. Our service will fix these
                issues and will stop you from losing money.
              </p>
            </div>

            {/* Second */}
            <div className="space-y-5">
              <h2 className="text-4xl">Bad usability means fewer customers</h2>
              <p>
                Every element of user experience has an influence on your
                website’s conversion rate. With hard navigation, slow load, and
                other issues you will see a drop in your customers.
              </p>
              <p>
                Your website is like a customer service representative of your
                business. Imagine if your service is polite, clear and helpful.
                And also imagine the representative that doesn’t give a straight
                answer and doesn’t find the issue? Which one do you prefer?
              </p>
              <p>
                One of the simplest and most efficient ways to improve your
                sales process
              </p>
              <div className="flex flex-row justify-center w-[543px] h-[200px]">
                <img src={section2.src} alt="1" />
              </div>
              <p>
                and the bottom line is to reduce client annoyance through better
                usability.
              </p>

              <ul className="list-disc  pl-5">
                <li>Confusing navigation</li>
                <li>Confusing navigation</li>
                <li>Slow download times</li>
                <li>Vague calls to action</li>
                <li>Non-responsive interfaces</li>
                <li>Unintuitive interfaces</li>
                <li>Poor design</li>
                <li>Frequent technical errors</li>
              </ul>
              <p>
                Don’t neglect these factors as they are having a bad impact on
                your website. If we start working on your website, an improved
                version will excite your customers.
              </p>
            </div>

            {/* Third */}
            <div className="space-y-5">
              <h2 className="text-4xl">How do we approach UX?</h2>

              <p>
                It may be challenging to evaluate the usability of your own
                website because you and your staff are already familiar with the
                navigation and sales procedure. What’s familiar to you could be
                confusing to your new visitor.
              </p>

              <p>At Muscled, we know how to get into the mind of a customer.</p>
              <p></p>

              <p></p>
              <div className="flex px-4 items-center w-[543px] h-[200px]">
                <img src={section3.src} alt="1" />
              </div>

              <p>
                As we have already mentioned before, UX optimization has a
                two-step process: analysis and implementation. With this
                process, we go through the design elements of the site,
                detecting each possible issue that your customers may face.
                Design issues can, sometimes, be fixed up from the top down.
                Although, we are keen on identifying the source of a problem and
                solving it entirely.
              </p>
              <p>
                This is being done by asking questions: What browsers are
                visitors using? Can they easily find the information they want?{" "}
              </p>
              <p>
                Are they constantly using your site’s search bar because they
                can’t figure out how your site is structured?
              </p>
              <p>
                These are just a few of the questions and issues that our
                professional team of Internet marketers considers when they
                apply our process to your website.
              </p>
            </div>

            {/* Forth */}
            <div className="space-y-5">
              <h2 className="text-4xl">
                What can I expect from a user experience analysis?
              </h2>
              <p>
                Muscled analyzes your website using a variety of criteria while
                working on it. To look into our optimization process we check a
                couple of examples below. We know what user pays attention to
                first while entering your website and how different browser
                sizes could influence this. We identify the key sections of your
                website and optimize them for user convenience.
              </p>
              <div className="flex flex-row justify-center w-[543px] h-[200px]">
                <img src={section4.src} alt="1" />
              </div>

              <p>
                We also focus on high-traffic areas. In order to improve these
                factors, we come up with valuable suggestions and put them into
                practice.
              </p>

              <p>
                A thorough analysis identifies each unique issue that your
                customers face and also considers their overall experience. We
                manage any problem preventing a customer from moving
                effortlessly through your sales funnel.
              </p>

              <ul className="list-disc  pl-7">
                <li>When you choose Muscled to analyze your site, you can:</li>
                <li>Improve the navigation flow</li>
                <li>Slow download times</li>
                <li>Minimize loading time</li>
                <li>Speed up the realization of certain activities</li>
                <li>Maintain an easy-to-use interface</li>
                <li>Generate repeat visits</li>
                <li>Eliminate technical errors</li>
                <li>Decrease the cost of customer support</li>
                <li>Reduce maintenance costs</li>
                <li>Improve conversion rate</li>
                <li>Increase revenue</li>
              </ul>
            </div>

            {/* Fifth */}
            <div className="space-y-5">
              <h2 className="text-4xl">
                What makes Muscled an authority on UX?
              </h2>
              <p>
                What makes Muscled an authority on UX? We have in-depth
                knowledge of how consumers interact with online media, which
                supports our approaches to the target. Combining that with years
                of experience in promoting increased functionality and
                streamlined website use, you will have everything to boost your
                revenue.
              </p>
              <p>
                We ensure there are no obstacles in your conversion funnel. If
                your users are not able to figure out how to handle something
                they will leave your website immediately choosing your
                competitors. Losing money is bad enough, but losing money to
                your direct competitor is worse. Users prefer simplicity, fast
                loading and a fully functional website. With the first visit,
                users want to navigate your website quickly and easily find what
                they want. Your customers are telling you exactly what they
                want. All you need to do is to evaluate their voice!
              </p>
              <div className="flex  justify-center w-[543px] h-[400px]">
                <img src={section5.src} alt="1" />
              </div>
            </div>

            {/* Sixth */}
            <div className="space-y-5">
              <h2 className="text-4xl">
                Improve conversions rates with UX analysis services
              </h2>
              <p>
                Improve Conversions Rates With UX Analysis Services We know how
                challenging is to harmonize all the pieces of business
                marketing. In fact, that’s why we’re here. We optimize your
                website’s usability so you can rely on us and focus elsewhere.
              </p>
              <p>
                We streamlined and optimized our approach so that no
                opportunity, no matter how tiny it is, can be missed. When we're
                done, you can rest knowing that your website now offers users a
                top-notch browsing experience. Check out our testimonials or
                portfolio for a look at our hundreds of success stories!
              </p>
              <p>
                Want some more information? Are you ready to get started
                optimizing your website’s UX? Start with Muscled today!
              </p>
              <p>
                Remember, Muscled has you covered whether you require web design
                in Minneapolis or abroad.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <TableOfContent list={tableOfContent}></TableOfContent>
          <div className="pt-10">
            <h2 className="text-4xl">Learn more about UX</h2>
            <ul className="py-2">
              {links.map((l) => {
                return (
                  <li className="py-2 underline">
                    <a href={l.link}>{l.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="w-[633px] my-10 py-10">
        <div className="p-6 bg-black rounded-2xl">
          <h2 className="text-white font-bold py-3">
            For verified ratings of our marketing services, please read our:
          </h2>
          <img className="py-3" src={star.src} alt="" />
          <p className="text-[#207DE9] py-3">
            Industry-leading 1,020 testimonials
          </p>
        </div>
      </Section>
      {/* important links section */}
      <Section className="grid gap-8 lg:grid-cols-3 mb-44">
        {importantLinks.map((l) => (
          <ImportantLinkCard title={l.title} list={l.list} />
        ))}
      </Section>
    </>
  );
};
export default Page;
