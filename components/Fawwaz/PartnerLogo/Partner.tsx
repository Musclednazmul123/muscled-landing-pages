import React, { FC } from 'react';
import { PartnerLogo } from '../component.type';

const Partner: FC<PartnerLogo> = ({src, children}) => {
    return (
        <>  
          
            <a href={src}>
                {children}
            </a>
     
        </>
    );
};

export default Partner;