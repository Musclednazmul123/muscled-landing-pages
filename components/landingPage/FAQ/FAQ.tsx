import React from "react";
import QuestionCard from "./QuestionCard";
type Props = {};

export default function FAQ({}: Props) {
  const questionCardData = [
    {
      question: "What are ecommerce PPC services?",
      answer:
        " Ecommerce PPC services are for advertising on pay-per-click ad networks, like Google Ads, Bing, Microsoft Advertising, Facebook, and many more. You are to expect the development, management, and monitoring of your ad campaigns.",
    },
    {
      question: "How much do ecommerce PPC services cost?",
      answer:
        "Typically, ecommerce PPC plans cost $400 to $5000, it could also be 10 to 20% of your monthly ad spend. The price varies, depending on several factors like your intended ad spend or the PPC agency’s pricing.",
    },
  ];
  return (
    <>
      <h2 className="text-4xl font-bold leading-[52px] text-black text-opacity-80 mt-[120px]">
        FAQs about ecommerce PPC management services.
      </h2>
      <div className="space-y-5 mt-5">
        {questionCardData.map((i) => {
          return <QuestionCard question={i.question} ptag={i.answer} />;
        })}
      </div>
    </>
  );
}
