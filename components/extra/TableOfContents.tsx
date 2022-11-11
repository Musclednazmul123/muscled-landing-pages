import React, { FC, useState } from 'react';
import { TableOfContentsProps } from '../../components/Fawwaz/component.type';
import ChevronDown from 'components/assets/svg/ChevronDown';
import ChevronUp from 'components/assets/svg/ChevronUp';
import ChevronRight from 'components/assets/svg/ChevronRight';
import { FaListAlt } from "react-icons/fa";



const TableOfContents: FC<TableOfContentsProps> = ({questions}) => {

    const [showContent, setShowContent] = useState(true)

    return (
        <>
            <div className='border rounded-t-lg w-[404px]'>
                <div className="bg-[#F2F2F2] text-white p-4 flex justify-between items-center">
                    <h2 className="flex items-center text-lg gap-2">
                        <FaListAlt size={20} />
                        Table of Contents
                    </h2>
                    <div className='tbl-content-btn text-black' onClick={()=>setShowContent(!showContent)}>
                        {showContent ? <ChevronUp /> : <ChevronDown />}
                    </div>
                </div>
                {showContent &&
                    <div className='w-full flex flex-col gap-2 pb-4'>
                        {questions.map((item, index) => (
                            <div className='flex items-center gap-2 mx-4 mt-2'>
                                <span>
                                <ChevronRight />
                                </span>
                                <p key={index}>{item.question}</p>
                            </div>
                        ))

                        }
                    </div>
                }
            </div>   
        </>
    );
};

export default TableOfContents;