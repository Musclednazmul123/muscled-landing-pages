import React from "react";

type Props = {
  question: string;
  ptag: string;
  height: string;
};

export default function QuestionCard({ question, ptag, height }: Props) {
  const [faq, setFaq] = React.useState<boolean>();

  return (
    <>
      <div className="bg-white rounded-[10px] overflow-hidden">
        <div className="flex items-center justify-between pr-5 pl-[10px] py-[10px]">
          <p className="md:text-xl text-lg font-bold md:leading-[30px] leading-[30px] text-black text-opacity-70">
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
              d={faq ? "M19.5 12h-15" : "M12 4.5v15m7.5-7.5h-15"}
            />
          </svg>
        </div>
        <p
          className={`${
            faq ? `${height} pr-5 pl-[10px] py-[10px]` : `h-0`
          } duration-300 ease-in-out md:text-xl text-lg md:leading-[30px] leading-[30px] text-black text-opacity-70 `}
        >
          {ptag}
        </p>
      </div>
    </>
  );
}
