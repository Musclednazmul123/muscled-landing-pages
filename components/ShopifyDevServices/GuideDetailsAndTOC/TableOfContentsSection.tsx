import React, { FC, useState } from "react";

import { IconItem } from "../../Fawwaz/Card";
import { TableOfContent } from "../../Fawwaz/Table";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";

const TableOfContentsSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="w-[440px] sticky top-5 self-start">
      <TableOfContent
        className="border border-black-30  h-fit  rounded-[10px]"
        contentsClassName="px-[30px]"
        bgColor="bg-[#C40000] bg-opacity-40"
        titleColor="text-black"
        titleIconColor="black"
        isOpen={isOpen}
        setIsOpen={() => setIsOpen((prev) => !prev)}
        contents={
          <>
            <IconItem
              icon={<ChevronDoubleRightIcon className=" w-5 h-5 fill-black" />}
              title="Why should you work with the Muscled Shopify Development Team?"
              className=" mb-5 w-full items-center text-[#4491EC]"
            />
            <IconItem
              icon={<ChevronDoubleRightIcon className=" w-5 h-5 fill-black" />}
              title="Our Shopify Development Services"
              className="w-full items-center text-[#4491EC]"
            />
          </>
        }
      />
    </div>
  );
};

export default TableOfContentsSection;
