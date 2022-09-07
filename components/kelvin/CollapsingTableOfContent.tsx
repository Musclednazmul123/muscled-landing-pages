import Link from "next/link";
import { useState } from "react";
import FlexLayout from "./layout/FlexLayout";
import ChevronDown from "../assets/svg/ChevronDown";
import List from "../assets/svg/List";
import React, { FC } from "react";
import { TableOfContentProp } from "./types";

const TableOfContent: FC<TableOfContentProp> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="w-full border border-black/20 rounded-md">
      <header
        className="rounded-t w-full flex items-center justify-between bg-[#FAE8E8] text-sm p-3 cursor-pointer mb-[1px] h-[64px]"
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

      <div
        className={`${
          isOpen ? "animate-slide bg-white" : "animate-slideUp bg-[#FAE8E8]"
        } rounded-b border-b`}
      >
        {isOpen && (
          <div className="py-10 px-8">
            <ul className="list-disc space-y-6 text-[#518ADE] marker:text-[#518ADE] ml-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>
                    <a className="">{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TableOfContent;
