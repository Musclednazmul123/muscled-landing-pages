import React,{FC} from 'react'
import { Section } from '../../Fawwaz/Sections'
import ServiceContent from "../Service/ServiceContent";

const ImportantLinks:FC = () => {
  return (
    <Section>
        <div className="flex flex-wrap justify-between gap-[40px] mb-40 mt-0">
          <ServiceContent className="w-[330px]  bg-red-12 p-8 pb-4  ">
            <h4 className="mb-10">Website Optimization Services</h4>
            <p className="mb-10">SEO Speed Optimization Pricing</p>
            <p className="mb-10">SEO Audit</p>
            <p className="mb-10">Convertion Rate Optimization</p>
          </ServiceContent>
          <ServiceContent className="w-[330px]  bg-red-12 p-8 pb-4">
            <h4 className="mb-10">Digital Marketing Services</h4>
            <p className="mb-8">Digital Marketing Services</p>
            <p className="mb-8">PPC</p>
            <p className="mb-8">Website SEO Copywriting</p>
            <p className="mb-8">All Internet Marketing Services</p>
          </ServiceContent>
          <ServiceContent className="w-[330px]  bg-red-12 p-8 pb-4">
            <h4 className="mb-10">SEO Design Services</h4>
            <p className="mb-10">SEO Web Design Company</p>
            <p className="mb-10">Web Video Production</p>
          </ServiceContent>
        </div>
      </Section>

  )
}

export default ImportantLinks
