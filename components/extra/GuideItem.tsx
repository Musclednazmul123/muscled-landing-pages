import React, { FC } from 'react';
import { GuideItemProps } from '../../components/Fawwaz/component.type';

const GuideItem: FC<GuideItemProps> = ({id, question, headingSize, children}) => {
    return (
        <>
            <div className="mb-16">
                <h2 id={id} className={headingSize=='small' ? `text-2xl leading-9 font-bold mb-8` : `text-2xl md:text-4xl leading-normal font-bold mb-8`}>
                    {question}
                </h2>
                <div className="guide-content flex flex-col justify-center items-start gap-4 text-xl leading-normal font-normal">
                {children}
                </div>
            </div>
        </>
    );
};

export default GuideItem;

// "text-2xl md:text-4xl font-bold leading-normal mb-8"