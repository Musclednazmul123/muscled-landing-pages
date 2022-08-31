import React, { FC } from 'react';
import Partner from '../PartnerLogo/Partner';

import PartnerOne from 'components/assets/svg/partner/PartnerOne';
import PartnerTwo from 'components/assets/svg/partner/PartnerTwo';
import PartnerThree from 'components/assets/svg/partner/PartnerThree';
import PartnerFour from 'components/assets/svg/partner/PartnerFour';
import PartnerFive from 'components/assets/svg/partner/PartnerFive';
import PartnerSix from 'components/assets/svg/partner/PartnerSix';

const OurPartners = () => {
    return (
        <>
            <div className="our-partner">
                <h4 className='partner-title text-center'>Our Partners</h4>
                <div className='partner-wrapper grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8'>
                    <Partner src='https://google.com' children={<PartnerOne />}/>
                    <Partner src='https://google.com' children={<PartnerTwo />}/>
                    <Partner src='https://google.com' children={<PartnerThree />}/>
                    <Partner src='https://google.com' children={<PartnerFour />}/>
                    <Partner src='https://google.com' children={<PartnerFive />}/>
                    <Partner src='https://google.com' children={<PartnerSix />}/>
                    
                </div>
            </div>
            
        </>
    );
};

export default OurPartners;