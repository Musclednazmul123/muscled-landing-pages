import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import SocialMediaAdSVG from "components/assets/svg/SocialMediaAdSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "components/assets/logo/logo1.png";
import Card from "components/Card";
import FlexLayout from "components/layout/FlexLayout";
import abstImg from "components/assets/abstract.png";
import Button from "components/Button";
import VideoFrame from "components/Fawwaz/VideoFrame";

const Page: NextPage = () => {
  const cardList = [
    { icon: true, text: "15 hours quarterly" },
    { icon: true, text: "$1,800 monthly investment" },
    { icon: true, text: "Best for websites under 250 pages" },
  ];
  const list2 = [
    { icon: true, text: "25 hours quarterly" },
    { icon: true, text: "$3,600 monthly investment" },
    { icon: true, text: "Best for websites under 250 pages" },
  ];
  const list3 = [
    { icon: true, text: "35 hours quarterly" },
    { icon: true, text: "$4,800 monthly investment" },
    { icon: true, text: "Best for websites under 250 pages" },
  ];

  const advertisingServiceList = [
    {
      title: "Services for Facebook Advertising",
      content:
        "Reach a global audience of over one billion people by using media advertising management services for Facebook, the world's largest social media network.",
    },
    {
      title: "Services for Instagram Advertising",
      content:
        "Increase brand awareness and engagement with a competitive Instagram ad campaign that encourages users to interact with your brand and purchase your products.",
    },
    {
      title: "Services for Twitter advertising ",
      content:
        "With Twitter's social media advertising services, you can connect easily with current and potential customers. Become the company that customers follow and trust.",
    },
    {
      title: "Services for LinkedIn Advertising",
      content:
        "Start advertising on the best lead generation social media platform. With compelling and personalized ads for your audience, you can target and capture valuable leads.",
    },
    {
      title: "Services for YouTube Advertising ",
      content:
        "With social media ad management services for YouTube, you can access more than one-third of the Internet. Start creating text and video ads that generate engagement and sales.",
    },
    {
      title: "Services for Pinterest Advertising",
      content:
        "Engage with a specific and highly targeted audience through a managed Pinterest social media campaign that generates visibility, sales, and more for your company.",
    },
    {
      title: "Advertising on Social Media for Ecommerce",
      content:
        "With social media ads, you can increase traffic to your e-commerce store and start selling more online!",
    },
    {
      title: "Advertising on Social Media for Businesses",
      content:
        "Increase enterprise sales with social ads (for ad budgets higher than $10,000 per month)!",
    },
    {
      title: "D2C Social Media Marketing",
      content:
        "Attract, connect, and sell with social media ads customized to your direct-to-consumer business!",
    },
  ];

  return (
    <div>
      {/* First Section */}
      <div className=" bg-black-70 px-3 lg:px-0">
        <Hero
          title="Services for Paid Social Media Advertising That Deliver Results"
          description=" Muscled is a leading social media marketing company that specializes in driving significant business development through social media services. Whether you want to improve your brand's presence on social media or generate targeted leads through social media advertising, our social media advertising services can help."
          heroSVG={<SocialMediaAdSVG className="w-80 lg:w-full" />}
          input
        />
      </div>
      {/* Our partner section */}
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
          Explore Social Media Advertising Service Packages
        </h2>
        <div className="flex py-2 space-x-5">
          <Card
            subtitle="1 SOCIAL NETWORK"
            height={780}
            duration="month"
            highlight="Standard consultation & reporting plan"
            description="$950 INITIAL INVESTMENT"
            title="15% of ad spend"
            list={cardList}
            className="text-red-400 w-full max-w-[400px]"
            starIcon={1}
            type="pricing"
          />
          <Card
            subtitle="2 SOCIAL NETWORKS"
            height={780}
            duration="month"
            highlight="Standard consultation & reporting plan"
            description="$1,350 INITIAL INVESTMENT"
            title="15% of ad spend"
            list={list2}
            className="text-red-400 w-full max-w-[400px]"
            starIcon={2}
            type="pricing"
          />
          <Card
            subtitle="3 SOCIAL NETWORKS"
            height={780}
            duration="month"
            highlight="Standard consultation & reporting plan"
            description="$1,650 INITIAL INVESTMENT"
            title="15% of ad spend"
            list={list3}
            className="text-red-400 w-full max-w-[400px]"
            starIcon={3}
            type="pricing"
          />
        </div>
      </Section>

      {/* social advertising section */}
      <div className="mt-6 pt-20 pb-40 bg-[#C40000]/10">
        <Section>
          <FlexLayout align="align-start">
            <div className="w-[75%]">
              <h2 className="text-4xl text-[#000000CC]/80">
                Top-Rated Paid Social Advertising Services
              </h2>

              <p className="pt-10 text-[#000000]/70">
                Social media advertising services have become an essential
                component of social strategy for businesses of all sizes. With
                social advertising, businesses can expand strategies to reach
                the right people at the right time as algorithms change.
              </p>

              <p className="pt-10 text-[#000000]/70">
                Every social advertising platform has its own way of reaching
                out to people, and each has its own set of advantages. As a
                result, almost any business can benefit from using social
                advertising to engage, notify, and transform their target
                audience.
              </p>

              <p className="pt-10 text-[#000000]/70">
                Contact us online today to learn more about how our agency and
                social media ad management services can help you grow your
                online presence, increase sales, and improve customer loyalty.
                You can also contact us to talk one-on-one.
              </p>

              <p className="pt-10 text-[#000000]/70">
                If you'd like to speak with a strategist about the advantages of
                social media ad management, please contact us online today!
              </p>
            </div>

            <div className="w-[25%]">
              <div
                className="w-full text-white p-4 rounded-md"
                style={{ background: `url(${abstImg.src})` }}
              >
                <div className="w-[80%] space-y-8">
                  <h5>
                    Looking for custom plans and pricing? Request a proposal to
                    receive yours.
                  </h5>

                  <Button text="Request a Proposal" />
                </div>
              </div>
            </div>
          </FlexLayout>
        </Section>
      </div>

      {/* testimonial section */}
      <div className="bg-black text-white pt-14 pb-20">
        <Section>
          <FlexLayout>
            <div className="w-[50%]">
              <div className="space-y-5 mb-14">
                <p className="w-[80%]">
                  "I would highly recommend Muscled for social media
                  management." Muscled's team is very proficient; their article
                  writing is outstanding, and their social team produces
                  excellent results."
                </p>

                <h5>Associate in Category Development</h5>

                <h5>Company Name</h5>
              </div>

              <div className="w-[47%]">
                <Button
                  customColor="bg-[#C40000]"
                  text="See Our Clients’ Testimonials"
                />
              </div>
            </div>

            <div className="w-[40%]">
              <iframe
                className="w-full h-[300px]"
                src={"https://www.youtube.com/embed/D0UnqGm_miA"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </FlexLayout>
        </Section>
      </div>

      {/* advertisment services section */}
      <div>
        <div className="py-28">
          <h3 className="text-center text-4xl">
            Services for Social Media Advertising for Every Platform{" "}
          </h3>
        </div>

        <div className="bg-black py-10">
          <Section>
            <div className="grid grid-cols-3 justify-center gap-12">
              {advertisingServiceList.map((service, idx) => (
                <div key={idx} className="bg-white py-5 self-stretch w-[80%]">
                  <div className="mx-auto w-[80%] space-y-10">
                    <h4 className="text-xl w-[90%]">{service.title}</h4>
                    <p>{service.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* benefits section */}
      <div className="py-20">
        <Section>
          <h2 className="text-4xl">
            Top-Rated Paid Social Advertising Services
          </h2>

          <p className="pt-10">
            Our social media ad management services go much further than simple
            campaign management. We take it a step further. Our team assists
            yours in achieving its goals, from increasing likes to increasing
            sales, while also optimizing your ad spend for the best return on
            investment (ROI).
          </p>

          <p className="pt-10">
            Your company can benefit from the following seven advantages by
            using our social media advertising services:
          </p>

          <ul className="pt-10 list-decimal ml-4">
            <li>Reach the people who are most important to your company.</li>
            <li>Retarget site visitors, email subscribers, and others.</li>
            <li>
              For data-driven targeting and messaging, use artificial
              intelligence and machine learning.
            </li>
            <li>
              Create cost-effective, results-driven campaigns that meet your
              advertising objectives.
            </li>
            <li>
              Optimize your advertising spend to maximize your ROI and results.
            </li>
            <li>
              Increase brand awareness among your target market's most valuable
              users.
            </li>
            <li>
              Increase customer loyalty for repeat sales, word-of-mouth
              referrals, and more.
            </li>
          </ul>

          <p className="pt-10">
            Empower your company with social media ad services designed for
            efficiency and success.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default Page;
