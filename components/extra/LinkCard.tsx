import React, { FC } from 'react';
import { LinkCardProps } from 'components/Fawwaz/component.type';

const LinkCard: FC<LinkCardProps> = ({title, links}) => {
    return (
        <>
            <div className='link-card p-7 text-left bg-[#c40000] w-80 h-80'>
                <h5 className='link-card-heading mb-4 leading-normal'>{title}</h5>
                <div className='flex flex-col gap-4'>
                    {links.map((item, index) => (
                        <a className='link-card-item' key={index} href="">{item}</a>
                    ))

                    }
                </div>
            </div>    
        </>
    );
};

export default LinkCard;