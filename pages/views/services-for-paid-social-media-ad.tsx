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
  const list = [
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
            list={list}
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
      <div className="pt-20 pb-40 bg-[#C40000]/10">
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
                style={{ background: `url(${abstImg.src}) /cover` }}
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
                <p>
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
    </div>
  );
};

export default Page;
