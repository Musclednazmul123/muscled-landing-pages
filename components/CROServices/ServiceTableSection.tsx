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
              className="text-left text-white rounded-tl-xl w-[310px]  border-b border-[rgba(0,0,0,0.1)]"
              content="Features"
            />
            <Td
              className="text-center font-bold w-[480px] rounded-none  border-b border-[rgba(0,0,0,0.1)]"
              content="Aggressive"
              type="basic"
            />
            <Td
              className="text-center font-bold w-[480px]  border-b border-[rgba(0,0,0,0.1)]"
              content="Market Leader"
              type="standard"
            />
            <Td
              className="text-center font-bold w-[480px] rounded-tr-xl  border-b border-[rgba(0,0,0,0.1)]"
              content="Enterprise"
              type="premium"
            />
          </tr>
        </thead>
        <tbody>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Initial CRO campaign (First month) CRO & UX Assets"
            />
            <Td
              content="4 CRO or UX Assets"
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="8 CRO or UX Assets"
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="8 CRO or UX Assets"
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Monthly Ongoing CRO & UX Assets"
            />
            <Td
              content="2 CRO or UX Assets"
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="4 CRO or UX Assets"
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="8 CRO or UX Assets"
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Dedicated UX project manager"
            />
            <Td
              type="basic"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Monthly user experience reporting"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="450+ SMEs behind campaign driving results"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Online project management scheduling"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Initial Website User Testing Videos – Up to 15 minute video (Q&A + summary of findings for each video)"
            />
            <Td
              content="4 videos"
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="6 videos"
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="6 videos"
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Initial heatmap and click stream testing and analysis"
            />
            <Td
              content="Up to 8 pages"
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="Up to 16 pages"
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              content="Up to 16 pages"
              type="premium"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion tracking code setup"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Confirmation/thank you page setup"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Goal Funnels Setup – Initial Analytics + Reporting"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="VisitorRecorderFX – Web video capture of all converted leads (available for 60 days)"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold border-b border-[rgba(0,0,0,0.1)]"
              content="CRO & UX Assets Consist of:"
            />
            <Td
              type="basic"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<></>}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Use of Google Optimize for A/B testing (Client Google Analytics access is required)"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Raw Heatmap Data Provided"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="ROI & split test reporting schedule"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Creative design for A/B testing"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Market Research"
            />
            <Td
              type="basic"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="standard"
              className=" border-b border-[rgba(0,0,0,0.1)]"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion Strategy"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion best practices documentation"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Static calls to action design"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Lead form setup/modifications"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Navigational modifications"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Multivariate conversion testing"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="USP and headline copywriting"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Setup of auto responders"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Incoming traffic reporting and recommendations"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion path implementation"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Lead forms integrated into supported CRMs (ex. Salesforce.com, Microsoft Dynamics, Sugar CRM, etc)"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Performance test reporting"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion reporting"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="MarketingCloudFX setup & included"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Incoming traffic analysis"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Ecommerce websites"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Shopping cart abandonment testing"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Google Ads landing page conversion audit (one-time)"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Landing page creation"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Custom UX design and development projects"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion Funnel Report"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="CRO Page Heading Analysis"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion Analysis by Traffic Source/Medium"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Basic ADA Compliance Analysis"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="MCFX Personalization Strategy"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-normal border-b border-[rgba(0,0,0,0.1)]"
              content="Conversion Analysis by Traffic Source/Medium"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold"
              content="Additional CRO & UX Assets = $600 each"
            />
            <Td
              type="basic"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content={<AiOutlineCheck className="mx-auto fill-green-500 w-5 h-5" />}
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold border-b border-[rgba(0,0,0,0.1)]"
              content="Initial Setup Month 1"
            />
            <Td
              type="basic"
              content="$3,000"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content="$6,000"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content="$8,000"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center text-black-80">
            <Th
              className="text-left text-white font-bold border-[rgba(0,0,0,0.1)]"
              content="Initial Setup Month 1"
            />
            <Td
              type="basic"
              content="$1,500"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="standard"
              content="$3,000"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
            <Td
              type="premium"
              content="$6,000"
              className=" border-b border-[rgba(0,0,0,0.1)]"
            />
          </tr>
          <tr className="text-center">
            <Th
              className="text-white text-left font-normal rounded-bl-xl"
              content={
                <>
                  <p>Give Us a Call if You Need Information</p>
                  <div className="flex gap-2 items-center mt-2 cursor-pointer">
                    <AiFillPhone className="fill-sky-500 w-6 h-6" />
                    <p className="text-sky-500 font-bold">888-601-5359</p>
                  </div>
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
                  textSize= "20px"
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
                  textSize= "20px"
                >
                  Get Started
                </Button>
              }
            />
            <Td
              type="premium"
              className="rounded-br-xl"
              content={
                <Button
                  bgColor="bg-black"
                  textColor="text-white"
                  className="mx-auto"
                  textSize= "20px">
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
