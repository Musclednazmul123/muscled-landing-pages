import React, { useState, FC } from "react"
import { AccordionProp } from '../component.type'
import anchorImage from '../../assets/anchor.png'

const Accordion: FC<AccordionProp> = ({ header, content, job_location, job_type }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-[#00000080]">
      <div className="flex items-center justify-between py-[10px]">
        <div>
          <h1 className="text-[20px]">{header}</h1>
          <div className="flex pt-[10px] text-[#00000080]">
            <p className="text-[16px] flex w-[90px] mr-[30px] justify-between items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {job_location}
            </p>
            <p className="text-[16px] flex w-[90px] justify-between items-center">
              <img src={anchorImage.src} alt="" />
              {job_type}
            </p>
          </div>
        </div>
        {!isOpen ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-[33px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer text-[33px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        }
      </div>
      {content && (
        <div className={`${isOpen ? "animate-slide" : "animate-slideUp"}`}>
          <p className={`w-[90%] text-[20px] ml-10 p-4`}>{content}</p>
        </div>
      )}
    </div>
  )
}

export default Accordion
