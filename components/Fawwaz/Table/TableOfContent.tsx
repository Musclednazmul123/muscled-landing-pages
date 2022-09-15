import { FC } from "react";

import { FaListAlt } from "react-icons/fa";
import { ChevronUpIcon } from "@heroicons/react/outline"

import { TableOfContentProps } from "../component.type";

const TableOfContent: FC<TableOfContentProps> = ({
	bgColor,
	titleColor,
	titleIconColor,
	contents,
	isOpen,
	setIsOpen
}) => {

	return (
		<div className={`border border-slate-300 rounded-lg order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px] h-fit	`} onClick={() => setIsOpen()}>
			<div
				className={`${bgColor ? bgColor : "bg-[#3E5661]"} 
				  p-4 flex justify-between items-center cursor-pointer rounded-lg	`}>
				<h2 className={`flex items-center text-lg gap-2 ${titleColor ? titleColor : "text-white"
					}`}>
					<FaListAlt size={20} />
					Table of Contents
				</h2>
				<ChevronUpIcon className={`${titleIconColor ? titleIconColor : "text-white"} ${isOpen ? "rotate-0" : "rotate-180"} w-8`} />
			</div>
			<ul className={`w-full ${isOpen ? "h-auto" : "h-0 hidden"} py-8	px-4`}>
				<div className="py-8">
					{contents}
				</div>
			</ul>
		</div>
	);
};

export default TableOfContent;
