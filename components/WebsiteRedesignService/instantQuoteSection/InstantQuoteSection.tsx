import React from 'react'
import { Quotation, InputRangeSlider } from '../../../components/WebsiteRedesignService'

const InstantQuoteSection = () => {
    return (
        <div>
            <Quotation
                title="Request an Instant Quote using  Our Website Design Calculator"
                desc={`To get a free, instant quote, use the sliders below to indicate your needs, then click the "See Pricing" button. We'll show you both low and high-ended estimates for each service category, so you'll have an overall range of how much it might cost to build such a website.`}
            >
                <InputRangeSlider
                    inputTitle="Number of pages"
                    inputText="10 - 15"
                    width={180}
                />

                <InputRangeSlider
                    inputTitle="Style of design"
                    inputText="Simple yet attractive"
                    width={310}
                />
                <InputRangeSlider
                    inputTitle="Copywriting number of pages"
                    inputText="5 - 10"
                    width={180}
                    left={'35%'}
                />
                <InputRangeSlider
                    inputTitle="SEO"
                    inputText="30 keywords"
                    width={230}
                />
                <InputRangeSlider
                    inputTitle="Responsive Design"
                    inputText="Yes"
                    left={'35%'}
                />
                <InputRangeSlider
                    inputTitle="Database Integration"
                    inputText="Basic"
                    left={'35%'}
                />
                <InputRangeSlider
                    inputTitle="Ecommerce Functionality"
                    inputText="Basic"
                    left={'35%'}
                />
                <InputRangeSlider
                    inputTitle="CMS"
                    inputText="Standard"
                    left={'35%'}
                    width={200}
                />
            </Quotation>
        </div>
    )
}

export default InstantQuoteSection