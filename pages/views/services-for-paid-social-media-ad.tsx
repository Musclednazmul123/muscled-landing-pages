import React from "react";
import { NextPage } from "next";
import { Hero, Section } from "components/Fawwaz/Sections";
import { Input } from "components/Fawwaz/Form";
import SocialMediaAdSVG from "components/assets/svg/SocialMediaAdSVG";
import Logo from "components/Fawwaz/Logo";
import logo from "components/assets/logo/logo1.png";
import Card from "components/Card";
import FlexLayout from "components/layout/FlexLayout";
import abstImg from "components/assets/abstract.png";
import Button from "components/Button";
import Table from "components/Table";
import CollapsingTableOfContent from "components/CollapsingTableOfContent";
import TLifeCommunity from "components/assets/svg/techLifeCommunity";
import Star from "components/assets/svg/Star";
import ChevronDown from "components/assets/svg/ChevronDown";
import CheckMark from "components/assets/svg/checkMark";

const Page: NextPage = () => {
  const list1 = [
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

  const servicesCardData = [
    {
      title: "Social Media Services",
      services: [
        "Social Media Design",
        "Social Media Management",
        "Social Media Pricing",
        "Facebook Advertising Services",
        "Instagram Advertising Services",
      ],
    },
    {
      title: "SEO Services",
      services: ["SEO Services", "Enterprise SEO Pricing", "Local SEO Pricing"],
    },
    {
      title: "Other WebFX Services",
      services: [
        "Enterprise Marketing Agency",
        "Account-Based Marketing",
        "Web Design",
        "Web Video Production",
        "Voice Search Optimization",
      ],
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
            list={list1}
            className="text-red-400 w-full max-w-[400px]"
            starIcon={1}
            type="pricing"
            headerBgColor="bg-[#C40000]/[3%]"
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
            headerBgColor="bg-[#C40000]/[6%]"
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
            headerBgColor="bg-[#C40000]/[9%]"
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

      {/* open advertisment pricing section */}
      <div className="py-10">
        <Section>
          <h2 className="text-4xl">
            Top-Rated Paid Social Advertising Services
          </h2>

          <p className="pt-10">
            We are a social media advertising agency that believes in
            transparency, so that's why we post our social media advertising
            pricing. Our affordable social media advertising services allow us
            to meet the needs of a variety of businesses based on specific
            priorities. Our social media advertising services can incorporate
            anyone with a varying social ad spend budget, from a small business
            owner to a large corporation.
          </p>
        </Section>
      </div>

      {/* standard consultation and reporting plans */}
      <div className="py-10">
        <Section>
          <h2 className="text-4xl mb-20">
            Social Media Advertising: Standard Consultation and Reporting Plans
          </h2>

          <Table
            headers={[
              "Features",
              "1 Social Network",
              "2 Social Networks",
              "3 Social Networks",
              "4 Social Networks",
              "5 Social Networks",
            ]}
            rows={[
              [
                "Number of Unique Ads",
                "up to 4",
                "up to 6",
                "up to 8",
                "up to 9",
                "up to 10",
              ],
              [
                "Number of Advertising Campaigns/Target Audiences",
                "up to 4",
                "up to 6",
                "up to 8",
                "up to 9",
                "up to 10",
              ],
              [
                "Number of Unique Custom Advertising Images",
                "0",
                "1",
                "2",
                "3",
                "4",
              ],
              [
                "Social Media Remarketing Campaign & Ad",
                "0",
                "1",
                "1",
                "1",
                "1",
              ],
              [
                "Monthly Advertising Targeting & Copy Tweaks",
                "up to 4",
                "up to 6",
                "up to 7",
                "up to 8",
                "up to 9",
              ],
              ["Demographic Targeting", "0", "2", "2", "2", "2"],
              [
                "Keywords, Interest, User Intent Targeting",
                "0",
                "1",
                "1",
                "1",
                "1",
              ],
              [
                "School/Profession/Workplace Targeting",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Company Size, Industry, Job Title, etc. Targeting",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Custom Image Compression & Delivery of Source Files",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Mobile Device Optimized Ads",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Installation of Network Tracking Pixels on Website",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Dedicated Social Media Advertising Account Manager",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Monitoring of Social Ad Comments",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "48 Business Hour Response Time",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Up to 1 personal Social Media Consultations per Month",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Standard WebFX Monthly Reporting & Analysis",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Access to MarketingCloudFX",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Ad Account Setup & Optimization",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "450+ SMEs behind campaign driving results",
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
                <CheckMark />,
              ],
              [
                "Weekly Call or Campaign Status Update (optional)",
                "$450/month",
                "$450/month",
                "$450/month",
                "$450/month",
                "$450/month",
              ],
              [
                "Initial Campaign Investment – Month 1",
                "$950",
                "$1,350",
                "$1,650",
                "$1,850",
                "$2,350",
              ],
              [
                "Ongoing Monthly Campaign Investment (Standard Advertising Consultation and Reporting)",
                "$550 or 15% of ad spend, whichever is greater",
                "$750 or 15% of ad spend, whichever is greater",
                "$950 or 15% of ad spend, whichever is greater",
                "$1,150 or 15% of ad spend, whichever is greater",
                "$1,150 or 15% of ad spend, whichever is greater",
              ],
              [
                "Required Ad Spend Range (Standard Advertising Consultation and Reporting)",
                "$1,000 – $10,000",
                "$2,000 – $10,000",
                "$3,000 – $10,000",
                "$4,000 – $10,000",
                "$5,000 – $10,000",
              ],
            ]}
          />
        </Section>
      </div>

      {/* socila media and management solution section */}
      <div className="py-10">
        <Section>
          <FlexLayout>
            <div className="w-[70%] self-start">
              <div>
                <h2 className="text-4xl w-[80%]">
                  A complete social media ad management solution
                </h2>

                <div className="w-[95%] pt-10">
                  <p>
                    Your company doesn't have to worry about managing social
                    media advertising campaigns on LinkedIn or Facebook when you
                    are using Muscled. When it comes to social media ad
                    management, our experienced team of social media specialists
                    and graphic designers manage everything.
                  </p>

                  <p>
                    Your company will receive the following services as part of
                    our social media ad management services:
                  </p>
                </div>

                <ul className="list-decimal ml-4 mt-8">
                  <li>
                    Dedicated Account manager for social media advertising
                  </li>
                  <li>
                    A dedicated team that will respond quickly (within 48
                    business hours).
                  </li>
                  <li>
                    Effectively build ad accounts on social media platforms.
                  </li>
                  <li>
                    Ad strategy customized to each of your preferred platforms
                  </li>
                  <li>
                    Ad campaigns and advertisements that are unique, including
                    remarketing
                  </li>
                  <li>
                    Targeting advanced demographics, such as interest and user
                    intent
                  </li>
                  <li>
                    Consultation with your dedicated account manager on a
                    monthly or weekly basis.
                  </li>
                  <li>
                    Campaign reporting and analysis should be done on a monthly
                    or weekly basis.
                  </li>
                </ul>

                <p className="mt-7 w-[95%]">
                  If your company has never advertised on social media before,
                  our social media advertising services include the installation
                  of network tracking pixels on your website, such as the
                  Facebook Pixel. As a result, your ad campaign will be able to
                  use remarketing to convert stray clients.
                </p>
              </div>

              <div className="w-[90%] bg-[#C40000]/[6%] mt-8 py-10 px-10">
                <FlexLayout spaceClass="space-x-0">
                  <div className="w-[75%] space-y-7">
                    <h2 className="text-4xl w-[90%]">
                      74% of people use social media when making a purchasing
                      decision.
                    </h2>

                    <p className="w-[70%]">
                      Make their decision easy with a stellar social media
                      presence. See how your brand can level up by requesting a
                      no-obligation proposal today.
                    </p>

                    <div className="flex flex-wrap gap-2 w-[80%]">
                      <Input
                        type="text"
                        placeholder="Enter Your Website Link"
                        className="text-sm flex-1 md:text-lg w-[50%]"
                      />
                      <Button customColor="bg-black" text="Send Proposal" />
                    </div>
                  </div>

                  <div className="w-[25%] self-start">
                    <TLifeCommunity />
                  </div>
                </FlexLayout>
              </div>

              <div>
                <h2 className="text-4xl w-[80%] mt-14">
                  Who is using social media advertising services?
                </h2>

                <div className="w-[95%]">
                  <p className="pt-10">
                    Social media advertising services can benefit your business
                    whether you sell business-to-consumer, business-to-business,
                    or e-commerce. Social media accounts for 30% of total online
                    time.
                  </p>

                  <p className="pt-7">
                    It is a smart decision to target people directly where they
                    enjoy spending their time.
                  </p>

                  <p className="pt-7">
                    <span className="font-bold">Muscled</span> will combine a
                    variety of social media advertising services to create a
                    campaign customized to your business model.
                  </p>

                  <p className="pt-7">
                    Social media advertising services are ﬂexible, whether your
                    goals are to drive conversions, raise brand awareness, or
                    increase engagement with your audience. We can determine the
                    best approach for your company.
                  </p>

                  <p className="pt-7">
                    The strategy will include relevant content that is
                    up-to-date- to - date with trends in the market and will
                    always take into account the unique aspects of your business
                    that set you apart from competing companies.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl w-[80%] mt-14">
                  Which platform should I use to manage social media ads?
                </h2>

                <div className="w-[95%]">
                  <p className="pt-10">
                    While there are numerous paid social media advertising
                    platforms available on the Internet, it is crucial to select
                    one that will allow you to reach a relevant audience.
                  </p>

                  <p className="pt-7">
                    When it comes to your campaign, you should think about some
                    of the game's biggest players. Among these networks are:
                  </p>

                  <ul className="list-disc px-6 pt-10">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                    <li>Snapchat</li>
                  </ul>

                  <p className="pt-7">
                    Our strategists and social media specialists can assist your
                    company in selecting the best platforms for social media ad
                    management services. Assisting your company in focusing on
                    the most useful networks for your business can result in a
                    higher return and better results.
                  </p>

                  <p className="pt-7">
                    Learn more about the different platforms and their benefits
                    below:
                  </p>

                  <h5 className="pt-7">Social Advertising Platforms</h5>

                  <ul className="list-disc px-6 pt-6">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                    <li>Snapchat</li>
                  </ul>

                  <h5 className="pt-7">Facebook advertising</h5>

                  <p className="pt-7">
                    Facebook is nowadays and most likely will continue to be the
                    largest social media advertising platform. As of June 2018,
                    Facebook has 1.47 billion daily active users.
                  </p>

                  <p className="pt-7">
                    Facebook is widely recognized as the market leader in terms
                    of social media advertising trends. Facebook advertising is
                    suitable for almost every business and is an excellent place
                    to begin with social advertising. Facebook provides social
                    media advertising companies and businesses with the ability
                    to reach audiences based on campaign objectives. Campaigns
                    to increase awareness, engagement, traffic, conversions, and
                    store visits are just a few examples.
                  </p>

                  <p className="pt-7">
                    Currently, users of Facebook are allowed to post ads using
                    photos, videos, carousel, slideshow and Facebook Instant
                    Experiences:
                  </p>

                  <ul className="list-decimal px-4 pt-7">
                    <li>
                      Carousel is a feature that allows users to show up to ten
                      images, videos, and links within a single advertisement.
                      This enables advertisers to direct visitors to multiple
                      pages on their website using a single creative.
                    </li>
                    <li>
                      The Slideshow feature allows users to create video
                      advertisements out of still images.
                    </li>
                    <li>
                      Instant Experience is a tool that allows advertisers to
                      create immersive advertisements by combining photos,
                      videos, text, carousels, product feeds, and other elements
                      on a single streamlined page. This page is contained
                      within the Facebook app, providing the user with a quick
                      and seamless experience. Each of these tools provides
                      advantages based on the goal of the advertising campaign
                      and the content available to the advertiser.
                    </li>
                  </ul>

                  <p className="pt-7">
                    Facebook, in addition to a variety of ad formats, provides
                    targeting options that enable advertisers to target specific
                    demographics, interests, and behaviors. Facebook can also
                    target users based on their shopping habits, travel plans,
                    and much more!
                  </p>
                </div>
              </div>

              <div>
                <h5 className="pt-12">Instagram advertising </h5>

                <div className="w-[95%]">
                  <p className="pt-7">
                    Because Instagram is owned by Facebook, their advertising
                    systems are comparable. Instagram started to offer
                    advertising in 2015, and it has increased rapidly since
                    then. In fact, the number of Instagram ads increased by 28%
                    between July and December of 2017.
                  </p>

                  <p className="pt-7">
                    Visual elements are one of the most important parts of an
                    Instagram advertising campaign. Even if you have the best
                    product in the world and the best customer service, your
                    Instagram campaign will struggle if you have poor visuals.
                  </p>

                  <p className="pt-7">
                    Instagram ads can follow the same format as Facebook ads,
                    including photos, videos, carousel, slideshow, and Instant
                    Experiences. Instagram users can also structure campaigns
                    based on campaign goals such as website clicks, conversions,
                    app installs, engagements, video views, and awareness.
                    Instagram advertisers can target their ads in the same way
                    that Facebook advertisers can.
                  </p>

                  <p className="pt-7">
                    They even have their own analytics platform for Instagram.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="pt-12">Twitter advertising </h5>

                <div className="w-[95%]">
                  <p className="pt-7">
                    Twitter has over 330 million monthly active users who tweet
                    and scroll through their feeds. Twitter provides a variety
                    of paid advertising options to reach these users. Twitter
                    advertisers can choose the goal they want to achieve for
                    their business, such as increasing visibility, engagement,
                    awareness, video views, followers, app installs, or app
                    re-engagements.
                  </p>

                  <p className="pt-7">
                    Twitter, like Facebook, allows you to target paid
                    advertisements based on location, gender, language, device,
                    platform, and carrier.
                  </p>

                  <p className="pt-7">
                    Twitter differs from most other social platforms in two
                    ways. Twitter includes keyword targeting to reach people
                    based on their Pinterest searches. Twitter also allows you
                    to target users who are similar to those who follow specific
                    accounts.
                  </p>

                  <p className="pt-7">
                    For example, if you want to target users who follow your
                    competitors, you could include their Twitter accounts in the
                    target audience. It's important to understand that you're
                    not specifically targeting the followers of these accounts.
                    You are aiming for users who are similar to those followers.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="pt-12">Pinterest advertising</h5>

                <div className="w-[95%]">
                  <p className="pt-7">
                    As of September 2017, Pinterest had over 200 million monthly
                    active users. Pinterest advertising provides campaigns based
                    on advertising goals.
                  </p>

                  <p className="pt-7">
                    Pinterest advertising goals include brand awareness,
                    engagement, traffic, app downloads, and video exposure.
                    Besides that, Pinterest provides several options for shaping
                    audience targeting.
                  </p>

                  <p className="pt-7">
                    Advertisers can target audiences using keywords and
                    interests. When targeting by interests, Pins will appear in
                    users' home and category feeds based on a user's previous
                    interests as well as the category's topic. Advertisers can
                    choose from a number of interest categories, each with its
                    own set of segments. Advertisers can use keywords to target
                    phrases and words that are similar to what a user is looking
                    for. This targeting places Pins in the search results of
                    users. To reach people in both places, it is best practice
                    to include both keywords and interests in a campaign.
                  </p>

                  <p className="pt-7">
                    Pinterest also offers specialized engagement or email list
                    targeting, as well as demographic data. Demographic data,
                    such as location targeting, is more limited on this platform
                    than on others.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="pt-12">YouTube advertising</h5>

                <div className="w-[95%]">
                  <p className="pt-7">
                    With over 1.3 billion users, YouTube has developed into more
                    than just a video-watching platform; it is now the world's
                    second most visited search engine, next to Google.
                  </p>

                  <p className="pt-7">
                    For businesses with short video advertisements ranging from
                    6 to 15 seconds to be used in TruView in-stream ads, social
                    media advertising companies recommend YouTube advertising.
                    These advertisements appear before the intended video is
                    viewed. A social media advertising company may also
                    recommend YouTube advertising for businesses that have
                    longer video advertisements called TruView discover ads that
                    appear in search results.
                  </p>

                  <p className="pt-7">
                    If a company has either of these assets, it can use them in
                    YouTube ads to target people based on demographics,
                    interests, and keywords.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="pt-12">Snapchat advertising</h5>

                <div className="w-[95%]">
                  <p className="pt-7">
                    Snapchat has 187 million daily active users, with 71% being
                    under the age of 34. Snapchat is a perfect way to spend your
                    social media budget if your target audience is under the age
                    of 34.
                  </p>

                  <p className="pt-7">
                    Snapchat allows you to create ads in three ways: Snap Ads,
                    Filters, and Lenses. When a user scrolls through their
                    friends' Stories, Snap ads appear. Filters are sponsored
                    graphics that users can discover while swiping through
                    options to choose an overlay for their own photo or video.
                    These are frequently used for events that take place in a
                    specific location. Lenses, like photos and videos, can be
                    used to affect or alter the user's image and video.
                  </p>
                </div>
              </div>

              <div className="w-[90%] bg-[#C40000]/[6%] mt-8 py-10 px-10">
                <FlexLayout spaceClass="space-x-0">
                  <div className="w-[75%] space-y-7 self-start">
                    <p className="text-lg font-medium">
                      New to social media marketing? We’ve got just the thing.
                      Check out our FREE guide to social media marketing.
                    </p>

                    <div className="w-[40%]">
                      <Button text="show me the guide" />
                    </div>
                  </div>

                  <div className="w-[25%] self-start">
                    <TLifeCommunity />
                  </div>
                </FlexLayout>
              </div>

              <div>
                <h2 className="text-4xl w-[80%] mt-12">
                  Should I hire a social media marketing agency?
                </h2>

                <div className="w-[95%] pt-10">
                  <p>
                    Hiring someone to do your campaign in-house can be one of
                    the most expensive aspects of social media advertising
                    services for your business.
                  </p>

                  <p className="pt-7">
                    This means you'll need to hire another person and pay them
                    for their social media advertising services. Successful
                    social media advertising necessarily requires the creation
                    of copy, graphics, and videos, as well as the optimization
                    of campaigns and content, monitoring, and reporting.
                  </p>

                  <p className="pt-10">
                    Because social media is constantly changing, those in the
                    field must keep up with the latest tools, trends, and
                    advertising policy updates. Companies that specialize in
                    social media advertising are committed to staying on top of
                    social trends and policies that lead to successful
                    campaigns.
                  </p>

                  <p className="pt-7">
                    When deciding whether to make someone on your current team
                    your social media advertising expert, consider your budget,
                    whether you have the resources to teach them the tricks of
                    the trade, and how quickly you want results.
                  </p>

                  <p className="pt-7">
                    Hiring an agency is your best option if you need someone to
                    jump in right away to help your business create a fantastic
                    social media advertising campaign.
                  </p>

                  <p className="pt-7">
                    They know what they're doing and will definitely get you the
                    results you want with their expertise and knowledge. It also
                    saves you from having to add someone to your team.
                  </p>

                  <p className="pt-7">
                    It is important that a social media advertising company
                    provides several pricing package options that can be
                    designed for your specific requirements. We have a variety
                    of options, proven results, and social media advertising
                    experts who can determine the best strategy for your budget
                    here at Muscled.
                  </p>

                  <p className="pt-7">
                    When comes to choosing a social media advertising agency,
                    find out if they will provide detailed reporting and
                    communication on campaign results. Muscled will provide
                    extensive social media advertising reporting and performance
                    updates to help you evaluate the success of your social
                    media advertising campaign.
                  </p>

                  <p className="pt-7">
                    Depending on your social media advertising needs, Muscled
                    provides monthly and weekly reporting options. When you use
                    our social media ad management services, you'll always know
                    what's going on with your campaigns.
                  </p>

                  <p className="pt-7">
                    A social media advertising company should be able to tell
                    you performance measures such as how many people saw your
                    campaign, what actions they took after seeing the
                    advertisement, and how they will use targeting to make sure
                    that the people who will act are the ones who will see the
                    campaign!
                  </p>
                </div>
              </div>

              <div className="w-[90%] bg-[#C40000]/[6%] mt-14 py-10 px-10">
                <FlexLayout spaceClass="space-x-0">
                  <div className="w-[75%] space-y-7 self-start">
                    <h3 className="text-xl w-[80%]">
                      Clients can’t get enough of our social media services.
                    </h3>

                    <p>
                      "I would highly recommend Muscled for social media
                      management." Muscled's team is very proficient; their
                      article writing is outstanding, and their social team
                      produces excellent results."
                    </p>

                    <h5>Associate in Category Development</h5>

                    <p>Company Name</p>

                    <div className="w-[40%]">
                      <Button text="see case study" />
                    </div>
                  </div>

                  <div className="w-[25%] self-start">
                    <TLifeCommunity />
                  </div>
                </FlexLayout>
              </div>

              <div>
                <h2 className="text-4xl w-[80%] mt-12">
                  3 good tips for choosing the best paid social ad agency
                </h2>

                <div className="w-[95%] pt-10">
                  <p>
                    With so many agencies available, it can be difficult to
                    select the best one for your company. But don't worry — it
                    doesn't have to be challenging!
                  </p>

                  <p className="pt-7">
                    Follow our three suggestions to simplify your search for an
                    agency and social media ad management services.
                  </p>

                  <h5 className="pt-7">
                    1. Make sure that they provide the services you require.
                  </h5>

                  <p className="pt-7">
                    If you're a small business looking to make an impact with
                    social media advertising services, it's critical to find an
                    agency that offers the services you need. For instance, if
                    you want someone to manage your social media campaigns, make
                    sure the agencies you're considering provide that service.
                  </p>

                  <h5 className="pt-7">
                    2. Search for a pricing table outlining their social media
                    advertising services.
                  </h5>

                  <p className="pt-7">
                    The world's best social media advertising agencies will
                    publish their rates. And that's because they don't want to
                    waste their time or the time of any potential clients.
                  </p>

                  <p className="pt-7">
                    When an agency fails to provide transparent pricing, it
                    could indicate that they have hidden costs associated with
                    their social media ad management services or that they lack
                    a concrete pricing system.
                  </p>

                  <p className="pt-7">
                    When an agency, on the other hand, provides transparent
                    pricing, it indicates that they are genuinely interested in
                    finding serious potential clients. It also means that they
                    want you to know your budget and how much you can expect to
                    pay for their social media advertising services right away.
                  </p>

                  <h5 className="pt-7">3. Make an extensive research</h5>

                  <p className="pt-7">
                    You should never hire the first social media agency you come
                    across.
                  </p>

                  <p className="pt-7">
                    Researching a variety of options not only allows you to
                    choose, but it also allows you to develop a realistic
                    budget, learn about services you may not have been informed
                    of, and get to know a variety of different agencies.
                  </p>

                  <p className="pt-7">
                    Before signing on the dotted line, you should also get to
                    know the company. Conduct research on the results they've
                    achieved for clients, their agency history, and other
                    important factors, such as the scope of their social media
                    ad management services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl w-[80%] mt-12">
                  FAQs about Social Media Advertising Services
                </h2>

                <div className="w-[95%] pt-10">
                  <p>
                    Are you interested in learning more about social media
                    advertising services? View our Frequently Asked Questions:
                  </p>

                  <h5 className="pt-7">
                    What exactly are social media advertising services?
                  </h5>

                  <p className="pt-7">
                    Social media advertising services promote your brand on
                    social media networks such as Facebook, Instagram, and
                    Twitter in order to increase brand awareness, engagement,
                    followers, and even leads and sales.
                  </p>

                  <h5 className="pt-7">
                    How much does social media advertising cost?
                  </h5>

                  <p className="pt-7">
                    The cost of social media advertising services is determined
                    by a number of factors, including the social media platform,
                    the social media agency, and the ad spend. Typically,
                    businesses will spend $200 to $50,000 per month on
                    advertising and then invest $450 to $6000 per month in
                    social media advertising services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl w-[80%] mt-12">
                  Make contact with a leading provider of social media
                  advertising services!
                </h2>

                <div className="w-[95%] pt-10">
                  <p>
                    Look no further than Muscled if you're looking for the best
                    social media advertising agency that is near you!
                  </p>

                  <p className="pt-7">
                    Muscled's social media specialists can assist a company in
                    determining where its social media advertising investment
                    are best spent. Muscled's social media experts are
                    completely ready to use our social media advertising
                    services to assist you in reaching your targets.
                  </p>

                  <p className="pt-7">
                    For our clients, our team has generated over $3 billion in
                    sales and 7.8 million leads. If you'd like to learn more
                    about the advantages of our social media ad management
                    services, please contact us.
                  </p>
                </div>
              </div>

              <div className="bg-[#086680] mt-10 py-5 px-7 w-[55%]">
                <h3 className="text-2xl text-white">
                  For verified ratings of our marketing services,please read
                  our:
                </h3>

                <div className="pt-4 pb-2">
                  <FlexLayout spaceClass="space-x-0">
                    <Star className="fill-[#F8CC25] w-[5%]" opacity={1} />
                    <Star className="fill-[#F8CC25] w-[5%]" opacity={1} />
                    <Star className="fill-[#F8CC25] w-[5%]" opacity={1} />
                    <Star className="fill-[#F8CC25] w-[5%]" opacity={1} />
                    <Star className="fill-[#F8CC25] w-[5%]" opacity={1} />
                  </FlexLayout>
                </div>

                <FlexLayout spaceClass="space-x-7">
                  <p className="text-[#D2D2D2] text-sm">
                    INDUSTRY-LEADING 863 TESTIMONIALS
                  </p>
                  <div className="rotate-[270deg]">
                    <ChevronDown fill="fill-[#D2D2D2]" />
                  </div>
                </FlexLayout>

                <p className="text-[#D2D2D2] mt-2 text-[0.7rem]">
                  MUSCLED Agency Rating 4.9 out of 5 with 267 ratings
                </p>
              </div>
            </div>

            <div className="w-[30%] self-start">
              <CollapsingTableOfContent
                links={[
                  {
                    title: "A complete social media ad management solution",
                    url: "#",
                  },
                  {
                    title: "Who is using social media advertising services?",
                    url: "#",
                  },
                  {
                    title:
                      "Which platform should I use to manage social media ads?",
                    url: "#",
                  },
                  {
                    title: "Should I hire a social media marketing agency?",
                    url: "#",
                  },
                  {
                    title:
                      "3 good tips for choosing the best paid social ad agency",
                    url: "#",
                  },
                  {
                    title: "FAQs about Social Media Advertising Services",
                    url: "#",
                  },
                  {
                    title:
                      "Make contact with a leading provider of social media advertising services!",
                    url: "#",
                  },
                ]}
              />
            </div>
          </FlexLayout>
        </Section>
      </div>

      {/* services card section */}
      <div className="pb-16 pt-20">
        <Section>
          <div className="mx-auto w-max">
            <FlexLayout spaceClass="space-x-20">
              {servicesCardData.map((serviceData, idx) => (
                <div
                  key={idx}
                  className="self-stretch pt-7 px-7 pb-10 bg-[#C40000]/[3%] text-black/70 space-y-7 w-[300px]"
                >
                  <p className="font-medium text-xl">{serviceData.title}</p>
                  {serviceData.services.map((service, idx2) => (
                    <p className="text-sm underline" key={`${idx}_${idx2}`}>
                      {service}
                    </p>
                  ))}
                </div>
              ))}
            </FlexLayout>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Page;
