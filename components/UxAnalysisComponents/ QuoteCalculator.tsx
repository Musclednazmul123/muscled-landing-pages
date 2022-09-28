import React from "react";

import { Section } from "../Fawwaz/Sections";
import { Table, Td, Th } from "../Fawwaz/Table";

import Button from "../Fawwaz/Button";

let AiOutlineCheck=()=><svg className="mx-auto" width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg" 
xmlnsXlink="http://www.w3.org/1999/xlink">
<path d="M0 0H35V30H0V0Z" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_2_11170" transform="translate(0 -0.0833333) scale(0.0416667 0.0486111)"/>
</pattern>
<image id="image0_2_11170" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEVHcExAz4dAz49B1ItB1IwkJqDLAAAABHRSTlMAICDfCDbLnQAAAD5JREFUeNpjYKAaUDZAsJlMkDjKzgJIEob4JZiNkCSYnRUQOhhNjJB0CDsrIYxiNDFGMkrYBckORmMBBhoAAFjVBy1PQzQHAAAAAElFTkSuQmCC"/>
</defs>
</svg>


const tableRows = [
  {
    head: "Initial CRO campaign (First month) CRO & UX Assets",
    basic: "2 CRO or UX asset",
    standard: "4 CRO or UX Assets",
    premium: "8 CRO or UX Assets",
  },
  {
    head: "Monthly Ongoing CRO & UX Assets",
    basic: "1 CRO or UX asset",
    standard: "2 CRO or UX Assets",
    premium: "4 CRO or UX Assets",
  },
  {
    head: "Dedicated UX project manager",
    basic: "",
    standard: "",
    premium: "1",
  },
  {
    head: "Monthly user experience reporting",
    basic: "",
    standard: "1",
    premium: "1",
  },
  {
    head: "450+ SMEs behind campaign driving results",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Online project management scheduling",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Initial Website User Testing Videos – Up to 15 minute video (Q&A + summary of findings for each video)",
    basic: "1 video",
    standard: "2 videos",
    premium: "4 videos",
  },
  {
    head: "Initial heatmap and click stream testing and analysis",
    basic: "Up to 4 pages",
    standard: "Up to 8 pages",
    premium: "Up to 16 pages",
  },
  {
    head: "Conversion tracking code setup",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Confirmation/thank you page setup",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Goal Funnels Setup – Initial Analytics + Reporting",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Initial Conversion Audit – What Portions of Site to Test/Optimize for Conversions + Optimization Suggestions",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "VisitorRecorderFX – Web video capture of all converted leads (available for 60 days)",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "CRO & UX Assets Consist of:",
    basic: "",
    standard: "",
    premium: "",
  },
  {
    head: "Setup of website heatmaps",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Setup of visitor click tracking recording",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Setup of visitor website questionnaire (on website)",
    basic: "",
    standard: "1",
    premium: "1",
  },
  {
    head: "Page scroll reporting",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Page load time reporting",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Executive summary on conversion maximization",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Top page bounce report with recommendations",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Top navigational funnel with visitor bounce recommendations",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Raw heatmap data provided",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Reporting on visitor focus group findings",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Creation of visitor “script” for testing",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Usability questionnaire for independent testers (unique testers per questionnaire)",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "“5 second test” on top landing pages",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Creation of timed task test questionnaire (unique testers per questionnaire)",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Product perception questionnaire (unique testers per questionnaire)",
    basic: "",
    standard: "1",
    premium: "1",
  },
  {
    head: "Web forms analytics and reporting",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Google Optimize",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Video of website user experience provided",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Performance test reporting",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Conversion reporting",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Google Ads landing page conversion audit (one-time)",
    basic: "1",
    standard: "1",
    premium: "1",
  },

  {
    head: "Incoming traffic analysis",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Implementation of recommendations based on business seasons",
    basic: "",
    standard: "",
    premium: "1",
  },
  {
    head: "Creation of persona maps and customer journeys",
    basic: "",
    standard: "",
    premium: "1",
  },
  {
    head: "Executive report on questionnaire feedback",
    basic: "",
    standard: "",
    premium: "1",
  },
  {
    head: "Additional CRO & UX Assets = $600 each",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "Additional CRO & UX Assets = $600 each",
    basic: "1",
    standard: "1",
    premium: "1",
  },
  {
    head: "",
    basic: "$1,500",
    standard: "$3,000",
    premium: "$6,000",
  },
  {
    head: "User Experience Testing & Implementation Ongoing Investment",
    basic: "$750/mo.",
    standard: "$1,500/mo.",
    premium: "$3,000/mo.",
  },
];
export default function QuoteCalculator() {
  return (
    <Section>
      <div className="text-center mt-24 mb-10">
        <h2 className="text-4xl">Muscled UX Analysis Services</h2>
        <p className="mt-10">
          Swipe to the right on the table below to view additional UX analysis
          plans.
        </p>
      </div>

      <div>
        <Table className="table-fixed">
          <thead>
            <tr>
              <Th className="text-left text-white border border-b-gray border-opacity-10" content="Features" />
              <Td
                className="text-center font-bold border border-b-black border-opacity-10"
                content="Aggressive"
                type="basic"
              />
              <Td
                className="text-center font-bold border border-b-black border-opacity-10"
                content="Market Leader"
                type="standard"
              />
              <Td
                className="text-center font-bold border border-b-black border-opacity-10"
                content="Trailblazer"
                type="premium"
              />
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => {
              return (
                <tr className="text-center text-black-80">
                  <Th
                    className="text-left text-white font-light border border-b-gray border-opacity-10"
                    content={row.head}
                  />
                  <Td
                  className="border border-b-black border-opacity-10"
                    content={
                      row.basic === "1" ? (
                        <AiOutlineCheck />
                      ) : (
                        row.basic
                      )
                    }
                    type="basic"
                  />
                  <Td
                  className="border border-b-black border-opacity-10"
                    content={
                      row.standard === "1" ? (
                        <AiOutlineCheck  />
                      ) : (
                        row.standard
                      )
                    }
                    type="standard"
                  />
                  <Td
                   className="border border-b-black border-opacity-10"
                    content={
                      row.premium === "1" ? (
                        <AiOutlineCheck  />
                      ) : (
                        row.premium
                      )
                    }
                    type="premium"
                  />
                </tr>
              );
            })}
            <tr className="text-center">
              <Th
                className="text-white text-left font-light"
                content={
                  <>
                    <p>Need more information? Call Us:</p>
                    <div className="flex gap-2 items-center mt-2 cursor-pointer"></div>
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
                  >
                    Get Started
                  </Button>
                }
              />
              <Td
                type="premium"
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
      </div>
    </Section>
  );
}
