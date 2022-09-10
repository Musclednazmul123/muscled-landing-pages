import React from "react";
import { Hero, Section } from "../Fawwaz/Sections";
import Card from "../Card";
import { NextPage } from "next";
import Banner from "./Banner";
import { Table, Td, Th } from "components/Fawwaz/Table";
import Button from "components/Fawwaz/Button";
import { AiFillPhone, AiOutlineCheck } from "react-icons/ai";

export type ServiceTableSectionProps = {};

const ServiceTableSection = (props: ServiceTableSectionProps) => {
  return (
    <Section>
      <div className="py-24">
        <h2 className="text-4xl text-center">
          Muscled services for Conversion Optimization
        </h2>
        <p className="md:text-xl text-center mt-8">
          Find out more about our conversion optimization plans and pricing.
        </p>
      </div>
      <Table className="table-auto rounded-b-md mb-24">
        <thead>
          <tr>
            <Th
              className="text-left text-white rounded-tl-xl w-[310px]"
              content="Features"
            />
            <Td
              className="text-center font-bold w-[480px] rounded-none"
              content="Aggressive"
              type="premium"
            />
            <Td
              className="text-center font-bold w-[480px]"
              content="Market Leader"
              type="premium"
            />
            <Td
              className="text-center font-bold w-[480px] rounded-tr-xl"
              content="Enterprise"
              type="premium"
            />
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Initial CRO campaign (First month) CRO & UX Assets"
            />
            <Td content="4 CRO or UX Assets" type="ultimate" />
            <Td content="8 CRO or UX Assets" type="ultimate" />
            <Td content="8 CRO or UX Assets" type="ultimate" />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Monthly Ongoing CRO & UX Assets"
            />
            <Td content="2 CRO or UX Assets" type="ultimate" />
            <Td content="4 CRO or UX Assets" type="ultimate" />
            <Td content="8 CRO or UX Assets" type="ultimate" />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Dedicated UX project manager"
            />
            <Td type="premium" content={<></>} />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Monthly user experience reporting"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="450+ SMEs behind campaign driving results"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Online project management scheduling"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Initial Website User Testing Videos – Up to 15 minute video (Q&A + summary of findings for each video)"
            />
            <Td content="4 videos" type="ultimate" />
            <Td content="6 videos" type="ultimate" />
            <Td content="6 videos" type="ultimate" />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Initial heatmap and click stream testing and analysis"
            />
            <Td content="Up to 8 pages" type="ultimate" />
            <Td content="Up to 16 pages" type="ultimate" />
            <Td content="Up to 16 pages" type="ultimate" />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion tracking code setup"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Confirmation/thank you page setup"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Goal Funnels Setup – Initial Analytics + Reporting"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="VisitorRecorderFX – Web video capture of all converted leads (available for 60 days)"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold"
              content="CRO & UX Assets Consist of:"
            />
            <Td type="premium" content={<></>} />
            <Td type="premium" content={<></>} />
            <Td type="premium" content={<></>} />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Use of Google Optimize for A/B testing (Client Google Analytics access is required)"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Raw Heatmap Data Provided"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="ROI & split test reporting schedule"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Creative design for A/B testing"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Market Research"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion Strategy"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion best practices documentation"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Static calls to action design"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Lead form setup/modifications"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Navigational modifications"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Multivariate conversion testing"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="USP and headline copywriting"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Setup of auto responders"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Incoming traffic reporting and recommendations"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion path implementation"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Lead forms integrated into supported CRMs (ex. Salesforce.com, Microsoft Dynamics, Sugar CRM, etc)"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Performance test reporting"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion reporting"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="MarketingCloudFX setup & included"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Incoming traffic analysis"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Ecommerce websites"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Shopping cart abandonment testing"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Google Ads landing page conversion audit (one-time)"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Landing page creation"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Custom UX design and development projects"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion Funnel Report"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="CRO Page Heading Analysis"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion Analysis by Traffic Source/Medium"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Basic ADA Compliance Analysis"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="MCFX Personalization Strategy"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal"
              content="Conversion Analysis by Traffic Source/Medium"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold"
              content="Additional CRO & UX Assets = $600 each"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold"
              content="Initial Setup Month 1"
            />
            <Td type="premium" content="$3,000" />
            <Td type="premium" content="$6,000" />
            <Td type="premium" content="$8,000" />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold"
              content="Initial Setup Month 1"
            />
            <Td type="premium" content="$1,500" />
            <Td type="premium" content="$3,000" />
            <Td type="premium" content="$6,000" />
          </tr>
          <tr className="text-center">
            <Th
              className="text-white text-left font-normal rounded-bl-xl"
              content={
                <>
                  <p>Give Us a Call if You Need Information</p>
                  <div className="flex gap-2 items-center mt-2 cursor-pointer">
                    <AiFillPhone className="fill-sky-500" />
                    <p className="text-sky-500 font-bold">888-601-5359</p>
                  </div>
                </>
              }
            />
            <Td
              type="ultimate"
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
              type="ultimate"
             
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
              type="ultimate"
              className="rounded-br-xl"
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
    </Section>
  );
};

export default ServiceTableSection;
