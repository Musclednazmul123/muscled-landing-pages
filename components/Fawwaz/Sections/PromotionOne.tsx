import React, { FC } from 'react';
import { PromotionOneProps } from '../component.type';
import ButtonRounded from '../ButtonRounded';
// import ImacBanner from '../../assets/iMac-24-inch.png'

const PromotionOne: FC<PromotionOneProps> = ({title}) => {
    return (
        <>
            <div className='promotion-section px-6 md:px-24 mb-12'>
                <div className='promotion-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                        <h2 className='promotion-title text-2xl md:text-4xl font-bold leading-normal mb-10'>{title}</h2>
                        <div className='promotion-content-list flex flex-col items-start justify-center gap-4'>
                            <p>At Muscled, our professional landing page design services deliver:</p>
                            <ul>
                                <li> A professional landing page design that will remain consistent and representative of your brand.</li>
                                <li>Striking and user friendly landing page that will entice visitors to convert.</li>
                                <li> A curated landing page that will speak directly to your target audience, meets your needs and surpasses your expectations.</li>
                            </ul>
                            <p>Below you can check out our pricing table with detailed breakdowns of what's included in each of our packages and to learn how pay-per-click (PPC) advertising campaigns can have a great impact in your business.</p>
                            <p>We understand sometimes you need to speak directly to the source. To consult with a Digital Marketing Specialist feel free to hit us up at XXXXXXXX</p>
                        </div>
                    </div>
                    <div className="promotion-banner grid grid-cols-3 lg:max-h-72">
                        <div className='col-span-2'>
                            <p className="banner-content">
                                Looking for custom plans and pricing? Request a proposal to receive yours
                            </p>
                            <ButtonRounded
                                bgColor='bg-black'
                                textColor='text-white'
                                textSize='text-lg'
                                roundedFull
                                children={"Get Free Proposal"}
                            />
                        </div>
                        <div className='banner-bg-image'>
                            <img src='./iMac-24-inch.png' alt="iMac-banner-img" />
                        </div>
                        
                    </div>
                </div>
            </div>    
        </>
    );
};

export default PromotionOne;


