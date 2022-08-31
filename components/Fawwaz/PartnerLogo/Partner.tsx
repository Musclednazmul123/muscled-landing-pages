import React, { FC } from 'react';
import { PartnerLogo } from '../component.type';
import Link from 'next/link';

const Partner: FC<PartnerLogo> = ({src, width, height, logo}) => {
    return (
        <>  
          
            <a href={src}>
                {logo}
            </a>
     
        </>
    );
};

export default Partner;