import React from "react";

interface IProps {
  heading: string;
  items1: string;
  items2: string;
  items3?: string;
  items4?: string;
  items5?: string;
}

const SimpleCard = ({
  heading,
  items1,
  items2,
  items3,
  items4,
  items5,
}: IProps) => {
  return (
    <div className="xl:w-[30%] w-full font-sans bg-[#c400001a] ml-[20px] mb-20">
      <div className="pl-5 py-5 flex flex-col justify-start items-start">
        <h2 className="text-2xl font-medium">{heading}</h2>
        <ul className="py-5 text-xl font-sans">
          <li className="pb-3">{items1}</li>
          <li className="pb-3">{items2}</li>
          <li className="pb-3">{items3}</li>
          <li className="pb-3">{items4}</li>
          <li>{items5}</li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleCard;
