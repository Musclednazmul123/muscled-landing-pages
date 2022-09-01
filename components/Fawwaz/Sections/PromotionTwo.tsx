import React from 'react';

const PromotionTwo = () => {
    return (
        <>
            <div className="promo-section px-6 md:px-24 pt-24">
                <p className='text-left text-2xl md:text-4xl mb-24 font-bold leading-normal'>What are the Perks of choosing Muscled as your landing page designer?</p>
                <p className='text-center text-xl leading-normal font-normal mb-24'>By partnering with Muscled and our team of in house professional landing page designers gives your company a competitive edge.  With our landing page design services you will have access to built in solutions to the design, launch, and upkeep of your landing pages, which will lead to more leads, sales, and earnings for your business.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
                    <div className="promo-item flex flex-col justify-start items-center">
                        <p className='promo-item-heading text-2xl leading-normal font-bold mb-16'>Custom Design</p>
                        <p className="promo-content font-normal leading-normal text-xl text-center">
                        Here at Muscled we cast templates aside and only create custom landing pages, tailored and built from the ground up to fit your industry, business and audience. This kind of personalization results in sales, leads and more revenue.
                        </p>
                    </div>
                    <div className="promo-item flex flex-col justify-start items-center">
                        <p className='promo-item-heading text-2xl leading-normal font-bold mb-16'>Market Research</p>
                        <p className="promo-content font-normal leading-normal text-xl text-center">
                        In order for the  landing page to generate the wanted outcome it starts with in-depth market research. We dive deep to learn about your ideal customers, market and your services or products to design a striking, user friendly and fast landing page.
                        </p>
                    </div>
                    <div className="promo-item flex flex-col justify-start items-center">
                        <p className='promo-item-heading text-2xl leading-normal font-bold mb-16'>CRO Testing</p>
                        <p className="promo-content font-normal leading-normal text-xl text-center">
                        In order to earn the best ROI from your landing page you require constant and continuous testing. This ranges from testing the copy colors, to UI. Our landing page services handle everything therefore helping your business increase its sign-ups, calls, and sales.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromotionTwo;