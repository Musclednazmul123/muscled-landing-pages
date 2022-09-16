import React, { useState } from 'react'
import { Section } from '../../Fawwaz/Sections'
import { WebsiteRedesignServicesContent } from '../../../components/WebsiteRedesignService'
import { TableOfContent } from '../../Fawwaz/Table'
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import {IconItem} from '../../Fawwaz/Card'



const contentsOfWRS = [
    "Our First-Principle and Data-Driven SEO Process",
    "What does the MUSCLED SEO Management Service look like?",
    "How do I choose the BEST SEO company to help me?",
    "How can SEO help my business grow?",
    "Your SEO Strategy Needs to be Competitive",
    "FAQs about SEO services",
];
const RedesignContentSection = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <Section className="grid grid-cols-1 lg:grid-cols-4 py-12 md:py-32 gap-10">
                <div className="order-2 lg:order-1 lg:col-span-2">

                    {/* Website redesign service options */}
                    <WebsiteRedesignServicesContent />
                </div>
                <TableOfContent

                    bgColor="bg-[#F2F2F2]"
                    titleColor="text-black"
                    titleIconColor="black"
                    isOpen={isOpen}
                    setIsOpen={() => setIsOpen((prev) => !prev)}
                    contents={contentsOfWRS.map((content, key) => (
                        <IconItem
                            key={key}
                            title={content}
                            icon={<ChevronDoubleRightIcon className="fill-black-80 w-5 h-5" />}

                        />
                    ))}

                />
                {/* Request an Instant Quote */}

            </Section>
        </div>
    )
}

export default RedesignContentSection