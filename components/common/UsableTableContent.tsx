import { IconItem } from "../Fawwaz/Card";
import { FaListAlt } from "react-icons/fa";
import vector1 from "components/assets/Vector-1.png";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface PropsTableMetaData {
  TableMetaData: {
    heading?: string;
    items?: { icon: any; title: string; className: string }[];
  };
}

const TableOfContent = ({ TableMetaData }: PropsTableMetaData) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    console.log("handle");
    setToggle(!toggle);
  };
  const { heading, items } = TableMetaData;
  return (
    <div className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full w-[440px]">
      <div className="bg-[#3E5661] text-white rounded-md p-4 flex justify-between items-center  w-[440px]">
        <h2 className="flex items-center text-lg gap-3 text-[#FFFFFF]">
          <FaListAlt size={26} />
          {heading}
        </h2>
        {toggle ? (
          <IoIosArrowDown size={25} onClick={handleClick} />
        ) : (
          <IoIosArrowUp size={25} onClick={handleClick} />
        )}
      </div>
      {toggle && (
        <ul className="w-full bg-[#FFFFFF] list-disc">
          {items?.map(
            (item: {
              icon: JSX.Element | undefined;
              title: string;
              className: string | undefined;
            }) => (
              <IconItem
                icon={item.icon}
                title={item.title}
                className={item.className}
                headingClassName="text-[#5F27BD] text-[20px]"
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default TableOfContent;
