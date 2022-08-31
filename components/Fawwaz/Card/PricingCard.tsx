import React, { FC } from 'react';
import { PricingCardProps } from '../component.type';

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

                </div>
                <div className="card-footer">

                </div>
            </div>
        </>
    );
};

export default PricingCard;