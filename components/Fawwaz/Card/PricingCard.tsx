import React, { FC } from 'react';
import { PricingCardProps } from '../component.type';
import Button from '../Button';

import CheckMark from '../../assets/svg/CheckMark';

const PricingCard: FC<PricingCardProps> = ({ title, rate, type, content }) => {
    return (
        <>
            <div className='pricing-card'>
                <div className="card-header flex flex-col justify-between items-center">
                    {type == 'basic' ? (
                        <p>one Star</p>
                    ) : type == 'premium' ? (
                        <p>two star</p>
                    ) : <p>three star</p>
                    }
                    <p className='card-title'>{title}</p>
                    <p className='card-rate'>{rate}</p>

                </div>
                <div className="card-content">
                    {content?.map((item, key) => (
                        <div className='flex gap-3 items-center justify-center content-item-wrapper' key={key}>
                            <CheckMark />
                            <p className='content-item'>{item}</p>
                        </div>
                    ) )

                    }
                </div>
                <div className="card-footer">
                    <div className="px-4 py-10 mt-4 flex items-center justify-center flex-col">
                        <p className="border-t border-[#000] w-full mx-5 my-10 text-center" />
                        <div className='card-footer-content'>
                            <p>Fully Responsive Design</p>
                            <Button
                                bgColor="bg-[#000]"
                                textColor="text-white"
                                className="py-4 px-10 text-[0.8em]">
                                Send Proposal
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingCard;