import React from "react";

type Props = {
	question: string;
	ptag: string;
};

export default function SQuestionCard({ question, ptag }: Props) {
	const [faq, setFaq] = React.useState<boolean>();

	return (
		<>
			<div className="bg-white p-[10px]">
				<div className="flex items-center justify-between">
					<p className="md:text-xl text-lg font-bold leading-loose text-black text-opacity-70">
						{question}
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 cursor-pointer"
						onClick={() => setFaq(!faq)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d={faq ? "M12 4.5v15m7.5-7.5h-15" : "M19.5 12h-15"}
						/>
					</svg>
				</div>
				{faq && (
					<p className="md:text-xl text-lg leading-loose text-black text-opacity-70 mt-5">
						{ptag}
					</p>
				)}
			</div>
		</>
	);
}
