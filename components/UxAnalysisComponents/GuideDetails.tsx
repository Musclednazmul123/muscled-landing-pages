import React from "react";
import { Section } from "../Fawwaz/Sections";
import TableOfContent from "../TableOfContent/TableOfContent";

// images
import section1 from "../../components/assets/section1.png";
import section2 from "components/assets/Group 38816.png";
import section3 from "components/assets/card8.png";
import section4 from "components/assets/card10.png";
import section5 from "components/assets/card7.png";

const tableOfContent: string[] = [
  "Muscled and UX optimization",
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
export default function GuideDetails() {
  return (
    <Section className="flex justify-between pt-32 gap-x-10">
      <div className="flex-2 w-[760px]">
        <div className="flex flex-col space-y-10 text-xl leading-[30px]">
          {/* First */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-4xl">Muscled and UX optimization</h2>

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
              If you strive to have more lead submissions, and better conversion
              rates, i.e. more sales you are in the right place as well.
            </p>

            <p className="pb-3">
              Our Muscled talented team has years of experience in spotting
              usability issues that can be fixed. We take confidence in
              implementing our recommendations and value seeing your website
              succeed. A number of usability problems might make it difficult
              for your clients to find what they're looking for online, which
              can make them dissatisfied and cost you money.
            </p>
            <div className="flex flex-row justify-center w-[563px] h-[162px]">
              <img src={section1.src} alt="1" />
            </div>

            <p className="pt-4">
              Finding and removing poor design elements that bring navigation
              confusion or complicate the check-out process will increase the
              number of your customers, and sales. Our service will fix these
              issues and will stop you from losing money.
            </p>
          </div>

          {/* Second */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h2 className="text-[40px] leading-[60px]">
                Bad usability means fewer customers
              </h2>
              <p>
                Every element of user experience has an influence on your
                website’s conversion rate. With hard navigation, slow load, and
                other issues you will see a drop in your customers.
              </p>
            </div>
            <p>
              Your website is like a customer service representative of your
              business. Imagine if your service is polite, clear and helpful.
              And also imagine the representative that doesn’t give a straight
              answer and doesn’t find the issue? Which one do you prefer?
            </p>
            <p>
              One of the simplest and most efficient ways to improve your sales
              process
            </p>
            <div className="flex flex-row justify-center w-[643px] h-[265px]">
              <img src={section2.src} alt="1" />
            </div>
            <p>
              and the bottom line is to reduce client annoyance through better
              usability.
            </p>

            <ul className="list-disc  list-inside pl-3">
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
          <div className="flex flex-col space-y-8">
            <h2 className="text-[40px]">How do we approach UX?</h2>

            <p>
              It may be challenging to evaluate the usability of your own
              website because you and your staff are already familiar with the
              navigation and sales procedure. What’s familiar to you could be
              confusing to your new visitor.
            </p>

            <p>At Muscled, we know how to get into the mind of a customer.</p>

            <div className="flex px-4 items-center w-[563px] h-[162px]">
              <img src={section3.src} alt="1" />
            </div>

            <p>
              As we have already mentioned before, UX optimization has a
              two-step process: analysis and implementation. With this process,
              we go through the design elements of the site, detecting each
              possible issue that your customers may face. Design issues can,
              sometimes, be fixed up from the top down. Although, we are keen on
              identifying the source of a problem and solving it entirely.
            </p>
            <p>
              This is being done by asking questions: What browsers are visitors
              using? Can they easily find the information they want?{" "}
            </p>
            <p>
              Are they constantly using your site’s search bar because they
              can’t figure out how your site is structured?
            </p>
            <p>
              These are just a few of the questions and issues that our
              professional team of Internet marketers considers when they apply
              our process to your website.
            </p>
          </div>

          {/* Forth */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-5 pb-8">
              <h2 className="text-[40px] leading-[60px]">
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
            </div>
            <div className="flex flex-row justify-center w-[643px] h-[288px]">
              <img src={section4.src} alt="1" />
            </div>

            <p className="pt-8">
              We also focus on high-traffic areas. In order to improve these
              factors, we come up with valuable suggestions and put them into
              practice.
            </p>

            <p>
              A thorough analysis identifies each unique issue that your
              customers face and also considers their overall experience. We
              manage any problem preventing a customer from moving effortlessly
              through your sales funnel.
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
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-5">
              <h2 className="text-[40px] leading-[60px]">
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
            </div>
            <p>
              We ensure there are no obstacles in your conversion funnel. If
              your users are not able to figure out how to handle something they
              will leave your website immediately choosing your competitors.
              Losing money is bad enough, but losing money to your direct
              competitor is worse. Users prefer simplicity, fast loading and a
              fully functional website. With the first visit, users want to
              navigate your website quickly and easily find what they want. Your
              customers are telling you exactly what they want. All you need to
              do is to evaluate their voice!
            </p>
            <div className="flex  justify-center w-[562px] h-[430px]">
              <img src={section5.src} alt="1" />
            </div>
          </div>

          {/* Sixth */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-[40px] leading-[60px]">
              Improve conversions rates with UX analysis services
            </h2>
            <p>
              Improve Conversions Rates With UX Analysis Services We know how
              challenging is to harmonize all the pieces of business marketing.
              In fact, that’s why we’re here. We optimize your website’s
              usability so you can rely on us and focus elsewhere.
            </p>
            <p>
              We streamlined and optimized our approach so that no opportunity,
              no matter how tiny it is, can be missed. When we're done, you can
              rest knowing that your website now offers users a top-notch
              browsing experience. Check out our testimonials or portfolio for a
              look at our hundreds of success stories!
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
      <div className="flex-1 self-start sticky top-0">
        <TableOfContent list={tableOfContent}></TableOfContent>
        <div className="pt-10">
          <h2 className="text-4xl">Learn more about UX</h2>
          <ul className="py-2">
            {links.map((l, index) => {
              return (
                <li className="py-2 underline" key={index}>
                  <a href={l.link}>{l.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
