import React,{FC} from 'react'
import Button from "../../Fawwaz/Button";
import { Card, CardContent, IconItem } from "../../Fawwaz/Card";
import {CardHeader} from "../Card";
import { StarIcon, CheckCircleIcon} from "@heroicons/react/solid";

const CheckIcon: FC = () => <CheckCircleIcon className="fill-black w-6 h-6" />;

const Pricing:FC = () => {
  return (
    <div className="bg-white pt-[50px] w-full">
    <div className='pt-24 bg-[#F9F9F9] px-14 w-full mx-auto'>
    <h2 className="text-4xl text-center mb-6">
      Explore Website Maintenance Service Plans
    </h2>

    {/* <p className="py-14 flex flex-wrap justify-start gap-1">
                Need help?
                <span className="underline cursor-pointer">
                    Schedule a call now
                </span>
            </p> */}

    <div className="flex flex-wrap justify-center lg:justify-between gap-2 pt-3">
      <Card className="rounded-sm max-w-[400px] w-full border border-black-70">
        <CardHeader title="SECURITY PLAN FOR WORDPRESS" rate="300">
        <StarIcon className="card-icon fill-black-50 w-[30px] h-[30px]" />
        </CardHeader>
        <CardContent className="space-y-9 mt-10 ">
          <IconItem
            icon={<CheckIcon />}
            title="Daily Security Scan"
            className="text-black-70 font-normal text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="Daily full-site backup and storage at 3rd party location"
            className="text-black-70 font-normal text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="Urgent Support/Restore if Website is Hacked"
            className="text-black-70 font-normal text-xl"
          />
        </CardContent>
        <div className="px-4 flex items-center justify-center flex-col mt-10">
								<p className="border-t border-black-50 w-full  mb-10 text-center" />
								
								<Button
									bgColor="bg-[#000]"
									textColor="text-white"
									className="py-4 px-10 text-[-0.8em]">
									Send Proposal
								</Button>
							</div>
      </Card>
      <Card className="rounded-sm  max-w-[400px] w-full border border-black-70">
        <CardHeader
          title="WEBSITE MAINTENANCE, SITE INFRASTRUCTURE, & UX IMPROVEMENTS"
          rate="2,400"
          type="premium"
        >
          <div className="flex">
            <StarIcon className="card-icon fill-black-70 w-[30px] h-[30px]" />
            <StarIcon className="card-icon fill-black-70 w-[30px] h-[30px]" />
          </div>
        </CardHeader>
        <CardContent className="space-y-9 mt-10 min-h-[276px]">
          <IconItem
            icon={<CheckIcon />}
            title="Dedicated UX Analyst"
            className="text-black-70 font-normal text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="One time server migration (if needed)"
            className="text-black-70 font-normal text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="SSL, Web Hosting & Domain Hosting Expiration Monitoring & Renewal Support"
            className="text-black-70 font-normal text-xl"
          />
        </CardContent>
        <div className="px-4 pb-10 flex items-center justify-center flex-col mt-4">
								<p className="border-t border-black-50 w-full  mb-10 text-center" />
								
								<Button
									bgColor="bg-[#000]"
									textColor="text-white"
									className="py-4 px-10 text-[-0.8em]">
									Send Proposal
								</Button>
							</div>
      </Card>
      <Card className="rounded-sm  max-w-[400px] w-full border border-black-70">
        <CardHeader
          title="AFTER-HOURS MAINTENANCE"
          rate="10,00"
          type="ultimate"
        >
          <div className="flex">
            <StarIcon className="card-icon fill-black-80 w-[30px] h-[30px]" />
            <StarIcon className="card-icon fill-black-80 w-[30px] h-[30px]" />
            <StarIcon className="card-icon fill-black-80 w-[30px] h-[30px]" />
          </div>
        </CardHeader>
        <CardContent className="space-y-9 mt-10">
          <IconItem
            icon={<CheckIcon />}
            title="Emergency Evening Support M-F 5p-9p EST"
            className="text-black-70 font-normal text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="Emergency Weekend Support Sat-Sun 9a-5p EST"
            className="text-black-70 font-normal text-xl"
          />
          <IconItem
            icon={<CheckIcon />}
            title="Dedicated UX Analyst"
            className="text-black-70 font-normal text-xl"
          />
        </CardContent>
        <div className="px-4 flex items-center justify-center flex-col mt-10">
								<p className="border-t border-black-50  w-full  mb-10 text-center" />
								
								<Button
									bgColor="bg-[#000]"
									textColor="text-white"
									className="py-4 px-10 text-[-0.8em]">
									Send Proposal
								</Button>
							</div>
      </Card>
    </div>

    <p className="text-center mt-20 mb-16 cursor-pointer content text-[24px] text-[#008EDE]">
      See Full Deliverables
    </p>
  </div>
  </div>
  )
}

export default Pricing;