import React from 'react';
import MoneyIcon from './assets/MoneyIcon.png';
import RecentIcon from './assets/RecentIcon.png';
import StarIcon from './assets/StarIcon.png';
import LikeIcon from './assets/LikeIcon.png';
import ExportIcon from './assets/ExportIcon.png';
import Image from 'next/image';

const data = [
  {
    id: 1,
    icon: ExportIcon,
    title: 'Generates More Leads For You',
    description: `Websites from RainmakerFX are made to boost the number of leads for your company.`,

    description2: `You may decide on your sitemap architecture, user experience, and conversion planning objectives by working with a project manager. To help you reach and convert more customers, RainmakerFX websites also come with 20 pages of content and 3 unique lead forms.`,
  },
  {
    id: 2,
    icon: MoneyIcon,

    title: 'Increases Sales',
    description: `You need a fantastic website that engages visitors and makes it simple for them to obtain the information they require if you want to increase your online business.
`,
    description2: `You may increase site traffic, leads, and money quickly with the help of Muscled Rainmaker programmes.`,
    description3: `Our RainmakerFX websites are finished in 30 days and made to increase your online lead and revenue generation.`,
  },
  {
    id: 3,
    icon: StarIcon,

    title: 'Enhance Brand Awareness',
    description: `You can improve brand recognition and make it simpler for clients and potential consumers to recognise your business online with a bespoke RainmakerFX website.`,
    description2: `Your current branding is incorporated into one of our bespoke themes as part of our RainmakerFX plans. We'll make sure to integrate your logo and graphics on your new website because they help establish a consistent brand identity.`,
  },
  {
    id: 4,
    icon: LikeIcon,

    title: 'Increases The User Experience',
    description: `If you choose a RainmakerFX website, we'll work with you to design a fantastic user experience.
    `,
    description2: `In order to make sure that buttons stand out, visuals pop off the screen, and forms are responsive, we'll leverage our expertise to inform your site's architecture. You'll never have to be concerned about the calibre of a user's experience on a RainmakerFX website.`,
  },
  {
    id: 5,
    icon: RecentIcon,
    title: "Increases Visitors' Time on Your Website",
    description: `You must offer engaging interactive features, eye-catching graphics, and outstanding information if you want website users to stay on your page.`,
    description2: `We can handle everything when you deal with Muscled. Users will remain interested and engaged on your RainmakerFX website, improving KPIs like time on page.`,
  },
];
const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-white p-20 pb-[12.875rem]">
      <div className="text-center mb-16">
        <h3 className="font-bold text-[2.5rem] mb-[1.875rem]">
          5 Advantages of Quick Web Design
        </h3>
        <p className="text-[1.5rem]">
          Are you interested in learning how Muscled 30-day web design services
          may increase your sales and leads? Check out these 5 advantages of
          quick web design.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min lg:gap-10 gap-y-6">
        {data.map(card => (
          <div key={card.id} className="flex">
            <div className="relative flex-shrink-0 mr-5 mt-2">
              <Image src={card.icon} alt="icon" />
            </div>
            <div className="">
              <h4 className="font-bold text-[1.75rem] leading-[2.275rem] mb-4">
                {card.title}
              </h4>
              <p>{card.description}</p>
              <br />
              <p>{card.description2}</p>
              <br />
              {card.description3 && <p>{card.description3}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BenefitsSection;
