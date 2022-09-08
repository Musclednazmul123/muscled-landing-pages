import Link from "next/link";
import { useState } from "react";
import FlexLayout from "../layout/FlexLayout";
import ChevronDown from "./icons/ChevronDown";
import DoubleChevronRight from "./icons/DoubleChevronRight";
import List from "./icons/List";

type ContentLink = {
  title: string;
  url: string;
};

interface TableOfContentProp {
  links: ContentLink[];
}

const TableOfContent = ({ links }: TableOfContentProp) => {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="w-full border border-black/20 rounded-md">
      <header
        className="rounded-t-md w-full flex items-center justify-between bg-[#F2F2F2] p-3 cursor-pointer mb-[1px]"
        onClick={toggle}
      >
        <FlexLayout>
          <List /> <h4>Table of Contents</h4>
        </FlexLayout>
        <div
          className={`transition-transform ${
            isOpen ? "rotate-0" : "-rotate-180"
          }`}
        >
          <ChevronDown />
        </div>
      </header>

      <div className={`${isOpen ? "animate-slide" : "animate-slideUp"}`}>
        {isOpen && (
          <div className="p-5">
            {links.map((link, index) => (
              <div key={index} className="mb-3">
                <FlexLayout>
                  <DoubleChevronRight />
                  <Link href={link.url}>
                    <a className="text-sm">{link.title}</a>
                  </Link>
                </FlexLayout>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TableOfContent;
