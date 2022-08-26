import Link from "next/link";
import { useState } from "react";
import FlexLayout from "./layout/FlexLayout";
import ChevronDown from "./assets/svg/ChevronDown";
import List from "./assets/svg/List";
import React, { FC } from "react";
import { TableOfContentProp } from "../types/types";

const TableOfContent: FC<TableOfContentProp> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="w-full border border-black/20 rounded-md">
      <header
        className="rounded-t-md w-full flex items-center justify-between bg-[#FAE8E8] text-sm p-3 cursor-pointer mb-[1px]"
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
            <ul className="list-disc text-[#518ADE] marker:text-[#518ADE] ml-2">
              {links.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link href={link.url}>
                    <a className="text-sm">{link.title}</a>
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
