import React from 'react'
import ServicesCard from '../ServicesCard'

const ServicesCardSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <ServicesCard
                services={[
                    "Website Optimization Services",
                    "SEO Speed Optimization Pricing",
                    "SEO Audit",
                    "Convertion Rate Optimization",
                ]}
            />

            <ServicesCard
                services={[
                    "Digital Marketing Services",
                    "SEO Service Packages",
                    "PPC",
                    "Website SEO Copywriting",
                    "All Internet Marketing Services",
                ]}
            />

            <ServicesCard
                services={[
                    "SEO Design Services",
                    "SEO Web Design Company",
                    "Web Video Production",
                    "",
                    "",
                ]}
            />
        </div>
    )
}

export default ServicesCardSection