import React from "react";
import {
  ChevronDoubleRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import {
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Paragraph7,
  Paragraph8,
} from "..";
import { TableOfContent } from "../";

const BlogArticle = () => {
  return (
    <div className="flex justify-center gap-7 relative">
      <div>
        {/* 1 Paragraph */}
        <Paragraph1 />
        {/* 2 Paragraph */}
        <Paragraph2 />
        {/* 3 Paragraph */}
        <Paragraph3 />
        {/* 4 Paragraph */}
        <Paragraph4 />
        {/* 5 Paragraph */}
        <Paragraph5 />
        {/* 6 Paragraph */}
        <Paragraph6 />
        {/* 7 Paragraph */}
        <Paragraph7 />
        {/* 8 Paragraph */}
        <Paragraph8 />
      </div>
      <div className="sticky top-10 self-start">
        <TableOfContent
          content={[
            "Muscled’s website design services are an investment in the success of your site.",
            "Award-winning web design. with open pricing.",
            "Our collectionof websites.",
            "What is included in Muscled’s Web Design servises.",
            "Why use Muscled as your website design partner?",
            "How Are Websites Designed by Muscled?",
            "Why use Muscled as your website design partner?",
            "Get Your Company a Website That is Focused on Performance.",
          ]}
          IconTable={<ChevronDoubleRightIcon />}
          IconContent={<ChevronDownIcon />}
        />
      </div>
    </div>
  );
};

export default BlogArticle;
