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
	setIsOpen
}) => {

	return (
		<div className={`order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px] ${className}`} onClick={() => setIsOpen()}>
			<div
				className={`${bgColor ? bgColor : "bg-[#3E5661]"} 
				 rounded-md p-4 flex justify-between items-center cursor-pointer `}>
				<h2 className={`flex items-center text-lg gap-2 ${
					titleColor ? titleColor : "text-white"
				}`}>
					<FaListAlt size={20} />
					Table of Contents
				</h2>
				<ChevronUpIcon className={`${titleIconColor ? titleIconColor : "text-white"} ${isOpen ? "rotate-0" : "rotate-180"} w-6`}/>
			</div>
			<ul className={`w-full ${isOpen ? "h-auto" : "h-0 hidden"}`}>
				<div className="py-8">
					{ contents }
				</div>
			</ul>
		</div>
	);
};

export default TableOfContent;