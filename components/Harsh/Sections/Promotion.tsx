import React,{FC} from 'react'
import Button from '../../Fawwaz/Button';
import {Card} from "../../Fawwaz/Card";
import websiteMaintainancePaper from "../../assets/websiteMaintainancePaper.png";
import Image from  "next/image";

const Promotion:FC = () => {
  return (
    <div className="py-2  bg-red-10">
    <div className="flex  gap-[56px] justify-center py-20 ">
      <div className="max-w-[635px] space-y-7 ">
        <h2 className="text-[28px] website-maintenance-service w-full">
          Services for Web Maintenance Designed for Your Business
        </h2>
        <p className="md:text-xl website-maintenance-service-p max-w-[547px]">
          <span>
            Half of all online searches result in the discovery of a new
            company, product, or service. They browse your website, learn
            about your products, and get a first impression of your company.
            That first impression has the potential to make or break your
            company's next sale
          </span>
          <br />
          <br />
          <span>
            This fact makes website maintenance a top priority for
            businesses today.
          </span>
          <br />
          <br />
          <span>
            Muscled, as your partner, offers your company a customized and
            detailed website maintenance plan that enables your company to
            provide a fast, secure, and immersive online experience.
            Furthermore, as a full-service digital marketing agency, we
            provide turnkey solutions for improving the performance of your
            website.
          </span>
          <br />
          <span>
            Browse our web maintenance service plans and prices below to
            learn how our award-winning team of developers, designers, and
            digital marketers can maintain and improve your website.
            Alternatively, you can contact us online and tell us about your
            company.
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-[549px] gap-4">
        <p className="md:text-xl mb-10 website-maintenance-service-p">
          Are you prepared to dive headfirst into website upkeep? Contact us
          online to speak with an expert strategist from our website
          maintenance team about keeping your website in top shape 24 hours
          a day, seven days a week.
        </p>

        <Card
          className="bg-[#086680] w-full justify-between flex p-6 rounded-md relative self-start card-website-maintenance"
        >
          <div>
            <p className="relative text-white max-w-[300px] z-20 font-[500] text-xl">
              Looking for custom plans and pricing? Request a proposal to
              receive yours.
            </p>
            <Button
              bgColor="bg-black"
              textColor="text-white"
              className="mt-6 relative z-20"
            >
              Request a Proposal
            </Button>
          </div>

          <div>
            <Image src={websiteMaintainancePaper.src} alt="" width="136.28" height="164.37" />
          </div>
        </Card>
      </div>
    </div>
  </div>
  )
}

export default Promotion;