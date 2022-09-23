import { FC } from "react";
import { CardHeaderProps } from "../component.type";

const CardHeader: FC<CardHeaderProps> = ({ title, rate, type, children }) => {
	return (
		<div
			className={` flex flex-col items-center  py-10 h-72 gap-y-4 ${
				type === "premium"
					? "bg-red-6"
					: type === "ultimate"
					? "bg-red-9"
					: "bg-red-3"
			}`}>
			{children}
			<p className="font-bold text-2xl w-80 text-center">{title}</p>
			<div className={`text-center flex items-center grow ${
				type === "premium"
					? ""
					: type === "ultimate"
					? "-mb-[44px]"
					: "-mb-10"
			}`}>
				<span className="text-[40px] text-[#C40000]  font-bold  mr-4">
					${rate}
				</span>
				<span className="block text-black-800 text-xl mt-2">
					/ month
				</span>
			</div>
		</div>
	);
};

export default CardHeader;
