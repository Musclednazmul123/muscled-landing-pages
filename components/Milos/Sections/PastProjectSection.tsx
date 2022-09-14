import React, { useRef } from 'react'
import Slider from "react-slick"
import image1 from '../../assets/unsplash_FyD3OWBuXnY.png'
import image2 from '../../assets/unsplash_KdeqA3aTnBY.png'
import image3 from '../../assets/unsplash_U2BI3GMnSSE.png'
import projectImage from '../../assets/5a2a5fbbd0fa49 1.png'
import rightIcon from '../../assets/promotion_right_icon.png'
import leftIcon from '../../assets/pastproject-left-icon.png'
import { ProjectCard } from '../CustomElements'

const projectCards = [
  {
    image: <img className='mx-auto w-[174px] h-[174px]' src={projectImage.src} alt="project" />,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tellus felis ut amet eget. Et turpis a netus enim, et."
  },
  {
    image: <img className='mx-auto w-[174px] h-[174px]' src={projectImage.src} alt="project" />,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tellus felis ut amet eget. Et turpis a netus enim, et."
  },
  {
    image: <img className='mx-auto w-[174px] h-[174px]' src={projectImage.src} alt="project" />,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tellus felis ut amet eget. Et turpis a netus enim, et."
  },
  {
    image: <img className='mx-auto w-[174px] h-[174px]' src={projectImage.src} alt="project" />,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tellus felis ut amet eget. Et turpis a netus enim, et."
  },
  {
    image: <img className='mx-auto w-[174px] h-[174px]' src={projectImage.src} alt="project" />,
    name: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec tellus felis ut amet eget. Et turpis a netus enim, et."
  },
]

const PastProjectSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  }

  const sliderRef = useRef<Slider>(null);

  return (
    <div className="bg-[#F8FAA5] pt-[65px] pb-[159px]">
      <div className="pl-[158px] pr-[65px]">
        <div className="flex flex-wrap justify-between">
          <div className="max-w-[822px] mt-[120px] text-center">
            <h1 className="red-stroke text-[#F8FAA5] text-[85px] tracking-[0.215em]">INITIATIVES OF MUSCLED</h1>
            <p className="m-auto text-center text-[24px] max-w-[546px] mt-[39px]">
              Muscled is committed to leaving the world a
              better place than we found it. That's why
              we've partnered with organizations like
              Pencils of Promise, The Water Project,
              Empower Playgrounds, The Ocean Cleanup,
              and others all over the world!
            </p>
          </div>
          <img className="w-[361px] h-[240px]" src={image1.src} alt="image" />
        </div>
        <div className="flex flex-wrap justify-between mt-[32px]">
          <img className="w-[518px] h-[345px] mt-[112px]" src={image2.src} alt="image" />
          <img className="w-[518px] h-[345px]" src={image3.src} alt="image" />
        </div>
      </div>
      <div className="mt-[316px]">
        <div className="text-right mr-[200px] mb-[69px] flex justify-end">
          <button type="button" className="h-[82px] w-[82px] shadow-md bg-white rounded-full flex justify-center items-center" onClick={() => sliderRef.current?.slickPrev()}>
            <img src={leftIcon.src} alt="" />
          </button>
          <button type="button" className="h-[82px] w-[82px] shadow-md bg-white rounded-full ml-[69px] flex justify-center items-center" onClick={() => sliderRef.current?.slickNext()}>
            <img src={rightIcon.src} alt="" />
          </button>
        </div>
        <div className="w-fill">

          <Slider ref={sliderRef} {...settings}>
            {projectCards.map((item, key) =>
              <ProjectCard
                key={key}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            )}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default PastProjectSection
