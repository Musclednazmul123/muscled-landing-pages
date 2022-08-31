import React from 'react';
import PricingCard from '../Card/PricingCard';



const PricingPlan = () => {
    return (
        <>
            <div className="pricing-section">
                <p className='pricing-section-title text-center'>Explore PPC Landing Page Service Plans</p>
                
                <div className="card-wrapper flex flex-row justify-center items-center">
                    <PricingCard title='DYNAMIC W/ TESTING' rate='$2,400 / page' type='basic' />
                    <PricingCard title='FULLY OPTIMIZED' rate='$3,200 / page' type='premium' />
                </div>
                

            </div>
        </>
    );
};

export default PricingPlan;