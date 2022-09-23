import React,{FC} from 'react'
import {Section} from "../../Fawwaz/Sections";
import { Table, Td, Th } from "../../Fawwaz/Table";
import Button from '../../Fawwaz/Button';
import { AiFillPhone, AiOutlineCheck } from "react-icons/ai";


const ServicePlans:FC = () => {
  return (
    <>
    <Section>
    <div className="flex  gap-10 justify-start py-20 flex-col ">
          <h2 className=" flex justify-start text-4xl">
            {" "}
            What is included in website maintenance plans?
          </h2>

          <p className="mt-10 text-xl">
            Website maintenance services include a variety of services that are
            required to keep your website secure, user-friendly, and current.
            Examples of common website maintenance services include:
          </p>
          <p className="text-xl">• Regular content updates</p>
          <p className="text-xl">• Patches and security scans</p>
          <p className="text-xl">• CMS assistance and updates</p>
          <p className="text-xl">• Regular site backups</p>
          <p className="text-xl">•Maintainance of interactivity</p>
          <p className="text-xl">•Technology support</p>
          <p className="mb-10 text-xl">
            Muscled provides all of this and much more. We provide two types of
            website maintenance service plans: monthly and hourly. In the charts
            below, you can learn more about these website maintenance packages.
          </p>

          <Table className="table-fixed">
            <thead>
              <tr className="border-bottom">
                <Th
                  className="text-left text-white rounded-tl-xl"
                  content="Features"
                />
                <Td
                  className="text-center font-bold"
                  content="Design & Support"
                  type="basic"
                />
                <Td
                  className="text-center font-bold"
                  content="Internet Marketing"
                  type="standard"
                />
                <Td
                  className="text-center font-bold table-border-redius"
                  content="Development"
                  type="premium"
                />
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-left text-white font-normal"
                  content="Billing"
                />
                <Td content="Billed in 30-min.increments" type="basic" />
                <Td content="Billed in 30-min.increments" type="standard" />
                <Td content="Billed in 30-min.increments" type="premium" />
              </tr>
              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Minimum Service Request"
                />

                <Td content="1 hour" type="basic" />
                <Td content="1 hour" type="standard" />
                <Td content="1.5 hour" type="premium" />
              </tr>
              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Online Customer Support System"
                />
                <Td
                  type="basic"
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                />
                <Td
                  type="standard"
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                />
                <Td
                  type="premium"
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom-table-footer ">
                <Th
                  className="text-white text-left font-normal"
                  content="Rates"
                />

                <Td content="$150/hour" type="basic" />
                <Td content="$150/hour" type="standard" />
                <Td content="$150/hour" type="premium" />
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
                className="table-border-redius-bottom"
                  type="premium"
                  content={
                    <Button
                      bgColor="bg-black"
                      textColor="text-white"
                      className="mx-auto "
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

      <Section>
        <div className="text-center mt-24 mb-10">
          <h2 className="text-4xl leading-[52px]">Packages for hourly website maintenance</h2>
          <p className="mt-10 text-xl">
            If your company does not require the routine maintenance of a
            monthly package, we also provide hourly web maintenance services.
          </p>
          <p className="mt-10 text-xl">
            {" "}
            Check out our hourly website maintenance plans and pricing:
          </p>
        </div>
        <div className="text-center  mb-10">
          <Table className="table-fixed">
            <thead>
              <tr className="border-bottom">
                <Th
                  className="text-left text-white rounded-tl-xl"
                  content="Features"
                />
                <Td
                  className="text-center font-bold"
                  content="WordPress"
                  type="basic"
                />
                <Td
                  className="text-center font-bold h-32 p-12 table-border-redius-top"
                  content="Enterprise WordPress, WooCommerce, & Shopify"
                  type="standard"
                />
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-black-80 border-bottom ">
                <Th
                  className="text-left text-white font-normal"
                  content="Recommended for:"
                />
                <Td content="WordPress sites 500 or less pages" type="basic" />
                <Td content="WordPress sites 500+ pages" type="standard" />
              </tr>
              <tr className="text-center text-black-80 border-bottom">
                <Th className="text-white text-left font-normal" content="" />

                <Td content="Primarily static content" type="basic" />
                <Td content="WooCommerce & Shopify" type="standard" />
              </tr>
              <tr className="text-center text-black-80 border-bottom">
                <Th className="text-white text-left font-normal" content="" />
                <Td type="basic" content="" />
                <Td type="standard" content="Custom & dynamic functionality" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Website Updates M-F 8a-5p EST"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="UX Design, Website Maintenance, Project Management, Visitor & UX Analysis, Client Support, Web Development & Web Infrastructure Hours"
                />
                <Td type="basic" content="Additional cost: $150/hour" />
                <Td type="standard" content="Additional cost: $150/hour" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="If 1 business day turnaround is requested"
                />
                <Td type="basic" content="$250/hour" />
                <Td type="standard" content="$250/hour" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="WordPress Quarterly Upgrades/Security Patches"
                />
                <Td
                  type="basic"
                  className="h-32 p-14"
                  content="($150/hour billed in .5 hour increments for code rewrites/fixes to source or website frontend impacted by security patch updates)"
                />
                <Td type="standard" content="" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Enterprise WordPress, WooCommerce & Shopify Quarterly Upgrades/Security Patches"
                />
                <Td type="basic" content="" />
                <Td
                  className="h-32 p-14"
                  type="standard"
                  content="($150/hour billed in .5 hour increments for code rewrites/fixes to source or website frontend impacted by security patch updates)"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Daily Security Scan"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Daily full-site backup and storage at 3rd party location (for easy restore)"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Urgent Support/Restore if Website is Hacked"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom-table-footer">
                <Th
                  className="text-white text-left font-normal"
                  content="Monthly Investment"
                />
                <Td type="basic" content="$2,400" />
                <Td type="standard" content="$4,200" />
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
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="text-center mt-24 mb-10">
          <h2 className="leading-[52px] text-4xl">
            Plans for ongoing website maintenance, site infrastructure, and UX
            Improvement plans{" "}
          </h2>
          <p className="mt-10 text-xl">
            Looking for a more detailed plan? Do you want your website to be
            maintained on a regular basis? These plans ensure that your site's
            infrastructure and user experience are always taken care of.
          </p>
        </div>
        <div>
          <Table className="table-fixed">
            <thead>
              <tr className="border-bottom">
                <Th
                  className="text-left text-white rounded-tl-xl"
                  content="Features"
                />
                <Td
                  className="text-center font-bold"
                  content="WordPress"
                  type="basic"
                />
                <Td
                  className="text-center font-bold"
                  content="Enterprise WordPress, WooCommerce, & Shopify"
                  type="standard"
                />
                <Td
                  className="text-center font-bold"
                  content="After-Hours"
                  type="premium"
                />
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-left text-white font-normal"
                  content="Recommended for:"
                />
                <Td content="WordPress sites 500 or less pages" type="basic" />
                <Td content="WordPress sites 500+ pages" type="standard" />
                <Td
                  className="text-center font-bold"
                  content=""
                  type="premium"
                />
              </tr>
              <tr className="text-center text-black-80 border-bottom">
                <Th className="text-white text-left font-normal" content="" />

                <Td content="Primarily static content" type="basic" />
                <Td content="WooCommerce & Shopify" type="standard" />
                <Td content="" type="premium" />
              </tr>
              <tr className="text-center text-black-80 border-bottom">
                <Th className="text-white text-left font-normal" content="" />
                <Td type="basic" content="" />
                <Td type="standard" content="Custom & dynamic functionality" />
                <Td type="premium" content="" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Website Updates M-F 8a-5p EST"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="UX Design, Website Maintenance, Project Management, Visitor & UX Analysis, Client Support, Web Development & Web Infrastructure Hours"
                />
                <Td type="basic" content="15 hours/month" />
                <Td type="standard" content="25 hours/month" />
                <Td
                  type="premium"
                  content="25 hours/month
"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Typical hours spent and allocated to website UI/UX improvements & refreshed site content as requested by the client"
                />
                <Td type="basic" content="~8 hours (of the 15 monthly hours)" />
                <Td
                  type="standard"
                  content="~15 hours (of the 25 monthly hours)"
                />
                <Td
                  type="premium"
                  content="~15 hours (of the 25 monthly hours)"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Unused hours roll to the next month & accrue 1/4ly"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="FuelTankFX system to ensure delivery and transparency of investment"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Proactive quarterly UX, A/B Testing, & Website Performance: Strategy & Strategy Execution (With excess accrued hours)"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Unit Tests by a SME for Functionality Synthetic Browser Monitoring"
                />
                <Td type="basic" content="Basic" />
                <Td type="standard" content="Advanced" />
                <Td type="premium" content="Advanced" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="If client requesed & desired – Git and/or staging environment utilized by WebFX developers"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="SSL, Web Hosting & Domain Hosting Expiration Monitoring & Renewal Support"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="WordPress Quarterly Upgrades/Security Patches"
                />
                <Td
                className="h-40 p-8"
                  type="basic"
                  content="(Any needed recording/
refactoring/
web infrastructure to support security patch implementation is deducted from the 15 monthly hours)"
                />
                <Td type="standard" content="" />
                <Td type="premium" content="" />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Enterprise WordPress, WooCommerce & Shopify Quarterly Upgrades/Security Patches"
                />
                <Td type="basic" content="" />
                <Td
                className="h-40 p-8"
                  type="standard"
                  content="(Any needed recording/
refactoring/
web infrastructure to support security patch implementation is deducted from the 15 monthly hours)"
                />
                <Td
                  type="premium"
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Daily Security Scan"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Website Uptime Monitoring (Every minute)"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Daily full-site backup and storage at 3rd party location (for easy restore)"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Urgent Support/Restore if Website is Hacked"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="TeamworkFX communication & project management portal"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Server monitoring & quarterly upgrades using unused 1/4ly hours"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="One time server migration (if needed)"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Dedicated UX Analyst"
                />

                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="basic"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="standard"
                />
                <Td
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                  type="premium"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="If 1 business day turnaround is requested"
                />
                <Td
                  type="basic"
                  content="Included with 50% Expedition Multiplier Applied to Hours Used"
                />
                <Td
                  type="standard"
                  content="Included with 50% Expedition Multiplier Applied to Hours Used"
                />
                <Td
                  type="premium"
                  content="Included with 50% Expedition Multiplier Applied to Hours Used"
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Emergency Evening Support M-F 5p-9p EST"
                />
                <Td type="basic" content="" />
                <Td type="standard" content="" />
                <Td
                  type="premium"
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom">
                <Th
                  className="text-white text-left font-normal"
                  content="Emergency Weekend Support Sat-Sun 9a-5p EST"
                />
                <Td type="basic" content="" />
                <Td type="standard" content="" />
                <Td
                  type="premium"
                  content={
                    <AiOutlineCheck className="mx-auto fill-green-500" />
                  }
                />
              </tr>

              <tr className="text-center text-black-80 border-bottom-table-footer">
                <Th
                  className="text-white text-left font-normal"
                  content="Monthly Investment"
                />
                <Td type="basic" content="$2,400" />
                <Td type="standard" content="$4,200" />
                <Td type="premium" content="$10,000" />
              </tr>

              <tr className="text-center ">
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
      </>
  )
}

export default ServicePlans