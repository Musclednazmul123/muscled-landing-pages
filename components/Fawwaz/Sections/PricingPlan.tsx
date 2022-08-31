import React, { useState } from 'react';
import PricingCard from '../Card/PricingCard';



const PricingPlan = () => {

    const [content, setContent] = useState(
        [
            '2 landing page design iterations', 
            '1 multivariate conversion testing iteration'
        ]
    )

    return (
        <>
            <div className="pricing-section">
                <p className='pricing-section-title text-center'>Explore PPC Landing Page Service Plans</p>
                
                <div className="card-wrapper flex flex-row justify-center items-center">
                    <PricingCard title='DYNAMIC W/ TESTING' rate='$2,400 / page' type='basic' content={content} />
                    <PricingCard title='FULLY OPTIMIZED' rate='$3,200 / page' type='premium' />
                </div>
                

            </div>
        </>
    );
};

export default PricingPlan;