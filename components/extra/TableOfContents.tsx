import React, { FC, useState } from 'react';
import { TableOfContentsProps } from '../../components/Fawwaz/component.type';
import { BiChevronDown, BiChevronUp, BiChevronsRight } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";



const TableOfContents: FC<TableOfContentsProps> = ({questions}) => {

    const [showContent, setShowContent] = useState(true)

    return (
        <>
            <div className='border rounded-t-lg pb-4'>
                <div className="bg-[#F2F2F2] text-white p-4 flex justify-between items-center">
                    <h2 className="flex items-center text-lg gap-2">
                        <FaListAlt size={20} />
                        Table of Contents
                    </h2>
                    <div className='text-black' onClick={()=>setShowContent(!showContent)}>
                        {showContent ? <BiChevronUp size={25} /> : <BiChevronDown size={25} />}
                    </div>
                </div>
                {showContent &&
                    <div className='table-content w-full flex flex-col gap-2'>
                        {questions.map((item, index) => (
                            <div className='flex items-center gap-2 mx-4 mt-2'>
                                <BiChevronsRight />
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