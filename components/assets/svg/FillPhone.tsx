import React, { FC } from 'react';
import { SVGProps } from "types/types";


const FillPhone: FC<SVGProps> = ({className, ...props}) => {
    console.log(props)
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ? className : ''}>
        <path d="M1.38689 16.4626L6.47283 14.282C7.07189 14.0227 7.77455 14.1975 8.18142 14.7029L10.2481 17.2257C13.4942 15.632 16.131 12.9924 17.7247 9.74915L15.2024 7.68478C14.6985 7.27317 14.5269 6.57431 14.7817 5.97524L16.9619 0.889307C17.2475 0.237276 17.9509 -0.119443 18.6395 0.0404007L23.3645 1.13024C24.0325 1.28259 24.4998 1.87087 24.4998 2.55806C24.4998 14.3846 14.8811 24.0034 3.05452 24.0034C2.36686 24.0034 1.78046 23.5361 1.62717 22.8681L0.537331 18.1431C0.379503 17.4563 0.735237 16.7438 1.38689 16.4626Z" fill="#48BBFC"/>
        </svg>

    );
};

export default FillPhone;