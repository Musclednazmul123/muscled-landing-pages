import { FC } from "react";

import { FaListAlt } from "react-icons/fa";
import { ChevronUpIcon } from "@heroicons/react/outline"

import { TableOfContentProps } from "../component.type";

const TableOfContent: FC<TableOfContentProps> = ({
	className,
	bgColor,
	titleColor,
	titleIconColor,
	contents,
	isOpen,
	contentsClassName,
	width="lg:max-w-[400px]",
	icon=<FaListAlt size={20} />,
	setIsOpen
}) => {

	return (
		<div className={`order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto 
		md:w-full ${width} self-start sticky top-0 ${className}`} onClick={() => setIsOpen()}>
			<div
				className={`${bgColor ? bgColor : "bg-[#3E5661]"} 
				 rounded-tl-[10px] rounded-tr-[10px] p-4 flex justify-between items-center
				  cursor-pointer w-full ${!isOpen && "rounded-[10px]" }`}>
				<h2 className={`flex items-center text-lg gap-2 ${
					titleColor ? titleColor : "text-white"
				}`}>
					{icon}
					Table of Contents
				</h2>
				<ChevronUpIcon className={`${titleIconColor ? titleIconColor : "text-white"} 
				transition-transform ${isOpen ? "rotate-0" : "rotate-180"} w-6`}/>
			</div>
			
				<div className={` ${isOpen ? `animate-slide  ${contentsClassName} py-8`: "animate-slideUp" }`}>
					{isOpen &&  contents }
				</div>
			
		</div>
	);
};

export default TableOfContent;