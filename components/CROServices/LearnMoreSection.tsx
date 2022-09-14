import React from "react";
import Link from "next/link";

export type LearnMoreSectionProps = {
  links?: Array<{ title: string; to: string }>;
};

const LearnMoreSection = (props: LearnMoreSectionProps) => {
  return (
    <div>
      <div className="font-bold text-[30px] leading-[39px] mb-10">
        Learn more about CRO
      </div>
      <div>
        {props.links?.map((link) => (
          <Link href={link.to}>
            <a>
              <p className="mb-[15px]">{link.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnMoreSection;
