import React, { FC } from 'react'
import { ProjectCardProps } from "../component.type"

const ProjectCard: FC<ProjectCardProps> = ({ image, description, name }) => {
  return (
    <div className="shadow-xl m-auto px-[20px] py-[30px] h-[569px] bg-[#fff] max-w-[316px] w-full flex flex-col justify-between">
      {image}
      <h1 className="text-[39px]">{name}</h1>
      <p>{description}</p>
      <a className="text-[#C40000] no-underline text-[16px] flex items-center" >
        learn more
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  )
}

export default ProjectCard
