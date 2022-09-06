import React, {FC} from 'react';
import { SVGProps } from "types/types";

const ChevronRight: FC<SVGProps> = ({className, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className ? className : 'w-3 h-3'}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>


    );
};

export default ChevronRight;