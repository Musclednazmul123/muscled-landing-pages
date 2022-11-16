import React from "react";
import Link from "next/link";

export type QuickLinksProps = {
  title?: string;
  links: Array<{
    to?: string;
    title?: string;
  }>;
};

const QuickLinks = (props: QuickLinksProps) => {
  return (
    <div className="bg-white p-8 text-black">
      <div className="font-medium text-2xl mb-10">{props.title}</div>
      {props.links.map((v, index) => {
        return (
          <div className="mb-7" key={index}>
            <Link href={v.to || "/"}>
              <a>
                <div>{v.title}</div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default QuickLinks;
