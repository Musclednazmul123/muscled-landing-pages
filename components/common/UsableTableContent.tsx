import { IconItem } from "../Fawwaz/Card";

import { FaListAlt } from "react-icons/fa";
import { AiOutlineUp } from "react-icons/ai";

import { BsDot } from "react-icons/bs";
import { constants } from "fs";
import vector1 from "components/assets/Vector-1.png";

interface PropsTableMetaData {
  TableMetaData: {
    heading?: string;
    items?: { icon: any; title: string; className: string }[];
  };
}

const TableOfContent = ({ TableMetaData }: PropsTableMetaData) => {
  const { heading, items } = TableMetaData;
  return (
    <div className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[440px]">
      <div className="bg-[#3E5661] text-white rounded-md p-4 flex justify-between items-center">
        <h2 className="flex items-center text-lg gap-2 text-[#FFFFFF]">
          <FaListAlt size={20} />
          {heading}
        </h2>

        <img
          src={vector1.src}
          height="15px"
          width="15px"
          className="mr-[12px]"
        />
      </div>
      <ul className="w-full bg-[#FFFFFF]">
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
    </div>
  );
};

export default TableOfContent;
