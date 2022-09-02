import React from 'react';
import LinkCard from '../../extra/LinkCard';

const ImportantLinks = () => {
    return (
        <>
            <div className='py-24 px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4'>
                <LinkCard 
                    title={"Social Media Services"}
                    links={[
                        "Social Media Design",
                        "Social Media Management",
                        "Social Media Pricing",
                        "Facebook Advertising Services",
                        "Instagram Advertising Services"
                    ]}
                />
                <LinkCard 
                    title={'SEO Services'}
                    links = {[
                        "SEO Services",
                        "Enterprise SEO Pricing",
                        "Local SEO Pricing"
                    ]}
                />

                <LinkCard 
                    title={'Other WebFX Services'}
                    links = {[
                        "Enterprise Marketing Agency",
                        "Account-Based Marketing",
                        "Web Design",
                        "Web Video Production",
                        "Voice Search Optimization"
                    ]}
                />
            </div>  
        </>
    );
};

export default ImportantLinks;