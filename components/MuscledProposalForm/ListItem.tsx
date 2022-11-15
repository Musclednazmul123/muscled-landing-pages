import React, { FC } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

interface ItemProps {
  title: string;
  description: string;
}

const ListItem: FC<ItemProps> = ({ title, description }) => {
  return (
    <div className="flex gap-x-[10px] items-start">
      <CheckCircleIcon className="text-white w-[75px] h-[75px] -mt-7" />
      <div className="flex flex-col gap-y-[20px]">
        <p className="text-white font-semibold text-xl leading-[20px]">
          {title}
        </p>
        <p className="text-lg leading-[30px] text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default ListItem;
