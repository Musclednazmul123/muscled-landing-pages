import { Section } from "../../Fawwaz/Sections";
import FlexLayout from "../layout/FlexLayout";

const ServiceCards = () => {
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
  );
};

export default ServiceCards;
