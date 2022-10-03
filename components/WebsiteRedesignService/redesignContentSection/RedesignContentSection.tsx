import React, { useState } from 'react'
import { Section } from '../../Fawwaz/Sections'
import { WebsiteRedesignServicesContent } from '../../../components/WebsiteRedesignService'
import { TableOfContent } from '../../Fawwaz/Table'
import {IconItem} from '../../Fawwaz/Card'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'



const contentsOfWRS = [
    "Website redesign service options from Muscled Digital Agency",
    "What should you expect from our website redesign service?",
    "Web Design Services from a digital agency that cares about results.",
    "Why do you need a website redesign service?",
    "Why do you need a website redesign?",
    "What should I focus on with my website redesign service?",
    "FAQs for Web Redesign Services",
];
const RedesignContentSection = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <Section className="grid grid-cols-2 lg:grid-cols-4 py-12 md:py-32 gap-10 relative ">
                <div className="order-2 lg:order-1 lg:col-span-2">

                    {/* Website redesign service options */}
                    <WebsiteRedesignServicesContent />
                </div>
                <TableOfContent
                    bgColor="bg-[#F2F2F2]"
                    titleColor="text-black"
                    titleIconColor="black"
                    className='border border-black border-opacity-[30%] rounded-[10px]'
                    contentsClassName='pl-5'
                    isOpen={isOpen}
                    setIsOpen={() => setIsOpen((prev) => !prev)}
                    contents={contentsOfWRS.map((content, key) => (
                        <IconItem
                            key={key}
                            title={content}
                            icon={<ChevronDoubleRightIcon className=" w-5 h-4 " />}

                        className="mb-6 items-center"/>
                    ))}

                />
                {/* Request an Instant Quote */}

            </Section>
        </div>
    )
}

export default RedesignContentSection