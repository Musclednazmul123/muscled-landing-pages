import React, { FC } from 'react';
import { PartnerLogo } from '../component.type';
import Link from 'next/link';

const Partner: FC<PartnerLogo> = ({src, width, height, children}) => {
    return (
        <>  
          
            <a href={src}>
                {children}
            </a>
     
        </>
    );
};

export default Partner;