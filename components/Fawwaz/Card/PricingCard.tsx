import React, { FC } from 'react';
import { PricingCardProps } from '../component.type';

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
                        <div className='flex gap-3 items-center justify-center card-item-wrapper' key={key}>
                            <CheckMark />
                            <p className='card-item'>{item}</p>
                        </div>
                    ) )

                    }
                </div>
                <div className="card-footer">

                </div>
            </div>
        </>
    );
};

export default PricingCard;