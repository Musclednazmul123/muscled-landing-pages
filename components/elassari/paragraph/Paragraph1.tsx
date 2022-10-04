import React from "react";
import { Paragraph } from "../";

const Paragraph1 = () => {
  return (
      <Paragraph
        className="h-[605px]"
        title="Muscled's website design services are an investment in the success
        of your site."
      >
        <p>
          When you invest in our professional website design services, you will
          receive a website that’s:
        </p>
        <ul className="pl-8 list-decimal ">
          <Paragraph className="h-[202px] mx-0 mb-0">
            <li>responsive (sometimes called mobile-friendly)</li>
            <li>Designed with search engine optimization in mind (SEO) </li>
            <li>Secure (HTTPS) </li>
            <li>Stylistically appealing </li>
            <li>Unique</li>
          </Paragraph>
        </ul>
        <p>
          As part of the design of your expert website, you can incorporate
          extra functions. For instance, you can ask our experts to add
          e-commerce capabilities, incorporate a database into your design, and
          more.
        </p>
      </Paragraph>

      // {/* Table of content */}
      // <TableOfContent
      //   content={[
      //     "Muscled’s website design services are an investment in the success of your site.",
      //     "Award-winning web design. with open pricing.",
      //     "Our collectionof websites.",
      //     "What is included in Muscled’s Web Design servises.",
      //     "Why use Muscled as your website design partner?",
      //     "How Are Websites Designed by Muscled?",
      //     "Why use Muscled as your website design partner?",
      //     "Get Your Company a Website That is Focused on Performance.",
      //   ]}
      //   IconTable={<ChevronDoubleRightIcon />}
      //   IconContent={<ChevronDownIcon />}
      // />
      // {/* End Table of content */}
    
  );
};

export default Paragraph1;
