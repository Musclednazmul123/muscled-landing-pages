import React from "react";
import { Section } from "../../Fawwaz/Sections";

const Services = () => {
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
      <div className="pb-36 pt-44">
        <h3 className="text-center text-4xl">
          Services for Social Media Advertising for Every Platform{" "}
        </h3>
      </div>

      <div className="bg-black py-10">
        <Section>
          <div className="flex flex-wrap justify-center gap-14">
            {advertisingServiceList.map((service, idx) => (
              <div
                key={idx}
                className="bg-white py-5 self-stretch w-[350px] max-h-[430px]"
              >
                <div className="mx-auto w-[80%] space-y-10">
                  <p className="text-xl w-[70%] font-medium">{service.title}</p>
                  <p className="w-[85%] text-lg">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Services;
